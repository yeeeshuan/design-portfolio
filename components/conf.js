import styles from "../styles/Home.module.css"; 
import fav from "../public/Favicon.png"; 
import One from "../Images/About/1.jpeg"; 
import Two from "../Images/About/2.JPG"; 
import Three from "../Images/About/3.jpg"; 
import Four from "../Images/About/4.jpeg"; 
import Image from "next/image";
import { Component } from "react"; 


class Confetti extends Component{
    constructor(){
            super();
            this.state={
                rotation: [fav, One, Two, Three, Four],
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
            <div>
            <button className={styles.button} onClick={this.handleClick}>
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image src = {this.state.rotation[this.state.index]} alt = "photo rotation"/>
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