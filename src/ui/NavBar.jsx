import styled from "styled-components"
import Logo from "./Logo"
import MenuBar from "./MenuBar"
import Search from "./Search"
import DarkMode from "./DarkMode"
import User from "../features/account/User"

const NavBarStyled=styled.nav`
height: 30vh;
background-color: #fff;
    padding: 1rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `

const StyleRight=styled.nav`
height: 40%;
width: 50%;
display: flex;
align-items: center;
gap: 3rem;

`

const StyleLeft=styled.nav`
height: 40%;
width: 50%;
   display: flex;
   align-items: center;
   justify-content: end;
   gap: 1.5rem;
   
`

const NavBar = () => {
  return (
    <NavBarStyled>
      <StyleRight>

    <Logo/>
    <MenuBar/>
      </StyleRight>

      <StyleLeft>

    <Search/>
    <DarkMode/>
    <User/>
      </StyleLeft>

    </NavBarStyled>
  )
}

export default NavBar