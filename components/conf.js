import styles from "../styles/Home.module.css"; 
import fav from "../public/Favicon.png"; 
import One from "../Images/About/1.jpeg"; 
import Two from "../Images/About/2.jpeg"; 
import Three from "../Images/About/3.jpeg"; 
import Four from "../Images/About/4.JPG"; 
import Five from "../Images/About/5.jpeg"; 
import Image from "next/image";
import { Component } from "react"; 


class Confetti extends Component{
    constructor(){
            super();
            this.state={
                rotation: [fav, One, Two, Three, Four, Five],
                index:0
            }
        }   

        handleClick=()=> {
            if (this.state.index == this.state.rotation.length -1){
                this.setState({
                    index: 0
                })
            }
            else{
                this.setState({
                    index: this.state.index + 1
                })
        }
        console.log(this.state.index)
        }

        render(){
        return (
            <button className={styles.button} onClick={this.handleClick}>
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image src = {this.state.rotation[this.state.index]} alt = "photo"/>
                </div>
            </button>
        );
        }
}

export default Confetti; 