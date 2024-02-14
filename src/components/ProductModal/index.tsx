import { FlatList, Modal } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { Text } from '../Text'
import { Product } from '../../types/Product'

import {
	Image,
	Close,
	Header,
	ModalBody,
	IngredientsContainer,
	Ingredient,
	Footer,
	FooterContainer,
	PriceContainer,
} from './styles'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../Button'

interface ProductModalProps {
	visible: boolean
	onClose: () => void
	product: null | Product
	onAddToCart: (product: Product) => void
}

export function ProductModal({
	visible,
	onClose,
	product,
	onAddToCart,
}: ProductModalProps) {
	if (!product) return null

	function handleAddToCart() {
		onAddToCart(product!)
		onClose()
	}

	return (
		<Modal
			visible={visible}
			animationType="slide"
			presentationStyle="pageSheet"
			onRequestClose={onClose}>
			<Image
				source={require('../../../assets/chad-montano-eeqbbemH9-c-unsplash.jpg')}>
				<Close onPress={onClose}>
					<Feather
						name="x"
						size={24}
						color="#fff"
					/>
				</Close>
			</Image>

			<ModalBody>
				<Header>
					<Text
						size={24}
						weight="600">
						{product.name}
					</Text>
					<Text color="#666">{product.description}</Text>
				</Header>

				{product.ingredients.length > 0 && (
					<IngredientsContainer>
						<Text
							size={24}
							weight="600"
							color="#666">
							{product.name}
						</Text>

						<FlatList
							data={product.ingredients}
							keyExtractor={(ingredient) => ingredient._id}
							showsVerticalScrollIndicator={false}
							style={{ marginTop: 16 }}
							renderItem={({ item: ingredient }) => (
								<Ingredient>
									<Text>{ingredient.icon}</Text>
									<Text
										size={14}
										color="#666">
										{ingredient.name}
									</Text>
								</Ingredient>
							)}
						/>
					</IngredientsContainer>
				)}
			</ModalBody>

			<Footer>
				<FooterContainer>
					<PriceContainer>
						<Text color="#666">Preço</Text>
						<Text
							size={20}
							weight="600">
							{formatCurrency(product.price)}
						</Text>
					</PriceContainer>

					<Button onPress={handleAddToCart}>Adicionar ao Pedido</Button>
				</FooterContainer>
			</Footer>
		</Modal>
	)
}
