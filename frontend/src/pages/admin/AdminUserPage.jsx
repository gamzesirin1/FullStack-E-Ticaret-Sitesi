import { Button, Popconfirm, Table } from 'antd'

import { useState } from 'react'

const AdminUserPage = () => {
	const [dataSource, setDataSource] = useState([])
	const [loading, setLoading] = useState(false)

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
					onConfirm={() => deleteUser(record.email)}
				>
					<Button type="primary" danger>
						Delete
					</Button>
				</Popconfirm>
			)
		}
	]

	return <Table dataSource={dataSource} columns={columns} rowKey={(record) => record._id} loading={loading} />
}
export default AdminUserPage
