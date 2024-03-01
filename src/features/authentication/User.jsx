import { useState } from "react"
import { IoPerson } from "react-icons/io5"
import styled from "styled-components"


const StyleUserLogin =styled.div`
display: flex;
align-items: center;
  background-color: #f3f4f6;
  height: 60px;
  border-radius: 10px;
  padding: 0.6rem;
`

const StyleImg=styled.img`
  width: 60px;
  height: auto;
`

const StyleName=styled.p`
  margin-right: 1rem;
  @media screen and (max-width: 760px){
   display :none ;
  }
`

const StyleUser =styled.div`
display: flex;
justify-content: center;
align-items: center;
  background-color: #f3f4f6;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`


const User = () => {
  const [login,setLogin]=useState(true)
  return (
 <>
    {
      login?<StyleUserLogin>
       <StyleImg src="/public/logo.jpg"/>
       <StyleName>kaywan mohebjalali</StyleName>
      </StyleUserLogin>:
      <StyleUser>
        <IoPerson size='2.5rem'/>
   
      </StyleUser>
    }
    </>
  )
}

export default User