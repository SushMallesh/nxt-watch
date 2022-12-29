import styled from 'styled-components'

export const LinkItem = styled.li`
  display: flex;
  flex-direction: ${props => (props.isTrending ? 'row' : 'column')};
  margin-right: 20px;
  margin-top: 20px;
  padding-bottom: 40px;
  width: ${props => (props.isTrending ? '100%' : '30%')};
`
export const VideoImage = styled.img`
  height: ${props => (props.isProfile ? '36px' : '180px')};
  height: ${props => props.isTrending && '200px'};
  width: ${props => (props.isProfile ? '36px' : '340px')};
  width: ${props => props.isTrending && '380px'};
  margin: ${props => props.isProfile && '15px 8px 0px 0px'};
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  padding-left: ${props => props.isTrending && '24px'};
`
export const VideoTitle = styled.p`
  color: ${props => (props.isTrending ? '#1e293b' : '#424242')};
  font-family: 'Roboto';
  font-size: ${props => (props.isTrending ? '20px' : '14px')};
  max-width: ${props => props.isTrending && '300px'};
  width: 250px;
  line-height: 1.5;
  font-weight: ${props => props.isTrending && '500'};
`
export const VideoDetails = styled(VideoDetailsContainer)`
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0;
`
export const ViewsAndPublishedDateContainer = styled(VideoDetailsContainer)`
  align-items: center;
`
export const ViewAndDate = styled.span`
  color: #616e7c;
  font-size: 13px;
  font-family: 'Roboto';
`
