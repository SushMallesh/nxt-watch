import Loader from 'react-loader-spinner'
import {Container, ImageContainer, Text, RetryButton} from './styledComponents'

export const FailureView = () => (
  <Container>
    <ImageContainer
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      alt="failure view"
    />
    <Text>Oops! Something Went Wrong</Text>
    <Text para as="p">
      We are having some trouble to complete your request.Please try again.
    </Text>
    <RetryButton type="button">Retry</RetryButton>
  </Container>
)

export const LoaderView = () => (
  <Container>
    <Loader type="ThreeDots" color="#000000" height="50" width="50" />
  </Container>
)
