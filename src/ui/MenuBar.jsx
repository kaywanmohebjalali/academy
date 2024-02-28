import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components"

const StyleList=styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
`

const StyleItem=styled.li`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 2rem;
    

    &:hover{
        color: var(--color-primary);
    }

`

const StyleTitle=styled.a`
    font-size: 2rem;
    cursor: pointer;

`

const ArowIcon=styled(IoIosArrowDown)`
 

`

const MenuBar = () => {
  return (
    <StyleList>

        <StyleItem>
            <StyleTitle> فرانت اند</StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>

        <StyleItem>
            <StyleTitle> بک اند</StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>

        <StyleItem>
            <StyleTitle>امنیت</StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>

        <StyleItem>
            <StyleTitle>هوش مصنوعی</StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>

        <StyleItem>
            <StyleTitle>مقالات </StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>

     

    </StyleList>
  )
}

export default MenuBar