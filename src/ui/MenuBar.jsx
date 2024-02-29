import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components"


const StyleTooltip=styled.ul`
 width: 200px;
 padding: 2rem;
 
 background-color: #fff;
 border: none;
 border-radius: 10px;
 box-shadow: 1px 1px 1px #e4e1e1, -1px -1px 1px #e4e1e1;
 position: absolute;


 
 display: none;
 flex-direction: column;
 gap: 1rem;
 
 

`

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
    transition: all 0.3s ;

    &:hover{
        color: var(--color-primary);
    }

    &:hover ${StyleTooltip}{
        display: flex;
    }

`

const StyleTitle=styled.a`
    font-size: 2rem;
    cursor: pointer;
    position: relative;


`

const ArowIcon=styled(IoIosArrowDown)`
 

`



const ItemTooltip=styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  transition: all 0.3s ;
  &:hover{
        color: var(--color-primary);
    }

`

const MenuBar = () => {
  return (
    <StyleList>

        <StyleItem>
            <StyleTitle> فرانت اند

            <StyleTooltip>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
            </StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>

        <StyleItem>
            <StyleTitle> بک اند
            <StyleTooltip>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>

            </StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>
             
        <StyleItem>
            <StyleTitle>امنیت

            <StyleTooltip>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
            </StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>

        <StyleItem>
            <StyleTitle>هوش مصنوعی

            <StyleTooltip>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
            </StyleTitle>
            <ArowIcon size='1.6rem'/>
            
        </StyleItem>

        <StyleItem>
            <StyleTitle>مقالات 

            <StyleTooltip>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
            </StyleTitle>
            <ArowIcon size='1.6rem'/>
        </StyleItem>

     

    </StyleList>
  )
}

export default MenuBar