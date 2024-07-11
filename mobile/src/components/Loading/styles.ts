import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import { ActivityIndicator } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.zinc[950]};
`;

export const StyledActivityIndicator = styled(ActivityIndicator).attrs({
  size: 24,
  color: colors.lime[300]
})``;