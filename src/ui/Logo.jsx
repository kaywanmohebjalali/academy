/* eslint-disable react/prop-types */
import styled from "styled-components"

const StyleParentLogo=styled.div`
 
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 1rem;

`
const StyleLogo=styled.img`
width: 50px;
height: 50px;
`

const StyleTitleLogo=styled.p`

`

const Logo = (props) => {
  const {children='' ,src=''}=props
  return (
    <StyleParentLogo>

     <StyleLogo src={src}/>
     <StyleTitleLogo>
      {children}
     </StyleTitleLogo>
    </StyleParentLogo>
  )
}

export default Logo