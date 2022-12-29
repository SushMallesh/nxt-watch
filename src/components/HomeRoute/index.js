import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import {FailureView, LoaderView} from '../FailureAndLoaderView'

import VideoItem from '../VideoItem'

import {
  AppHomeContainer,
  HomeContainer,
  SideBarContainer,
  HomeContentContainer,
  BannerContainer,
  LogoAndCloseButtonContainer,
  CloseButton,
  Logo,
  BannerText,
  GetNowButton,
  HomeVideosContainer,
  CustomSearchInput,
  SearchContainer,
  SearchButton,
  VideosListContainer,
  Container,
  ImageContainer,
  Text,
  RetryButton,
} from './styledComponents'

import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    hideBanner: false,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getHomeVideosList()
  }

  getHomeVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('access_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
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
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickCloseBtn = () => {
    this.setState({hideBanner: true})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.setState({searchInput: event.target.value}, this.getHomeVideosList)
    }
  }

  searchVideos = () => {
    const {searchInput} = this.state
    this.setState({searchInput}, this.getHomeVideosList)
  }

  renderNoVideosView = () => (
    <Container>
      <ImageContainer
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Text>No Search results found</Text>
      <Text para as="p">
        Try different key words or remove search filter
      </Text>
      <RetryButton type="button">Retry</RetryButton>
    </Container>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderNoVideosView()
    }

    return (
      <VideosListContainer>
        {videosList.map(eachVideo => (
          <VideoItem
            isTrending={false}
            key={eachVideo.id}
            eachVideo={eachVideo}
          />
        ))}
      </VideosListContainer>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return <FailureView />
      case apiStatusConstants.inProgress:
        return <LoaderView />
      default:
        return null
    }
  }

  renderVideosList = () => {
    const {searchInput} = this.state

    return (
      <HomeVideosContainer>
        <SearchContainer>
          <CustomSearchInput
            onChange={this.onChangeSearchInput}
            onKeyDown={this.onEnterSearchInput}
            value={searchInput}
            placeholder="Search"
            type="search"
          />
          <SearchButton onClick={this.searchVideos} type="button">
            <BiSearchAlt2 size={20} />
          </SearchButton>
        </SearchContainer>
        {this.renderAllViews()}
      </HomeVideosContainer>
    )
  }

  render() {
    const {hideBanner} = this.state
    return (
      <AppHomeContainer>
        <Header />
        <HomeContainer>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <HomeContentContainer>
            {!hideBanner && (
              <BannerContainer>
                <LogoAndCloseButtonContainer>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />

                  <CloseButton onClick={this.onClickCloseBtn} type="button">
                    <GrFormClose size={32} />
                  </CloseButton>
                </LogoAndCloseButtonContainer>
                <BannerText>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerText>
                <GetNowButton type="button">GET IT NOW</GetNowButton>
              </BannerContainer>
            )}
            {this.renderVideosList()}
          </HomeContentContainer>
        </HomeContainer>
      </AppHomeContainer>
    )
  }
}

export default HomeRoute
