import styled from 'styled-components/native';
import { colors } from '../styles/colors'
import { fontFamily } from '../styles/fontFamily';

export const ContainerLayout = styled.View`
  flex: 1;
  background-color: ${colors.zinc[950]};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.zinc[400]};
  font-size: 20px;
  font-family: ${fontFamily.regular};  
  text-align: center;
`;

export const Logo = styled.Image`
  height: 32px;
`