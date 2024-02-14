import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android'

export const Container = styled.View`
	padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0px'};
	flex: 1;
	background-color: '#F5F5F5';
`
export const CategoriesContainer = styled.View`
	height: 73px;
	margin-top: 24px;
`

export const MenuContainer = styled.View`
	flex: 1;
`

export const Footer = styled.View`
	min-height: 110px;
	padding: 16px 24px;
`
export const FooterContainer = styled.SafeAreaView``

export const CenteredContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`
