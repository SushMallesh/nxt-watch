import styled from 'styled-components'

export const AppHomeContainer = styled.div`
  max-width: 550px;
  @media (min-width: 768px) {
    max-width: 1150px;
  }
`

export const HomeContainer = styled.div`
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
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  width: 100%;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  max-height: 140px;
  max-width: 550px;
  @media (min-width: 768px) {
    max-width: 1110px;
    max-height: 200px;
  }
`

export const LogoAndCloseButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
`
export const CloseButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
`
export const Logo = styled.img`
  width: 100px;
  height: 20px;
  @media (min-width: 768px) {
    width: 150px;
    height: 40px;
  }
`
export const BannerText = styled.p`
  color: #383838;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  max-width: 200px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 400px;
  }
`
export const GetNowButton = styled(CloseButton)`
  color: #424242;
  font-weight: 600;
  font-size: 10px;
  border: 2px solid #424242;
  padding: 8px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export const HomeVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f5f9;
  min-height: 100vh;
  margin-top: 20px;
  padding: 20px;
`
export const CustomSearchInput = styled.input`
  width: 50%;
  padding: 8px;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  font-weight: 500;
  outline: none;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SearchButton = styled(CloseButton)`
  border: 1px solid #94a3b8;
  border-left: none;
  padding: 4px 20px 4px 20px;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0;
`
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
export const RetryButton = styled(CloseButton)`
  background-color: #4f46e5;
  font-weight: 600;
  font-size: 15px;
  color: #f1f1f1;
  border-radius: 8px;
  padding: 12px 30px 12px 30px;
`
