import React, { Component } from 'react';
import '../css/header.css';
import britany from "../images/british-flag.png";
import germany from "../images/germany-flag.png";
import france from "../images/france-flag.png";

class Header extends Component{
    
    constructor(props){
        super(props);
        this.state={
            isActive: [false, false, false, false],    
        }
        this.handleDropDown = this.handleDropDown.bind(this);
    };

    handleDropDown(ordinal){
        const { isActive } = this.state;
        let newIsActive = [];
        isActive.map((key, index) => 
            ordinal === index ? newIsActive.push(!key) : newIsActive.push(false)
        )
        this.setState({ isActive: [...newIsActive] })
    }

    handleFlags(e){
        for(let i=0; i<3; i++){
            if(e.target.id !== `flag-${i}`){
                document.getElementById(`flag-${i}`).classList.remove("flag-clicked");
            }
        }
        if(!e.target.classList.contains("flag-clicked")){ 
            e.target.classList.add("flag-clicked");
        } else{ 
            e.target.classList.remove("flag-clicked");
        }
    }

    render(){
        const { isActive } = this.state;
        return(
                <header>
                    <div className="dropdown">
                        <div className="dropdown-item">
                            <div className="dropdown-button" style={{ backgroundColor: this.state.isActive[0] ? "black" : "rgb(81, 81, 81)" }} onClick={this.handleDropDown.bind(this, 0) }>
                                Home 
                                {isActive[0] && <span className="arrow-down"></span>}
                            </div>
                            {isActive[0] &&
                            <div className="dropdown-list list-down"  id="home">
                                <p className="dropdown-list-item">What we do</p>
                                <hr />
                                <p className="dropdown-list-item">Who we are</p>
                                <hr />
                                <p className="dropdown-list-item">Contact</p>
                            </div>
                            }
                        </div>
                        <div className="dropdown-item">
                            <div className="dropdown-button" style={{ backgroundColor: this.state.isActive[1] ? "black" : "rgb(81, 81, 81)" }} onClick={this.handleDropDown.bind(this, 1)} >
                                Sports
                                {isActive[1] && <span className="arrow-down"></span>}
                            </div>
                            {isActive[1] && 
                            <div className="dropdown-list" id="sports">
                                <p className="dropdown-list-item">Football</p>
                                <hr />
                                <p className="dropdown-list-item">Basketball</p>
                                <hr />
                                <p className="dropdown-list-item">Tennis</p>
                            </div>}
                        </div>
                        <div className="dropdown-item">
                            <div className="dropdown-button" style={{ backgroundColor: this.state.isActive[2] ? "black" : "rgb(81, 81, 81)" }} onClick={this.handleDropDown.bind(this, 2)}>
                                Casino
                                {isActive[2] && <span className="arrow-down"></span>}
                            </div>
                            {isActive[2] &&
                            <div className="dropdown-list" id="casino">
                                <p className="dropdown-list-item">Blackjack</p>
                                <hr />
                                <p className="dropdown-list-item">Roulette</p>
                                <hr />
                                <p className="dropdown-list-item">Poker</p>
                            </div>}
                        </div>
                        <div className="dropdown-item">
                            <div className="dropdown-button" style={{ backgroundColor: this.state.isActive[3] ? "black" : "rgb(81, 81, 81)" }} onClick={this.handleDropDown.bind(this, 3)}>
                                Games
                                {isActive[3] && <span className="arrow-down"></span>}
                            </div>
                            {isActive[3] &&
                            <div className="dropdown-list" id="games">
                                <p className="dropdown-list-item">Mega Moolah</p>
                                <hr />
                                <p className="dropdown-list-item">The curse of the Black Pearl</p>
                                <hr />
                                <p className="dropdown-list-item">Super slots attack</p>
                            </div>}
                        </div>
                    </div>
                    <div className="flags">
                        <img className="flag-icon" id="flag-0" onClick={this.handleFlags} src={britany} alt="british flag" />
                        <img className="flag-icon" id="flag-1" onClick={this.handleFlags} src={france} alt="france flag" />
                        <img className="flag-icon" id="flag-2" onClick={this.handleFlags} src={germany} alt="germany flag" />
                    </div>
                </header>
        )   
    }
}

export default Header;