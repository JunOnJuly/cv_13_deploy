import styled from 'styled-components'
import { colors } from '../../../design/Design'

export const TeamBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 60vh;
  width: 80vw;
`

export const TeamText = styled.p`
  margin: 0;

  font-family: 'WorkSans';
  color: ${colors.Nav};
  font-size: 2vh;
  cursor: default;
`