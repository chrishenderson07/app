import styled from 'styled-components/native'

export const Image = styled.ImageBackground`
	width: 100%;
	height: 200px;
`

export const Close = styled.TouchableOpacity`
	background-color: 'rgba(0,0,0,0.5)';
	padding: 4px;
	border-radius: 18px;
	position: absolute;
	top: 15;
	right: 15;
`

export const Header = styled.View`
	gap: 8px;
`

export const ModalBody = styled.View`
	background-color: '#fafafa';
	flex: 1;

	padding: 32px 24px 0;
`

export const IngredientsContainer = styled.View`
	margin-top: 32px;
	flex: 1;
`

export const Ingredient = styled.View`
	border: 1px solid rgba(204, 204, 204, 0.3);
	border-radius: 8px;
	padding: 16px;
	flex-direction: row;
	align-items: center;
	gap: 20px;
	margin-bottom: 4px;
`

export const Footer = styled.View`
	min-height: 110px;
	padding: 16px 24px;
	background-color: '#fff';
`
export const FooterContainer = styled.SafeAreaView`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const PriceContainer = styled.View``
