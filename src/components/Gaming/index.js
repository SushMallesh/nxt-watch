import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Header from '../Header'
import SideBar from '../SideBar'
import {LoaderView, FailureView} from '../FailureAndLoaderView'
import GameVideoItem from '../GameVideoItem'

import {
  AppGamingContainer,
  GamingContainer,
  SideBarContainer,
  GamingBannerContainer,
  GamingBanner,
  Text,
  FireCard,
  GamingContentContainer,
  GamingVideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('access_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGameVideos = () => {
    const {gamingVideosList} = this.state

    return (
      <GamingVideosListContainer>
        {gamingVideosList.map(eachVideo => (
          <GameVideoItem eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </GamingVideosListContainer>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGameVideos()
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
      <AppGamingContainer>
        <Header />
        <GamingContainer>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <GamingContentContainer>
            <GamingBannerContainer>
              <GamingBanner>
                <FireCard>
                  <FaGamepad color="#ff0000" size={28} />
                </FireCard>
                <Text>Gaming</Text>
              </GamingBanner>
            </GamingBannerContainer>
            {this.renderAllViews()}
          </GamingContentContainer>
        </GamingContainer>
      </AppGamingContainer>
    )
  }
}

export default Gaming
