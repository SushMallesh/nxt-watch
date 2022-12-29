import styled from 'styled-components'

export const AppTrendingContainer = styled.div`
  max-width: 550px;
  @media (min-width: 768px) {
    max-width: 1100px;
  }
`

export const TrendingContainer = styled.div`
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

export const TrendingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  width: 100%;
`
export const TrendingBannerContainer = styled.div`
  background-color: #f4f4f4;
  height: 120px;
  width: 100%;
  padding-top: 15px;
`
export const TrendingBanner = styled.div`
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

export const TrendingVideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 20px;
  background-color: #f1f5f9;
  margin-top: 0;
`
