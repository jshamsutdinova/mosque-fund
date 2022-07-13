import React from 'react'
import { animateScroll } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkItems,
  FooterLinkTitle, FooterLink, FooterLinkWrapper, SocialMedia,
  SocialMediaWrap, SocialLogo, WebsiteRights } from './footer-elements'

const Footer = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Мечеть города Свирска
            </SocialLogo>
            <WebsiteRights>Мечеть города Свирска © {new Date().getFullYear()}</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer 