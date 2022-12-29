import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  @media (min-width: 768px) {
    width: 100%;
    padding: 50px 0px 20px 20px;
  }
`

export const SideBarItems = styled.div`
  min-height: 70vh;
  @media (min-width: 768px) {
    min-height: 100vh;
  }
`
export const SideBarItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  line-height: 0.3;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`
export const SideBarItem = styled.p`
  font-size: 12px;
  color: #616e7c;
  font-weight: 500;
  width: 100%;
  margin-left: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    width: 70%;
    margin-left: 0;
  }
`
export const ContactUsContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const ContactUsText = styled.h1`
  color: #424242;
  font-size: 20px;
  font-family: 'Roboto';
  padding-left: 10px;
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const ContactUsDescription = styled(ContactUsText)`
  font-size: 18px;
  font-weight: 600;
  padding-left: 8px;
  margin-top: 20px;
  width: 70%;
  line-height: 1.5;
`
