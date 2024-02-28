import styled from "styled-components"
import { Outlet } from "react-router-dom"
import Header from "../ui/Header"

const StyleAppLayout=styled.div`
    
`

const Main=styled.div`
    
`

const Container=styled.div`
    
`

export const AppLayout = () => {
  return (
    <StyleAppLayout>
      <Header/>

    <Main>
      <Container>
        <Outlet/>
      </Container>
    </Main>
</StyleAppLayout>
  )
}
