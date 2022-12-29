import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import {FailureView, LoaderView} from '../FailureAndLoaderView'

import {
  AppTrendingContainer,
  TrendingContainer,
  SideBarContainer,
  TrendingContentContainer,
  TrendingBannerContainer,
  TrendingBanner,
  Text,
  FireCard,
  TrendingVideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
      trendingVideosList: [],
    })

    const jwtToken = Cookies.get('access_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'

    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingVideosListContainer>
        {trendingVideosList.map(eachVideo => (
          <VideoItem isTrending eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideosListContainer>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
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
      <AppTrendingContainer>
        <Header />
        <TrendingContainer>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <TrendingContentContainer>
            <TrendingBannerContainer>
              <TrendingBanner>
                <FireCard>
                  <HiFire color="#ff0000" size={28} />
                </FireCard>
                <Text>Trending</Text>
              </TrendingBanner>
            </TrendingBannerContainer>
            {this.renderAllViews()}
          </TrendingContentContainer>
        </TrendingContainer>
      </AppTrendingContainer>
    )
  }
}

export default Trending
