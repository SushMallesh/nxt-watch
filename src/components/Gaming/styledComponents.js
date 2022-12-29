import styled from 'styled-components'

export const AppGamingContainer = styled.div`
  max-width: 550px;
  @media (min-width: 768px) {
    max-width: 1150px;
  }
`

export const GamingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding-left: 20px;
  @media (min-width: 768px) {
    padding-left: 0;
  }
`

export const SideBarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 28%;
    flex-shrink: 0;
  }
`
export const GamingBannerContainer = styled.div`
  background-color: #f4f4f4;
  height: 120px;
  width: 100%;
  padding-top: 15px;
`
export const GamingBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`
export const Text = styled.p`
  color: #424242;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-left: 20px;
`
export const FireCard = styled.div`
  background-color: #cbd5e1;
  padding: 25px;
  border-radius: 45px;
`
export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  width: 100%;
`

export const GamingVideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: #f8fafc;
  width: 100%;
  padding-left: 24px;
  padding-top: 40px;
  margin-top: 0;
`
