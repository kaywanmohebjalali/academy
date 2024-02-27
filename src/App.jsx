import styled from "styled-components"
import "normalize.css"
import GlobalStyles from "./styles/GlobalStyles"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"


import Home from "./pages/Home"
import { AppLayout } from "./pages/AppLayout"




const StyleApp=styled.div`
  background-color: red;
  padding: 2rem;
  color: #fff;
`


const App = () => {
  return (
    <>
    
    <GlobalStyles/>
    <BrowserRouter>
     <Routes>
     <Route element={<AppLayout/>}
     >
     <Route index element={<Navigate replace to='home'/>}/>
      <Route path='home' element={<Home/>}/>

     </Route>
     </Routes>
    </BrowserRouter>

    
  
    </>
  )
}

export default App