import { TouchableOpacity } from 'react-native'
import { Text } from '../Text'

interface HeaderProps {
	selectedTable: string
	onCancelOrder: () => void
}

import { Container, Content, OrderHeader, Table } from './styles'
export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
	return (
		<Container>
			{!selectedTable && (
				<>
					<Text
						size={14}
						opacity={0.9}>
						Bem Vindo(a) ao
					</Text>
					<Text
						size={24}
						weight={700}>
						WAITER<Text size={24}>APP</Text>
					</Text>
				</>
			)}

			{selectedTable && (
				<Content>
					<OrderHeader>
						<Text
							size={24}
							weight={600}>
							Pedido
						</Text>
						<TouchableOpacity onPress={onCancelOrder}>
							<Text
								size={14}
								color="#D73035"
								weight="600">
								cancelar pedido
							</Text>
						</TouchableOpacity>
					</OrderHeader>

					<Table>
						<Text color="#666">Mesa {selectedTable}</Text>
					</Table>
				</Content>
			)}
		</Container>
	)
}
