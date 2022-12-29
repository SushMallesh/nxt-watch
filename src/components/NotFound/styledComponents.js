import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.theme ? '#181818' : '#f9f9f9')};
`

export const NotFoundImage = styled.img`
  height: 200px;
  width: 200px;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.theme ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-size: 32px;
`
export const NotFoundDescription = styled.p`
  color: ;
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`
