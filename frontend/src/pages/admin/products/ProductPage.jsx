import { Button, Popconfirm, Space, Table, message } from 'antd'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
	const [dataSource, setDataSource] = useState([])
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()
	const apiUrl = import.meta.env.VITE_API_BASE_URL

	const handleDelete = async (productId) => {
		try {
			const response = await fetch(`${apiUrl}/api/products/${productId}`, {
				method: 'DELETE'
			})
			if (response.ok) {
				message.success('Kategori başarıyla silindi.')
				setDataSource((prevProducts) => {
					return prevProducts.filter((product) => product._id !== productId)
				})
			} else {
				message.error('Silme işlemi başarısız.')
			}
		} catch (error) {
			console.log('Silme hatası:', error)
		}
	}
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const [categoriesResponse, productsResponse] = await Promise.all([
					fetch(`${apiUrl}/api/categories`),
					fetch(`${apiUrl}/api/products`)
				])
				if (!categoriesResponse.ok || !productsResponse.ok) {
					message.error('Veri getirme başarısız.')
				}
				const [categoriesData, productsData] = await Promise.all([categoriesResponse.json(), productsResponse.json()])
				const productsWithCategories = productsData.map((product) => {
					const categoryId = product.category
					const category = categoriesData.find((item) => item._id === categoryId)
					return {
						...product,
						categoryName: category ? category.name : ''
					}
				})
				setDataSource(productsWithCategories)
			} catch (error) {
				console.log('veri hatası : ', error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [apiUrl])
	const columns = [
		{
			title: 'Ürün Görseli',
			dataIndex: 'img',
			key: 'img',
			render: (imgSrc) => (
				<img
					src={imgSrc[0]}
					alt="Image"
					style={{
						width: '50px',
						height: '50px'
					}}
				/>
			)
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <b>{text}</b>
		},
		{
			title: 'Kategori',
			dataIndex: 'categoryName',
			key: 'categoryName',
			render: (text) => <span>{text}</span>
		},
		{
			title: 'Fiyat',
			dataIndex: 'price',
			key: 'price',
			render: (text) => <span>{text.current.toFixed(2)}</span>
		},
		{
			title: 'İndirim',
			dataIndex: 'price',
			key: 'price',
			render: (text) => <span> % {text.discount}</span>
		},
		{
			title: 'Oluşturma Tarihi',
			dataIndex: 'createdAt',
			key: 'createdAt'
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: (_, record) => (
				<Space>
					<Button type="primary" onClick={() => navigate(`/admin/products/update/${record._id}`)}>
						Düzenle
					</Button>
					<Popconfirm
						title="Kullanıcıyı Sil"
						description="Kullanıcıyı silmek istediğinizden emin misiniz?"
						okText="Yes"
						cancelText="No"
						onConfirm={() => handleDelete(record._id)}
					>
						<Button type="primary" danger>
							Delete
						</Button>
					</Popconfirm>
				</Space>
			)
		}
	]

	return <Table dataSource={dataSource} columns={columns} rowKey={(record) => record._id} loading={loading} />
}
export default ProductPage
