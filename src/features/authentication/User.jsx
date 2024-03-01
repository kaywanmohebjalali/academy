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
  gap: 0.5rem;
`

const StyleImg=styled.img`
  width: 60px;
  height: auto;
`

const StyleName=styled.p`
  margin-right: 1rem;
  font-weight: 600;
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
       <StyleName>کیوان محب جلالی</StyleName>
       <StyleImg src="/public/default-user.png"/>
      </StyleUserLogin>:
      <StyleUser>
        <IoPerson size='2.5rem'/>
   
      </StyleUser>
    }
    </>
  )
}

export default User