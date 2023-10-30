import { Button, Popconfirm, Table } from 'antd'
import { useEffect, useState } from 'react'

const AdminUserPage = () => {
	const [dataSource, setDataSource] = useState([])
	const [loading, setLoading] = useState(false)

	const fetchData = async () => {
		setLoading(true)
		const response = await fetch('http://localhost:5000/api/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',

				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		const data = await response.json()
		setDataSource(data)
		setLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleDelete = async (email) => {
		try {
			const response = await fetch(`http://localhost:5000/api/users/${email}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			if (response.ok) {
				fetchData()
			}
		} catch (error) {
			console.log(error)
		}
	}

	const columns = [
		{
			title: 'Avatar',
			dataIndex: 'avatar',
			key: 'avatar',
			render: (imgSrc) => (
				<img
					src={imgSrc}
					alt="Avatar"
					style={{
						width: '50px',
						height: '50px',
						borderRadius: '50%'
					}}
				/>
			)
		},
		{
			title: 'Username',
			dataIndex: 'username',
			key: 'username'
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email'
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role'
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: (_, record) => (
				<Popconfirm
					title="Kullanıcıyı Sil"
					description="Kullanıcıyı silmek istediğinizden emin misiniz?"
					okText="Yes"
					cancelText="No"
					onConfirm={() => handleDelete(record.email)}
				>
					<Button type="primary" danger>
						Delete
					</Button>
				</Popconfirm>
			)
		}
	]

	return (
		<>
			<Table dataSource={dataSource} columns={columns} rowKey={(record) => record._id} loading={loading} />
		</>
	)
}
export default AdminUserPage
