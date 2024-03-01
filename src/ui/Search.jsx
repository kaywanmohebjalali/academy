/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";
import Modal from "./Modal";
import { useEffect, useState } from "react";

const StyleSearch = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  outline: hidden;
  position: relative;
  background-color: #f3f4f6;
  @media screen and (max-width: 1386px) and (min-width: 1150px) {
    width: 65px;
    height: 65px;
  }

  @media screen and  (max-width: 1150px) {
   width: 100%;
   height: 45px;
  }
`;

const InputSearch = styled.input`
  width: 200px;
  height: 100%;
  font-size: 1.8rem;
  border: none;
  transition: all 0.6s;
  background-color: #f3f4f6;
  padding: 0 1rem;

  &:focus {
    max-width: 92%;
    width: 300px;
  }

  @media screen and (max-width: 1386px) and (min-width: 1150px) {
    display: none;
  }
  @media screen and  (max-width: 1150px) {
   width: 150px;
   
   &:focus {
    max-width: 92%;
    width: 150px;
  }
  }
`;

const StyleSearchModal = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  outline: hidden;
  position: relative;
  background-color: #f3f4f6;
`;

const InputSearchModal = styled.input`
  min-width: 350px;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  padding: 0 1rem;
  border: none;
  transition: all 0.6s;
  background-color: #f3f4f6;
`;

const IconSearch = styled(IoSearch)``;

const Search = (props) => {
  const {status}=props
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [searchValue, setSearchValue] = useState(window.innerWidth);


  function handleSearchValueInput(e){
   setSearchValue(e.target?.value)
  }
  function handleResize() {
    setWidthWindow(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <>
      {widthWindow >= 1370 || status ? (
        <StyleSearch>
          <InputSearch onChange={handleSearchValueInput} placeholder="جستجو" />
          <IconSearch size="2.5rem" color="#555" />
        </StyleSearch>
      ) : (
        <Modal>
          <Modal.Open opens="search">
            <StyleSearch>
              <IconSearch size="2.5rem" color="#555" />
            </StyleSearch>
          </Modal.Open>
          <Modal.Window name="search">
            <StyleSearchModal>
              <InputSearchModal  onChange={handleSearchValueInput}  placeholder="جستجو" />
              <IconSearch size="2.5rem" color="#555" />
            </StyleSearchModal>
          </Modal.Window>
        </Modal>
      )}
    </>
  );
};

export default Search;
