import { useState } from "react"
import { IoPerson } from "react-icons/io5"
import styled from "styled-components"


const StyleUserLogin =styled.div`
display: flex;
justify-content: center;
align-items: center;
  background-color: #f3f4f6;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`

const StyleUser =styled.div`
display: flex;
justify-content: center;
align-items: center;
  background-color: #f3f4f6;
  height: 60px;
  /* width: 60px; */
  border-radius: 50%;
`


const User = () => {
  const [login,setLogin]=useState(false)
  return (
 <>
    {
      login?<StyleUserLogin>
      <IoPerson size='2.5rem'/>
      </StyleUserLogin>:
      <StyleUser>
     <p>be done</p>
      </StyleUser>
    }
    </>
  )
}

export default User