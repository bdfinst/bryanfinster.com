import {
  FaBlog,
  FaGithub,
  FaHashtag,
  FaLinkedin,
  FaMedium,
  FaTools,
  FaTwitter,
  FaUserEdit,
  FaUserTie,
} from 'react-icons/fa'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import profileImage from '../images/profileImage'

const Sidebar = styled.div`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 20%;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 20%;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 10%;
    justify-content: flex-start;
    align-items: center;

    &::before {
      content: '';
      margin: 10px;
    }
  }

  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: rgb(18, 29, 64);
  color: #dcdcdc;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 80px;
    height: 80px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  border-radius: 50%;
  overflow: hidden;
  width: 152px;
  height: 152px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledHref = styled.a`
  text-decoration: none;
  color: inherit;
`

const MenuWrapper = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    div {
      margin: 0;
    }
    span {
      display: none;
    }
  }

  display: flex;
  flex-direction: row;
  div {
    margin: 10px;
  }
`

const SiteTitle = styled.h1`
  display: flex;
  font-size: 1.8em;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 16px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

export default ({ title, authorName }) => (
  <Sidebar>
    <StyledLink to="/">
      <SiteTitle>{title}</SiteTitle>
    </StyledLink>
    <Logo src={profileImage} alt={authorName} />
    <MenuWrapper>
      <div>
        <p>
          <StyledLink to="/">
            <FaBlog /> <span>Blog</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/talks">
            <FaBlog /> <span>Talks</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/about">
            <FaUserEdit /> <span>Profile</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/resume">
            <FaUserTie /> <span>Résumé</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/tags">
            <FaHashtag /> <span>Blog Tags</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/meeting">
            <FaTools /> <span>Meeting Cost</span>
          </StyledLink>
        </p>
      </div>
      <div>
        <p>
          <StyledHref
            href="https://www.linkedin.com/in/bryan-finster/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </StyledHref>
        </p>
        <p>
          <StyledHref
            href="https://twitter.com/BryanFinster"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter /> <span>Twitter</span>
          </StyledHref>
        </p>
        <p>
          <StyledHref
            href="https://bdfinst.medium.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaMedium /> <span>Medium</span>
          </StyledHref>
        </p>
        <p>
          <StyledHref
            href="https://github.com/bdfinst"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>Github</span>
          </StyledHref>
        </p>
      </div>
    </MenuWrapper>
  </Sidebar>
)
