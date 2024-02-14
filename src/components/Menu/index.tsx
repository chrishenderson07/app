import { FlatList, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import {
	ProductContainer,
	ProductImage,
	ProductDetails,
	Separator,
} from './styles'
import { Text } from '../Text'

import { formatCurrency } from '../../utils/formatCurrency'
import { ProductModal } from '../ProductModal'
import { useState } from 'react'
import { Product } from '../../types/Product'

interface MenuProps {
	onAddToCart: (product: Product) => void
	products: Product[]
}

export function Menu({ onAddToCart, products }: MenuProps) {
	const [isModalVisible, setisModalVisible] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState<null | Product>(null)

	function handleOpenModal(product: Product) {
		setisModalVisible(true)
		setSelectedProduct(product)
	}

	return (
		<>
			<ProductModal
				visible={isModalVisible}
				onClose={() => setisModalVisible(false)}
				product={selectedProduct}
				onAddToCart={onAddToCart}
			/>

			<FlatList
				data={products}
				style={{ marginTop: 32 }}
				contentContainerStyle={{ paddingHorizontal: 24 }}
				keyExtractor={(product) => product._id}
				ItemSeparatorComponent={Separator}
				renderItem={({ item: product }) => (
					<ProductContainer onPress={() => handleOpenModal(product)}>
						<ProductImage
							source={require('../../../assets/chad-montano-eeqbbemH9-c-unsplash.jpg')}
						/>
						<ProductDetails>
							<Text weight="600">{product.name}</Text>
							<Text
								color="#666"
								size="14px"
								style={{ marginVertical: 8 }}>
								{product.description}
							</Text>
							<Text
								size="14px"
								weight="600">
								{formatCurrency(product.price)}
							</Text>
						</ProductDetails>

						<TouchableOpacity
							style={{ position: 'absolute', right: 0, bottom: 0 }}
							onPress={() => onAddToCart(product)}>
							<Feather
								name="plus"
								size={20}
								color="#d73035"
								style={{
									textAlign: 'center',
									lineHeight: 20,
									justifyContent: 'center',
									borderColor: '#d73035',
									borderWidth: 1,
									borderRadius: 32,
									padding: 2,
								}}
							/>
						</TouchableOpacity>
					</ProductContainer>
				)}
			/>
		</>
	)
}
