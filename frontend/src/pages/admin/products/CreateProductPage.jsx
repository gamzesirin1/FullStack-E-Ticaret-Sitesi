import 'react-quill/dist/quill.snow.css'

import { Button, Form, Input, InputNumber, Select, Spin, message } from 'antd'
import { useEffect, useState } from 'react'

import ReactQuill from 'react-quill'

const CreateProductPage = () => {
	const [loading, setLoading] = useState(false)
	const [categories, setCategories] = useState([])
	const [form] = Form.useForm()
	const apiUrl = import.meta.env.VITE_API_BASE_URL

	useEffect(() => {
		const fetchCategories = async () => {
			setLoading(true)
			try {
				const response = await fetch(`${apiUrl}/api/categories`)
				if (response.ok) {
					const data = await response.json()
					setCategories(data)
				} else {
					message.error('Veri getirme başarısız.')
				}
			} catch (error) {
				console.log('Veri hatası:', error)
			} finally {
				setLoading(false)
			}
		}
		fetchCategories()
	}, [apiUrl])

	const onFinish = async (values) => {
		console.log(values)
		const imgLink = values.img.split('\n').map((link) => link.trim() !== '')
		const colors = values.colors.split('\n').map((link) => link.trim() !== '')
		const sizes = values.sizes.split('\n').map((link) => link.trim() !== '')
		setLoading(true)
		try {
			const response = await fetch(`${apiUrl}/api/products`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...values,
					price: {
						current: values.current,
						discount: values.discount
					},
					img: imgLink,
					colors,
					sizes
				})
			})

			if (response.ok) {
				message.success('Ürün başarıyla oluşturuldu.')
				form.resetFields()
			} else {
				message.error('Ürün oluşturulurken bir hata oluştu.')
			}
		} catch (error) {
			console.log('Ürün güncelleme hatası:', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<Spin spinning={loading}>
			<Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
				<Form.Item
					label="Ürün İsmi"
					name="name"
					rules={[
						{
							required: true,
							message: 'Lütfen ürün adını girin!'
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Ürün Kategorisi"
					name="category"
					rules={[
						{
							required: true,
							message: 'Lütfen en az 1 ürün kategorisi seçin!'
						}
					]}
				>
					<Select>
						{categories.map((category) => (
							<Select.Option key={category._id} value={category._id}>
								{category.name}
							</Select.Option>
						))}
					</Select>
				</Form.Item>

				<Form.Item
					label="Ürün Fiyatı"
					name="current"
					rules={[
						{
							required: true,
							message: 'Lütfen ürün fiyatını girin!'
						}
					]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					label="İndirim Oranı"
					name="discount"
					rules={[
						{
							required: true,
							message: 'Lütfen indirim oranını girin!'
						}
					]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					label="Ürün Açıklaması"
					name="description"
					rules={[
						{
							required: true,
							message: 'Lütfen ürün açıklaması girin!'
						}
					]}
				>
					<ReactQuill theme="snow" style={{ backgroundColor: 'white' }} />
				</Form.Item>

				<Form.Item
					label="Ürün Görselleri (Linkler)"
					name="img"
					rules={[
						{
							required: true,
							message: 'Lütfen en az 4 ürün görsel linki girin!'
						}
					]}
				>
					<Input.TextArea placeholder="Linkleri ayrı ayrı satırlara girin." autoSize={{ minRows: 4 }} />
				</Form.Item>

				<Form.Item
					label="Ürün Renkleri (RGB)"
					name="colors"
					rules={[
						{
							required: true,
							message: 'Lütfen en az 1 renk kodu girin!'
						}
					]}
				>
					<Input.TextArea placeholder="Renk kodlarını ayrı ayrı satırlara girin." autoSize={{ minRows: 4 }} />
				</Form.Item>

				<Form.Item
					label="Ürün Bedenleri (RGB)"
					name="sizes"
					rules={[
						{
							required: true,
							message: 'Lütfen en az 1 ürün beden ölçüsü girin!'
						}
					]}
				>
					<Input.TextArea placeholder="Her bir beden ölçüsünü ayrı ayrı satırlara girin." autoSize={{ minRows: 4 }} />
				</Form.Item>

				<Button type="primary" htmlType="submit">
					Oluştur
				</Button>
			</Form>
		</Spin>
	)
}

export default CreateProductPage
