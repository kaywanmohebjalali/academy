import styled from 'styled-components'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const StyledTopBar = styled.nav`

display: none;

@media screen and (min-width: 820px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    
  }
`

const List = styled.ul`

display: flex;
justify-content: start;
align-items: center;
gap: 1.5rem;

`
const Contact = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
`

function TopBar() {
  return (
    <StyledTopBar>
        <List>
            <li>آموزش HTML</li>
            <li>آموزش CSS</li>
            <li>آموزش جاوا اسکریپت</li>
            <li>آموزش بوت استرپ</li>
            <li>آموزش پایتون</li>
            <li>آموزش ری اکت</li>
        </List>
        <Contact>
        <ContainerIcon><p>example@example.com</p><MdOutlineMailOutline size={20} color='#1D24CA'/></ContainerIcon>
        <ContainerIcon><p>09XXXXXXXXX</p><IoCallOutline size={20} color='#1D24CA'/> </ContainerIcon>
        </Contact>
    </StyledTopBar>
  )
}

export default TopBar