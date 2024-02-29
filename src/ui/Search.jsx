import { IoSearch } from "react-icons/io5"
import styled from "styled-components"


const StyleSearch =styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  outline: hidden;
  position: relative;
  background-color: #f3f4f6;
  @media screen and (max-width: 1170px){
   width: 65px;
   height: 65px;
}


`

const InputSearch =styled.input`
  max-width: 86%;
  width: 200px;
  height: 100%;
  border: none;
  transition: all 0.6s ;
  background-color: #f3f4f6;
  


  &:focus{
    max-width: 92%;
    width: 350px;
  }

  @media screen and (max-width: 1170px){
 
 display: none;
}
`

const IconSearch =styled(IoSearch)`
  position: absolute;
  left: 10px;
  @media screen and (max-width: 1170px){
  position: relative;
  left: 0;

}
`



const Search = () => {
  return (
    <StyleSearch>
      <InputSearch/>
      <IconSearch size='2.5rem' color="#555"/>
      
    </StyleSearch>
  )
}

export default Search