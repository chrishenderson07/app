import { useState } from 'react'

import { Modal, TouchableOpacity, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Text } from '../Text'

import { Overlay, ModalBody, Header, Form, Input } from './styles'
import { Button } from '../Button'

interface TableModalProps {
	visible: boolean
	onClose: () => void
	onSave: (table: string) => void
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
	const [table, setTable] = useState('')

	function handleSave() {
		onSave(table)
		onClose()
	}
	return (
		<Modal
			visible={visible}
			transparent
			animationType="fade">
			<Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
				<ModalBody>
					<Header>
						<Text weight="600">Informe a Mesa</Text>

						<TouchableOpacity onPress={onClose}>
							<Feather
								name="x"
								size={24}
								color="#666"
							/>
						</TouchableOpacity>
					</Header>

					<Form>
						<Input
							placeholder="Número da mesa"
							placeholderTextColor="#666"
							keyboardType="number-pad"
							onChangeText={setTable}
						/>

						<Button
							onPress={() => {
								handleSave()
							}}
							disabled={table.length === 0}>
							Salvar
						</Button>
					</Form>
				</ModalBody>
			</Overlay>
		</Modal>
	)
}
