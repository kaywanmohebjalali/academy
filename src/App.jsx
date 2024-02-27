import styled from "styled-components"
import "normalize.css"
import GlobalStyles from "./styles/GlobalStyles"
import TopBar from "./ui/TopBar"
const StyleApp=styled.div`
  background-color: red;
  padding: 2rem;
  color: #fff;
`


const App = () => {
  return (
    <>
    
    <GlobalStyles/>
    <TopBar />
    <StyleApp>APP Dev</StyleApp>

  
    </>
  )
}

export default App