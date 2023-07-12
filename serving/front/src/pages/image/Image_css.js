import styled from 'styled-components'
import { colors } from '../../design/Design'

export const ImageBackground = styled.div`
  position: absolute;
  top: 20vh;
  left: 0;

  height: 80vh;
  width: 100vw;
`

export const TempText = styled.p`
  position: absolute;
  left: 10vw;
  color: ${colors.Nav}
`