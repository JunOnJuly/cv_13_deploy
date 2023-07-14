import styled from 'styled-components'
import { colors } from '../../../design/Design'

export const sendImageBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: 70vh;
  min-width: 80vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.WhiteBlue}
`

export const imageSendTextDiv = styled.div`
  width: 25vw;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

export const imageSendText = styled.p`
  font-family: 'WorkSans';
  color: ${colors.Else};
  font-size: 13vh;
  margin: 0;
  cursor: default;
`
export const imageSelectForm = styled.form`
  width: 40vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.Nav};

  margin-right: ${(props) => props.margin};
`

export const imageSelectBtn = styled.input`
  display: none;
`

export const imageSelectLabel = styled.label`
  width: 40vw;
  height: 60vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  display: ${(props) => props.select};
  font-size: 20vh;
  color: white;
`

export const imageSendLabel = styled.label`
  width: 40vw;
  height: 60vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  display: ${(props) => props.send};
  font-size: 20vh;
  color: white;
`

export const imageCheckDiv = styled.div`
  height: 60vh;
`

export const imageCheckImage = styled.img`
  height: 60vh;
  margin: 0 5vw 0 0
`

export const imageSubmitBtn = styled.input`
  display: none;
`