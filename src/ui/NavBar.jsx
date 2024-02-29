import styled from "styled-components"
import Logo from "./Logo"
import MenuBar from "./MenuBar"
import Search from "./Search"
import DarkMode from "./DarkMode"
import User from "../features/authentication/User"

const NavBarStyled=styled.nav`
height: 20vh;
background-color: #fff;
    padding: 0rem 4rem;
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

@media screen and (max-width: 1170px){
  width: 60%;
}

`

const StyleLeft=styled.nav`
height: 40%;
width: 50%;
   display: flex;
   align-items: center;
   justify-content: end;
   gap: 1.5rem;


   @media screen and (max-width: 1170px){
 
  width: 40%;
}
   
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