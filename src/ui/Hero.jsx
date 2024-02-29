import styled from "styled-components"
import {FaPlay} from 'react-icons/fa'

import Button from "./Button"

    const StyledHero = styled.div`
        height: 100dvh;
        display: flex;
        flex-direction: column;
        
        @media screen and (min-width: 820px){
            flex-direction: row;
        }
    `
const TextSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 1rem;
padding: 1rem .75rem;
max-width: 100%;
@media screen and (min-width: 820px){
    max-width: 50%;
    align-items: start;
        }
`

const ImageContainer = styled.div`
    max-width: 100%;
    @media screen and (min-width: 820px){
            max-width: 50%;
        }
`

const H1 = styled.h1`
    font-size: 6rem;
    font-weight: 800;
    line-height: 96px;
    color: #3f3f46;
    
`
const Img = styled.img`
    width: 100%;
    object-fit: cover;
    
`

const P = styled.p`
    font-size: 2.4rem;
    font-weight: 500;

`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 1rem;
    margin-top: 5rem;
    
    @media screen and (min-width: 820px){
            flex-direction: row;
            margin: 4rem auto;
            margin-right: 0;
        }
`

const P2 = styled.p`
    font-size: 2rem;
    color: #758699;
    font-weight: 500;
    font-family: Dana, sans-serif;
`

export default function Hero() {

  return (
    <StyledHero>
<TextSection>
<H1>ما به هر قیمتی محتوا تولید نمی کنیم!</H1>
<P>با آکادمی خصوصی کیلی، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</P>
<ButtonContainer>
    <Button size="large">از اینجا شروع کن</Button>
    <Button type="accent" size='circle'><FaPlay size={24}/></Button>
    <P2>دوره های رایگان</P2>
</ButtonContainer>
</TextSection>
        <ImageContainer>
        <Img src="/hero.png"/>
        </ImageContainer>

    </StyledHero>
  )
}
