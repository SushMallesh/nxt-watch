import styled from 'styled-components'

export const AppVideoDetailsContainer = styled.div`
  max-width: 550px;
  @media (min-width: 768px) {
    max-width: 1150px;
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

export const VideoDetailsContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding-left: 20px;
  @media (min-width: 768px) {
    padding-left: 0;
  }
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding-left: 20px;
  padding-top: 20px;
  width: 100%;
`

export const Title = styled.h1`
  color: #383838;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 450;
  line-height: 3.5;
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`

export const ViewsAndPublishedDateContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewAndDate = styled.span`
  color: #616e7c;
  font-size: 16px;
  font-family: 'Roboto';
`
export const LikesAndDisLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`

export const DisLikeButton = styled(Button)`
  color: ${props => (props.isDisliked ? '#4f46e5' : '#616e7c')};
`

export const LikeButton = styled(Button)`
  color: ${props => (props.isLiked ? '#4f46e5' : '#616e7c')};
`
export const SaveButton = styled(Button)`
  color: ${props => (props.isSaved ? '#4f46e5' : '#616e7c')};
`

export const LikeDisLikeText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 5px;
`
export const SaveText = styled(LikeDisLikeText)`
  font-size: 18px;
`
export const SeparatorLine = styled.hr`
  width: 95%;
  margin-left: 0;
  margin-top: 28px;
  border: 1px solid #cccccc;
`

export const TitleAndSubscribersContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  align-self: flex-start;
  margin-top: 24px;
`
export const SubscriberDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const SubscribersCount = styled(ViewAndDate)`
  font-size: 13px;
`

export const Description = styled.p`
  color: #313131;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`
