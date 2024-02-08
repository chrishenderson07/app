import styled from 'styled-components/native'

interface TextProps {
	weight?: '400' | '500' | '600'
	color?: string
	size?: number
	opacity?: number
}

export const Text = styled.Text<TextProps>`
	font-family: ${({ weight }: TextProps) =>
		weight ? `GeneralSans-${weight}` : 'GeneralSans-400'};
	color: ${({ color }: TextProps) => color || '#333'};
	font-size: ${({ size }: TextProps) => size || '16px'};
	opacity: ${({ opacity }: TextProps) => opacity || 1};
`
