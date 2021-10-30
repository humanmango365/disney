import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Container>
      <Wrap>
        <Logo src="/images/logo.svg" />
        <Nav>
          <NavItem to="/">
            <img src="/images/home-icon.svg" alt="" />
            <span>Home</span>
          </NavItem>
          <NavItem to="">
            <img src="/images/search-icon.svg" alt="" />
            <span>search</span>
          </NavItem>
          <NavItem to="">
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>watchlist</span>
          </NavItem>
          <NavItem to="">
            <img src="/images/original-icon.svg" alt="" />
            <span>original</span>
          </NavItem>
          <NavItem to="">
            <img src="/images/movie-icon.svg" alt="" />
            <span>movies</span>
          </NavItem>
          <NavItem to="/detail">
            <img src="/images/series-icon.svg" alt="" />
            <span>series</span>
          </NavItem>
        </Nav>
      </Wrap>

      <UserImg src="https://pbs.twimg.com/profile_images/1255102101958598656/kJDi-QFa.jpg" />
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  background: #090b13;
  padding: 0 20px;
  justify-content: space-between;

  
`
const Wrap = styled.div`
  display: flex;
`

const Logo = styled.img`
  width: 80px;
`

const Nav = styled.nav`
  display: flex;
  margin-left: 26px;
`

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 12px;
  column-gap: .2rem;

  img{
    width: 20px;
  }

  span {
    font-size: 0.7rem;
    letter-spacing: .08rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      bottom: -.5rem;
      height: 2px;
      background: white;
      width: 0;
      transition: width .3s;
    }
  }

  &:hover {
    span::after {
      width: 100%;
    }
  }
`

const UserImg = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
`

export default Header
