import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { CartItem } from '../../types/CartItem'

import {
	Item,
	ProductContainer,
	Actions,
	Image,
	QuantityContainer,
	ProductDetails,
	Summary,
	TotalContainer,
} from './styles'
import { Text } from '../Text'
import { formatCurrency } from '../../utils/formatCurrency'
import { PlusCircle } from '../../assets/Icons/PlusCircle'
import { MinusCircle } from '../../assets/Icons/MinusCircle'
import { Button } from '../Button'
import { Product } from '../../types/Product'
import { OrderConfirmedModal } from '../OrderConfirmedModal'

interface CartProps {
	cartItems: CartItem[]
	onAdd: (product: Product) => void
	onDecrement: (product: Product) => void
	onConfirmOrder: () => void
}

export function Cart({
	cartItems,
	onAdd,
	onDecrement,
	onConfirmOrder,
}: CartProps) {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const total = cartItems.reduce((acc, cartItem) => {
		return acc + cartItem.quantity * cartItem.product.price
	}, 0)

	function handleConfirmOrder() {
		setIsModalVisible(true)
	}

	function handleOk() {
		onConfirmOrder()
		setIsModalVisible(false)
	}
	return (
		<>
			<OrderConfirmedModal
				visible={isModalVisible}
				onOk={handleOk}
			/>
			{cartItems.length > 0 && (
				<FlatList
					data={cartItems}
					keyExtractor={(cartItem) => cartItem.product._id}
					showsVerticalScrollIndicator={false}
					style={{ marginBottom: 20, maxHeight: 150 }}
					renderItem={({ item: cartItem }) => (
						<Item>
							<ProductContainer>
								<Image
									source={require('../../../assets/chad-montano-eeqbbemH9-c-unsplash.jpg')}></Image>

								<QuantityContainer>
									<Text
										size={14}
										color="#666">
										{cartItem.quantity}x
									</Text>
								</QuantityContainer>
								<ProductDetails>
									<Text
										size={14}
										weight="600">
										{cartItem.product.name}
									</Text>
									<Text
										size={14}
										color="#666">
										{formatCurrency(cartItem.product.price)}
									</Text>
								</ProductDetails>
							</ProductContainer>
							<Actions>
								<TouchableOpacity onPress={() => onAdd(cartItem.product)}>
									<PlusCircle />
								</TouchableOpacity>
								<TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
									<MinusCircle />
								</TouchableOpacity>
							</Actions>
						</Item>
					)}
				/>
			)}
			<Summary>
				<TotalContainer>
					{cartItems.length > 0 ? (
						<>
							<Text color="#666">Total</Text>
							<Text
								size={20}
								weight="600">
								{formatCurrency(total)}
							</Text>
						</>
					) : (
						<Text color="#666">Seu carrinho está vazio</Text>
					)}
				</TotalContainer>
				<Button
					onPress={handleConfirmOrder}
					disabled={cartItems.length === 0}
					loading={isLoading}>
					Confirmar Pedido
				</Button>
			</Summary>
		</>
	)
}
