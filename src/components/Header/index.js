import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GrFormClose} from 'react-icons/gr'

import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

import SideBar from '../SideBar'

import {
  NavBarContainer,
  NavContent,
  NavBarLogo,
  NavItemsContainerLargeScreen,
  NavItemsContainerSmallScreen,
  NavItem,
  ProfileImage,
  CloseButton,
  CloseButtonContainer,
} from './styledComponents'

const Header = () => (
  <NavBarContainer>
    <NavContent>
      <Link to="/">
        <NavBarLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </Link>
      <NavItemsContainerLargeScreen>
        <NavItem>
          <FaMoon size={36} />
        </NavItem>
        <NavItem>
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </NavItem>
        <NavItem outline as="button" type="button">
          Logout
        </NavItem>
      </NavItemsContainerLargeScreen>
      <NavItemsContainerSmallScreen>
        <NavItem>
          <FaMoon size={28} />
        </NavItem>
        <Popup
          modal
          trigger={
            <NavItem button as="button">
              <FaBars size={28} />
            </NavItem>
          }
        >
          {close => (
            <CloseButtonContainer>
              <CloseButton
                onClick={() => {
                  close()
                }}
              >
                <GrFormClose size={32} />
              </CloseButton>
              <SideBar />
            </CloseButtonContainer>
          )}
        </Popup>

        <NavItem>
          <FiLogOut size={28} />
        </NavItem>
      </NavItemsContainerSmallScreen>
    </NavContent>
  </NavBarContainer>
)

export default Header
