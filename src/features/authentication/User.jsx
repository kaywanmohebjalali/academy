import { useState } from "react"
import { IoPerson } from "react-icons/io5"
import styled from "styled-components"


const StyleUserLogin =styled.div`
display: flex;
align-items: center;
justify-content: center;
  background-color: #f3f4f6;
  height: 50px;
  min-width: 50px;
  border-radius: 15px;
  padding: 0.6rem;
  gap: 0.5rem;
`

const StyleName=styled.p`
  margin-right: 1rem;
  font-weight: 600;
  @media screen and (max-width: 760px){
   display :none ;
  }
`



const User = () => {
  const [login,setLogin]=useState(true)
  return (

      <StyleUserLogin>
      {login?<StyleName>کیوان محب جلالی</StyleName>:''}
       
      <IoPerson size='2.5rem'/>
      </StyleUserLogin>
  
 
  )
}

export default User