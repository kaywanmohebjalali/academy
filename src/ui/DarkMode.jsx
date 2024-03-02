/* eslint-disable react/prop-types */
import { IoMoonOutline } from "react-icons/io5"
import styled from "styled-components"

const StyleDarkMode =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
  background-color: #f3f4f6;
  height: 60px;
  width: 60px;
  border-radius: 50%;

@media screen and (max-width: 1150px){
 width :100% ;
 justify-content: start;
}
  
`

const StyleText=styled.p`
  font-size: 2rem;
  font-size: 1.8rem;
  
`
const DarkMode = (props) => {
  const {text=''}=props

  return (
    <StyleDarkMode>
       <IoMoonOutline size='2.5rem'/>
         <StyleText>{text}</StyleText>
     
    </StyleDarkMode>
  )
}

export default DarkMode