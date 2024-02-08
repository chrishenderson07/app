import { useState } from 'react'
import { FlatList } from 'react-native'
import { Text } from '../Text'

import { Category, Icon } from './styles'

import { categories } from '../../assets/mocks/categories'
export function Categories() {
	const [selectedCategory, setSelectedCategory] = useState('')

	function handleSelectCategory(categoryId: string) {
		const category = selectedCategory === categoryId ? '' : categoryId
		setSelectedCategory(category)
	}

	return (
		<FlatList
			horizontal
			data={categories}
			contentContainerStyle={{ paddingRight: 24 }}
			showsHorizontalScrollIndicator={false}
			keyExtractor={(category) => category._id}
			renderItem={({ item: category }) => {
				const isSelected = selectedCategory === category._id

				return (
					<Category onPress={() => handleSelectCategory(category._id)}>
						<Icon>
							<Text opacity={isSelected ? 1 : 0.8}>{category.icon}</Text>
						</Icon>
						<Text
							size={14}
							weight="600"
							opacity={isSelected ? 1 : 0.8}>
							{category.name}
						</Text>
					</Category>
				)
			}}
		/>
	)
}
