import {LinkItem, GameImage, GameTitle, ViewsCount} from './styledComponents'

const GameVideoItem = props => {
  const {eachVideo} = props

  const {thumbnailUrl, title, viewCount} = eachVideo

  return (
    <LinkItem>
      <GameImage src={thumbnailUrl} alt={title} />
      <GameTitle>{title}</GameTitle>
      <ViewsCount>{viewCount} Watching Worldwide</ViewsCount>
    </LinkItem>
  )
}

export default GameVideoItem
