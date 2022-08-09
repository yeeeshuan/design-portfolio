import styled from 'styled-components'; 
import Navbar from '../components/navbar';

const Page = styled.body`
background-color: black; 
`

const Title = styled.h1`
margin-left: 25px; 
color: white; 
`

const Description = styled.h2`
margin-left: 25px; 
color: white; 
`

export default function Play(){
return(
    <Page>
        <Navbar/>
        <Title>
            Play 
        </Title>
        <Description>
            P5.js 
        </Description>
        <Description>
            Sketches
        </Description>
    </Page>
    )
 
}