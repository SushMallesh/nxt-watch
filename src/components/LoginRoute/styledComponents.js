import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  box-shadow: 0px 2px 10px 4px #f1f1f1;
  border-radius: 10px;
  width: 80%;
  max-width: 550px;
  @media (min-width: 768px) {
    width: 45%;
    max-width: 1110px;
  }
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 440px;
  align-items: center;
  padding: 20px;
`
export const WebSiteLogo = styled.img`
  width: 180px;
  height: 60px;
`

export const UserCredentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-self: center;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-height: 220px;
`
export const InputLabel = styled.label`
  color: #7e858e;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
`

export const CustomInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #cbd5e1;
  margin-top: 8px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
export const CustomCheckBox = styled.input`
  height: 18px;
  width: 18px;
`

export const CheckBoxLabel = styled(InputLabel)`
  color: #1e293b;
  font-size: 15px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  font-size: 20px;
  font-weight: 600;
  color: #f1f1f1;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  align-self: stretch;
  padding: 10px;
  width: 70%;
  margin-left: 40px;
  @media (min-width: 768px) {
    width: 70%;
    margin-left: 69px;
  }
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 14px;
  align-self: flex-start;
  margin-left: 69px;
`
