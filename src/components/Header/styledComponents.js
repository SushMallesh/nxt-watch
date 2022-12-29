import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  background-color: transparent;
`
export const NavContent = styled.div`
  display: flex;
  align-items: center;
  width: 96%;
`

export const NavBarLogo = styled.img`
  width: 180px;
  height: 30px;
  padding-left: 40px;
  @media (min-width: 768px) {
    width: 200px;
    height: 40px;
  }
`
export const NavItemsContainerLargeScreen = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`

export const NavItemsContainerSmallScreen = styled.ul`
  display: flex;
  margin-left: auto;
  @media (min-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  margin-left: 20px;
  list-style-type: none;
  background-color: ${props => props.outline && 'transparent'};
  border: ${props => props.outline && '2px solid #3b82f6'};
  color: ${props => props.outline && '#3b82f6'};
  font-size: ${props => props.outline && '18px'};
  padding: ${props => props.outline && '0px 25px 0px 25px'};
  font-weight: ${props => props.outline && '600'};
  border-radius: ${props => props.outline && '5px'};
  cursor: ${props => props.button && 'pointer'};
  outline: ${props => props.button && 'none'};
  background-color: ${props => props.button && 'transparent'};
  border: ${props => props.button && 'none'};
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`

export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  height: 40px;
  width: 40px;
  margin-top: 30px;
  margin-right: 30px;
  align-self: flex-end;
`
