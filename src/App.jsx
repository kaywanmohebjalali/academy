import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
const StyleApp=styled.div`
  background-color: red;
  padding: 2rem;
  color: #fff;
`

const App = () => {
  return (
    <>
    
    <GlobalStyles/>
    <StyleApp>App</StyleApp>
  
    </>
  )
}

export default App