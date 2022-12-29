import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemDetailsContainer,
  AppVideoDetailsContainer,
  SideBarContainer,
  VideoDetailsContainer,
  Title,
  ViewsAndLikesContainer,
  ViewsAndPublishedDateContainer,
  ViewAndDate,
  LikesAndDisLikesContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  SeparatorLine,
  TitleAndSubscribersContainer,
  LikeDisLikeText,
  SaveText,
  ProfileImage,
  SubscriberDetails,
  SubscribersCount,
  Description,
} from './styledComponents'

import SavedVideosContext from '../../context/SavedVideosContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {LoaderView, FailureView} from '../FailureAndLoaderView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetailsObject: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    savedVideosList: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onClickDislike = () => {
    this.setState({isDisliked: true, isLiked: false})
  }

  onClickSave = () => {
    const {videoDetailsObject} = this.state
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
      savedVideosList: [...prevState.savedVideosList, videoDetailsObject],
    }))
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('access_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(videoItemDetailsApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
        description: fetchedData.video_details.description,
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetailsObject: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoDetails = () => {
    const {
      videoDetailsObject,
      isLiked,
      isDisliked,
      isSaved,
      savedVideosList,
    } = this.state

    console.log(savedVideosList)

    const {
      description,
      publishedAt,
      channel,
      title,
      videoUrl,
      viewCount,
    } = videoDetailsObject

    const {profileImageUrl, name, subscriberCount} = channel

    const distancedDate = formatDistanceToNow(new Date(publishedAt))

    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
        }}
      >
        <VideoItemDetailsContainer>
          <ReactPlayer url={videoUrl} controls />
          <Title>{title}</Title>
          <ViewsAndLikesContainer>
            <ViewsAndPublishedDateContainer>
              <ViewAndDate>{viewCount} views </ViewAndDate>
              <BsDot color="#1e293b" size={25} />
              <ViewAndDate>{distancedDate}</ViewAndDate>
            </ViewsAndPublishedDateContainer>
            <LikesAndDisLikesContainer>
              <LikeButton
                isLiked={isLiked}
                onClick={this.onClickLike}
                type="button"
              >
                <BiLike size={20} />
                <LikeDisLikeText>Like</LikeDisLikeText>
              </LikeButton>
              <DisLikeButton
                onClick={this.onClickDislike}
                isDisliked={isDisliked}
                type="button"
              >
                <BiDislike size={20} />
                <LikeDisLikeText>Dislike</LikeDisLikeText>
              </DisLikeButton>
              <SaveButton
                onClick={this.onClickSave}
                isSaved={isSaved}
                type="button"
              >
                <BiListPlus size={20} />{' '}
                <SaveText>{isSaved ? 'Saved' : 'Save'}</SaveText>
              </SaveButton>
            </LikesAndDisLikesContainer>
          </ViewsAndLikesContainer>
          <SeparatorLine />
          <TitleAndSubscribersContainer>
            <ProfileImage src={profileImageUrl} alt="profile" />
            <SubscriberDetails>
              <Title>{name}</Title>
              <SubscribersCount>{subscriberCount} subscribers</SubscribersCount>
              <Description>{description}</Description>
            </SubscriberDetails>
          </TitleAndSubscribersContainer>
        </VideoItemDetailsContainer>
      </SavedVideosContext.Provider>
    )
  }

  renderVideoItemsAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.failure:
        return <FailureView />
      case apiStatusConstants.inProgress:
        return <LoaderView />
      default:
        return null
    }
  }

  render() {
    return (
      <AppVideoDetailsContainer>
        <Header />
        <VideoDetailsContainer>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          {this.renderVideoItemsAllViews()}
        </VideoDetailsContainer>
      </AppVideoDetailsContainer>
    )
  }
}

export default VideoItemDetails
