import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import Footer from '../components/footer';


const Intro = styled.h2`
  margin-top: 0px; 
  margin-left: 25px;
  font-size: 30px;
  width : 50%; 
  color: white; 
  padding-bottom: 50px;
  background-color: black; 
}
`

const CText = styled.p`
  font-size: 30px;
    color: #718ef8; 
    display: inline; 
`

export default function Home() {
    return (
      <div>
        <Navbar/>
        <h2 className = {styles.intro}>
            Hi! My name is Ethan Huang and I am currently a student at Carnegie Mellon University 
            with a minor in Human-Computer-Interaction
        </h2>
        <Projects/>
        <Footer/>
      </div>
      
    )
}
