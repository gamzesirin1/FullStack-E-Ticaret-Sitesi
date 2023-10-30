import './App.css'

import { Route, Routes } from 'react-router-dom'

import AdminUserPage from './pages/admin/AdminUserPage'
import AuthPage from './pages/AuthPage'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/admin/categories/CategoryPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ShopPage from './pages/ShopPage'
import UpdateCatgeoryPage from './pages/admin/categories/UpdateCatgeoryPage'

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shop" element={<ShopPage />} />
			<Route path="/blog" element={<BlogPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/auth" element={<AuthPage />} />
			<Route path="/products/:id" element={<ProductDetailsPage />} />
			<Route path="/blog/:id" element={<BlogPage />} />
			<Route path="/admin/users" element={<AdminUserPage />} />
			<Route path="/admin/categories" element={<CategoryPage />} />
			<Route path="/admin/categories/update/:id" element={<UpdateCatgeoryPage />} />
		</Routes>
	)
}

export default App
