import { FlatList, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Product, ProductImage, ProductDetails, Separator } from './styles'
import { Text } from '../Text'

import { products } from '../../assets/mocks/products'
import { formatCurrency } from '../../utils/formatCurrency'

export function Menu() {
	return (
		<FlatList
			data={products}
			style={{ marginTop: 32 }}
			contentContainerStyle={{ paddingHorizontal: 24 }}
			keyExtractor={(product) => product._id}
			ItemSeparatorComponent={Separator}
			renderItem={({ item: product }) => (
				<Product>
					<ProductImage
						source={require('../../../assets/chad-montano-eeqbbemH9-c-unsplash.jpg')}
					/>
					<ProductDetails>
						<Text weight="600">{product.name}</Text>
						<Text
							color="#666"
							size={14}
							style={{ marginVertical: 8 }}>
							{product.description}
						</Text>
						<Text
							size={14}
							weight="600">
							{formatCurrency(product.price)}
						</Text>
					</ProductDetails>

					<TouchableOpacity
						style={{ position: 'absolute', right: 0, bottom: 0 }}>
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
				</Product>
			)}
		/>
	)
}
