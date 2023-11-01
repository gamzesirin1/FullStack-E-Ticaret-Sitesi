import './App.css'

import { Route, Routes } from 'react-router-dom'

import AdminUserPage from './pages/admin/AdminUserPage'
import AuthPage from './pages/AuthPage'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/admin/categories/CategoryPage'
import ContactPage from './pages/ContactPage'
import CouponPage from './pages/admin/coupons/CouponPage'
import CreateCategoryPage from './pages/admin/categories/CreateCategoryPage'
import CreateCouponPage from './pages/admin/coupons/CreateCouponPage'
import CreateProductPage from './pages/admin/products/CreateProductPage'
import DashboardPage from './pages/admin/dashboardPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductPage from './pages/admin/products/ProductPage'
import ShopPage from './pages/ShopPage'
import UpdateCatgeoryPage from './pages/admin/categories/UpdateCategoryPage'
import UpdateCouponPage from './pages/admin/coupons/UpdateCouponPage'
import UpdateProductPage from './pages/admin/products/UpdateProductPage'

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
			<Route path="/admin" element={<DashboardPage />} />
			<Route path="/admin/users" element={<AdminUserPage />} />
			<Route path="/admin/categories" element={<CategoryPage />} />
			<Route path="/admin/categories/create" element={<CreateCategoryPage />} />
			<Route path="/admin/categories/update/:id" element={<UpdateCatgeoryPage />} />
			<Route path="/admin/products" element={<ProductPage />} />
			<Route path="/admin/products/create" element={<CreateProductPage />} />
			<Route path="/admin/products/update/:id" element={<UpdateProductPage />} />
			<Route path="/admin/coupons" element={<CouponPage />} />
			<Route path="/admin/coupons/create" element={<CreateCouponPage />} />
			<Route path="/admin/coupons/update/:id" element={<UpdateCouponPage />} />
		</Routes>
	)
}

export default App
