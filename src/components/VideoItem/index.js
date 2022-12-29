import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  LinkItem,
  VideoImage,
  VideoDetailsContainer,
  VideoDetails,
  VideoTitle,
  ChannelName,
  ViewsAndPublishedDateContainer,
  ViewAndDate,
} from './styledComponents'

const VideoItem = props => {
  const {eachVideo, isTrending} = props
  const {thumbnailUrl, title, viewCount, channel, publishedAt, id} = eachVideo
  const {name, profileImageUrl} = channel
  const distancedDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <LinkItem isTrending={isTrending}>
        <VideoImage
          isTrending={isTrending}
          src={thumbnailUrl}
          alt="video thumbnail"
        />
        <VideoDetailsContainer isTrending={isTrending}>
          {!isTrending && (
            <VideoImage isProfile src={profileImageUrl} alt="profile" />
          )}
          <VideoDetails>
            <VideoTitle isTrending={isTrending}>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <ViewsAndPublishedDateContainer>
              <ViewAndDate>{viewCount} views </ViewAndDate>
              <BsDot color="#1e293b" size={20} />
              <ViewAndDate>{distancedDate}</ViewAndDate>
            </ViewsAndPublishedDateContainer>
          </VideoDetails>
        </VideoDetailsContainer>
      </LinkItem>
    </Link>
  )
}

export default VideoItem
