import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.img`
  height: 360px;
  width: 350px;
`
export const Text = styled.h1`
  color: ${props => (props.para ? '#909090' : '#383838')};
  font-family: Roboto;
  font-size: ${props => (props.para ? '20px' : '28px')};
  line-height: 0.5;
`
export const RetryButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #4f46e5;
  font-weight: 600;
  font-size: 15px;
  color: #f1f1f1;
  border-radius: 8px;
  padding: 12px 30px 12px 30px;
`
