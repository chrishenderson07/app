import { useState } from 'react'
import { ActivityIndicator } from 'react-native'

import { Button } from '../components/Button'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { TableModal } from '../components/TableModal'
import {
	Container,
	CategoriesContainer,
	MenuContainer,
	Footer,
	CenteredContainer,
} from './styles'
import { Cart } from '../components/Cart'
import { CartItem } from '../types/CartItem'
import { Product } from '../types/Product'
import { products as mockProducts } from '../assets/mocks/products'
import { Text } from '../components/Text'
import { Empty } from '../assets/Icons/Empty'

export function Main() {
	const [isTableModalVisible, setIsTableModalVisible] = useState(false)
	const [selectedTable, setSelectedTable] = useState('')
	const [cartItem, setCartItems] = useState<CartItem[]>([])
	const [isLoading] = useState(false)
	const [products] = useState<Product[]>(mockProducts)

	function handleSaveTable(table: string) {
		setSelectedTable(table)
	}

	function handleResetOrder() {
		setSelectedTable('')
		setCartItems([])
	}

	function handleAddToCart(product: Product) {
		if (!selectedTable) {
			setIsTableModalVisible(true)
		}

		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(
				(cartItem) => cartItem.product._id === product._id,
			)
			if (itemIndex < 0) {
				return prevState.concat({
					quantity: 1,
					product,
				})
			}

			const newCartItems = [...prevState]
			const item = newCartItems[itemIndex]
			newCartItems[itemIndex] = {
				...item,
				quantity: item.quantity + 1,
			}

			return newCartItems
		})
	}

	function handleDecrementCartItem(product: Product) {
		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(
				(cartItem) => cartItem.product._id === product._id,
			)

			const item = prevState[itemIndex]
			const newCartItems = [...prevState]

			if (item.quantity === 1) {
				newCartItems.splice(itemIndex, 1)

				return newCartItems
			}

			newCartItems[itemIndex] = {
				...item,
				quantity: item.quantity - 1,
			}

			return newCartItems
		})
	}

	return (
		<>
			<Container>
				<Header
					selectedTable={selectedTable}
					onCancelOrder={handleResetOrder}
				/>

				{isLoading && (
					<CenteredContainer>
						<ActivityIndicator
							color="#D73035"
							size="large"
						/>
					</CenteredContainer>
				)}

				{!isLoading && (
					<>
						<CategoriesContainer>
							<Categories />
						</CategoriesContainer>

						{products.length > 0 ? (
							<MenuContainer>
								<Menu
									onAddToCart={handleAddToCart}
									products={products}
								/>
							</MenuContainer>
						) : (
							<CenteredContainer>
								<Empty />
								<Text
									color="#666"
									style={{ marginTop: 24 }}>
									Nenhum produto foi encontrado!
								</Text>
							</CenteredContainer>
						)}
					</>
				)}

				<Footer>
					{/* <FooterContainer> */}
					{!selectedTable && (
						<Button
							onPress={() => setIsTableModalVisible(true)}
							disabled={isLoading}>
							Novo Pedido
						</Button>
					)}

					{selectedTable && (
						<Cart
							cartItems={cartItem}
							onAdd={handleAddToCart}
							onDecrement={handleDecrementCartItem}
							onConfirmOrder={handleResetOrder}
						/>
					)}
					{/* </FooterContainer> */}
				</Footer>
			</Container>

			<TableModal
				visible={isTableModalVisible}
				onClose={() => setIsTableModalVisible(false)}
				onSave={handleSaveTable}
			/>
		</>
	)
}
