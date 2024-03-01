import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

import { useRef, useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import DarkMode from "./DarkMode";

const StyleMenu = styled.nav``;

const StyleTooltip = styled.ul`
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
`;

const StyleTooltipSlid = styled.ul`
  width: 100%;
  padding:1rem 1.3rem;
  height: 0;
 
 transition: all 0.1s ease-in;
  border: none;
  border-radius: 10px;
   display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyleList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 1170px) {
    display: none;
  }
`;

const StyleListSlid = styled.ul`
  width: 300px;
  position: absolute;
  top: 0;
  right: 0px;
  bottom: 0;
  padding: 3rem;
  margin-right: -300px;
  display: flex;
  
  flex-direction: column;
  transition: all 0.2s ease-in;
  background-color: #f3f4f6;


`;

const IconMenu = styled(HiMenu)`
  @media screen and (min-width: 1171px) {
    display: none;
  }
`;

const StyleItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 2rem;
  transition: all 0.3s;

  &:hover {
    color: var(--color-primary);
  }

  &:hover ${StyleTooltip} {
    display: flex;
  }
`;

const StyleItemSlid = styled.li`
  display: flex;
  
  justify-content: space-between;
  gap: 0.6rem;
  font-size: 2rem;
  transition: all 0.1s;
  


  &:hover {
    color: var(--color-primary);
  }

  &:hover ${StyleTooltipSlid} {
    padding:2rem 1.3rem;

    height: auto;
  }
`;

const StyleTitle = styled.a`
  font-size: 2rem;
  cursor: pointer;
  position: relative;
`;

const ArowIcon = styled(IoIosArrowDown)``;

const ItemTooltip = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #6d6969;
  transition: all 0.3s;
  font-size: 1.6rem;
  &:hover {
    color: var(--color-primary);
  }
`;

const StyleParentTextLogo = styled.div``;
const StyleItemTitleLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`;
const StyleItemTextLogo = styled.div``;
const TopMenu = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

const ParentSearch = styled.div`
  padding: 3rem 0;
  border-top: 1px solid #b8b2b2;
`;
const BottomMenu = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1000;
  backdrop-filter: blur(4px);
`;



const StyleDarkMode=styled.div`
width: 100%;

  padding-top: 1rem;
  border-top: 1px solid #aaa7a7;
`







const MenuBar = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const menuRef = useRef("");
  const menuParentRef = useRef("");

  return (
    <StyleMenu>
      <IconMenu
        size="3rem"
        onClick={() => {
          menuRef.current.style.marginRight = "0";
          menuParentRef.current.style.zIndex = "0";
          menuParentRef.current.style.backgroundColor = "rgba(0,0,0,0.2)";
        }}
      />

      <StyleList>
        <StyleItem>
          <StyleTitle>
            {" "}
            فرانت اند
            <StyleTooltip>
              <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
              <ItemTooltip>اموزش html</ItemTooltip>
              <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
          </StyleTitle>
          <ArowIcon size="1.6rem" />
        </StyleItem>

        <StyleItem>
          <StyleTitle>
            {" "}
            بک اند
            <StyleTooltip>
              <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
              <ItemTooltip>اموزش html</ItemTooltip>
              <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
          </StyleTitle>
          <ArowIcon size="1.6rem" />
        </StyleItem>

        <StyleItem>
          <StyleTitle>
            امنیت
            <StyleTooltip>
              <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
              <ItemTooltip>اموزش html</ItemTooltip>
              <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
          </StyleTitle>
          <ArowIcon size="1.6rem" />
        </StyleItem>

        <StyleItem>
          <StyleTitle>
            هوش مصنوعی
            <StyleTooltip>
              <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
              <ItemTooltip>اموزش html</ItemTooltip>
              <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
          </StyleTitle>
          <ArowIcon size="1.6rem" />
        </StyleItem>

        <StyleItem>
          <StyleTitle>
            مقالات
            <StyleTooltip>
              <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
              <ItemTooltip>اموزش html</ItemTooltip>
              <ItemTooltip>اموزش css</ItemTooltip>
            </StyleTooltip>
          </StyleTitle>
          <ArowIcon size="1.6rem" />
        </StyleItem>
      </StyleList>

      <BottomMenu ref={menuParentRef}>
        <StyleListSlid ref={menuRef}>
          <TopMenu>
            <HiOutlineX
              size="2.5rem"
              onClick={() => {
                menuRef.current.style.marginRight = "-300px";
                menuParentRef.current.style.zIndex = "-1000";

                menuParentRef.current.style.backgroundColor = "transparent";
              }}
            />
            <Logo src="/public/logo.png">
              <StyleParentTextLogo>
                <StyleItemTitleLogo>سنه لرن</StyleItemTitleLogo>
                <StyleItemTextLogo>snalearn.ir</StyleItemTextLogo>
              </StyleParentTextLogo>
            </Logo>
          </TopMenu>
          <ParentSearch>
            <Search status={true} />
          </ParentSearch>

          <StyleItemSlid>
            <StyleTitle>
              {" "}
              فرانت اند
              <StyleTooltipSlid>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
              </StyleTooltipSlid>
            </StyleTitle>
            <ArowIcon size="1.6rem" />
          </StyleItemSlid>

          <StyleItemSlid>
            <StyleTitle>
              {" "}
              بک اند
              <StyleTooltipSlid>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
              </StyleTooltipSlid>
            </StyleTitle>
            <ArowIcon size="1.6rem" />
          </StyleItemSlid>

          <StyleItemSlid>
            <StyleTitle>
              امنیت
              <StyleTooltipSlid>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
              </StyleTooltipSlid>
            </StyleTitle>
            <ArowIcon size="1.6rem" />
          </StyleItemSlid>

          <StyleItemSlid>
            <StyleTitle>
              هوش مصنوعی
              <StyleTooltipSlid>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
              </StyleTooltipSlid>
            </StyleTitle>
            <ArowIcon size="1.6rem" />
          </StyleItemSlid>

          <StyleItemSlid>
            <StyleTitle>
              مقالات
              <StyleTooltipSlid>
                <ItemTooltip>اموزش جاوااسکریپت</ItemTooltip>
                <ItemTooltip>اموزش html</ItemTooltip>
                <ItemTooltip>اموزش css</ItemTooltip>
              </StyleTooltipSlid>
            </StyleTitle>
            <ArowIcon size="1.6rem" />
          </StyleItemSlid>
          <StyleDarkMode>

          <DarkMode text={'تم تاریک'}/>
          </StyleDarkMode>
        </StyleListSlid>
      </BottomMenu>
    </StyleMenu>
  );
};

export default MenuBar;
