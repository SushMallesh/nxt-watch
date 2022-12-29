import styled from 'styled-components'

export const AppSavedVideosContainer = styled.div`
  max-width: 550px;
  @media (min-width: 768px) {
    max-width: 1150px;
  }
`

export const SavedVideosContainer = styled.div`
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

export const SavedVideosContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  width: 100%;
`
export const SavedVideosBannerContainer = styled.div`
  background-color: #f4f4f4;
  height: 120px;
  width: 100%;
  padding-top: 15px;
`
export const SavedVideosBanner = styled.div`
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
export const Description = styled.h1`
  color: ${props => (props.para ? '#909090' : '#383838')};
  font-family: Roboto;
  font-size: ${props => (props.para ? '20px' : '28px')};
  line-height: 0.5;
`
export const SavedVideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 20px;
  background-color: #f1f5f9;
  margin-top: 0;
`
