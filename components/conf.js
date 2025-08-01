import styles from "../styles/Home.module.css"; 
import Zero from "../Images/About/0.jpg"; 
import One from "../Images/About/1.jpeg"; 
import Two from "../Images/About/2.jpeg"; 
import Three from "../Images/About/3.jpg"; 
import Four from "../Images/About/4.jpeg"; 
import Five from "../Images/About/5.jpg"; 
import Image from "next/image";
import { Component } from "react"; 


class Confetti extends Component{
    constructor(){
            super();
            this.state={
                rotation: [Zero, One, Two, Four, Three, Five],
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
        }

        render(){
        return (
            <div>
            <button className={styles.button} style={{width: "175px", height:"175px"}} onClick={this.handleClick}>
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image style={{borderRadius: '5px'}} src = {this.state.rotation[this.state.index]} alt = "photo rotation"/>
                </div>
            </button>
            <div className={styles.invisible}>
                <Image src = {One} alt = "photo rotation"/>
                <Image src = {Two} alt = "photo rotation"/>
                <Image src = {Three} alt = "photo rotation"/>
                <Image src = {Four} alt = "photo rotation"/>
            </div>
            </div>
        );
        }
}

export default Confetti; 