import styled from "styled-components"
import Logo from "./Logo"
import MenuBar from "./MenuBar"
import Search from "./Search"
import DarkMode from "./DarkMode"
import User from "../features/authentication/User"

const NavBarStyled=styled.nav`
height: 20vh;
background-color: #fff;
    padding: 0rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:1150px){
      padding: 0rem 6rem;
    }
    `

const StyleRight=styled.nav`
height: 40%;
width: 60%;
display: flex;
align-items: center;
gap: 3rem;

@media screen and (max-width: 1370px){
  width: 90%;
  justify-content: space-between;

}

@media screen and (max-width: 1150px){
  width: 50%;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding-left: 3rem;

}

@media screen and (max-width: 750px){
 
  padding-left: 0rem;

}

`

const StyleLeft=styled.nav`
height: 40%;
width: 50%;
   display: flex;
   align-items: center;
   justify-content: end;
   gap: 1.5rem;


   @media screen and (max-width: 1150px){
 
  /* width: 40%; */
  display: none;
}
   
`

const StyleUser=styled.div`
height: 40%;
width: 400px;
   display: flex;
   align-items: center;
   justify-content: end;
   gap: 1.5rem;
   margin-right: 1rem;
   
   
   @media screen and (max-width: 1150px){
     justify-content: end;
 
  width: 50%;
 
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
      </StyleLeft>

      <StyleUser>

    <User/>
      </StyleUser>

    </NavBarStyled>
  )
}

export default NavBar