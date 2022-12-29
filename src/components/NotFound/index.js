import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const lightThemeNotFoundImageUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

const darkThemeNotFoundImageUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const NotFoundImageUrl = isDarkTheme
        ? darkThemeNotFoundImageUrl
        : lightThemeNotFoundImageUrl

      return (
        <NotFoundContainer>
          <NotFoundImage src={NotFoundImageUrl} alt="not found" />
          <NotFoundHeading>Page Not Found</NotFoundHeading>
          <NotFoundDescription>
            We are sorry,the page you requested could not be found
          </NotFoundDescription>
        </NotFoundContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
