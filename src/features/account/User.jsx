import { IoPerson } from "react-icons/io5"
import styled from "styled-components"


const StyleUser =styled.div`
display: flex;
justify-content: center;
align-items: center;
  background-color: #f3f4f6;
  height: 75px;
  width: 75px;
  border-radius: 50%;
`

const User = () => {
  return (
    <StyleUser>
        <IoPerson size='2.5rem'/>
    </StyleUser>
  )
}

export default User