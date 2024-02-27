import styled from "styled-components"
import "normalize.css"
import GlobalStyles from "./styles/GlobalStyles"
<<<<<<< HEAD
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"


import Home from "./pages/Home"
import { AppLayout } from "./pages/AppLayout"




=======
import TopBar from "./ui/TopBar"
>>>>>>> c00b952242362d50c8fec48ea61d7b0d3f5ee94b
const StyleApp=styled.div`
  background-color: red;
  padding: 2rem;
  color: #fff;
`


const App = () => {
  return (
    <>
    
    <GlobalStyles/>
<<<<<<< HEAD
    <BrowserRouter>
     <Routes>
     <Route element={<AppLayout/>}
     >
     <Route index element={<Navigate replace to='home'/>}/>
      <Route path='home' element={<Home/>}/>

     </Route>
     </Routes>
    </BrowserRouter>

    
=======
    <TopBar />
    <StyleApp>APP Dev</StyleApp>

>>>>>>> c00b952242362d50c8fec48ea61d7b0d3f5ee94b
  
    </>
  )
}

export default App