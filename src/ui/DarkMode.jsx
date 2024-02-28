import { IoMoonOutline } from "react-icons/io5"
import styled from "styled-components"

const StyleDarkMode =styled.div`
display: flex;
justify-content: center;
align-items: center;
  background-color: #f3f4f6;
  height: 75px;
  width: 75px;
  border-radius: 50%;
`
const DarkMode = () => {
  return (
    <StyleDarkMode>
       <IoMoonOutline size='2.5rem'/>
    </StyleDarkMode>
  )
}

export default DarkMode