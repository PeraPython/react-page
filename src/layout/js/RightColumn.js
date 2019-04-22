import React, { Component } from 'react';
import '../css/right-column.css';

class RightColumn extends Component{
    constructor(props){
        super(props);
        this.state={
            isActive: [false, false, false]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(current){
        const { isActive } = this.state;
        let newIsActive = [];
        isActive.map( (key, index) => 
            current === index ? newIsActive.push(!key) : newIsActive.push(false)
        )
        this.setState({ isActive: newIsActive });
    }

    render(){
        return(
            <div className="right-column">
                <div className="accordion">
                    <div className="link" onClick={this.handleClick.bind(this, 0)}>
                        {this.state.isActive[0] ? "Click to close" : "Click to open"} 
                        {this.state.isActive[0] ? <span className="arrow arrow-down-right"></span> : <span className="arrow arrow-up"></span>}
                    </div>
                    {this.state.isActive[0] &&
                    <div className="content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. 
                    </div>}
                    <div className="link" onClick={this.handleClick.bind(this, 1)}>
                        {this.state.isActive[1] ? "Click to close" : "Click to open"}
                        {this.state.isActive[1] ? <span className="arrow arrow-down-right"></span> : <span className="arrow arrow-up"></span>}
                        </div>
                    {this.state.isActive[1] &&
                    <div className="content">
                        It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                        of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </div>}
                    <div className="link" onClick={this.handleClick.bind(this, 2)}>
                        {this.state.isActive[2] ? "Click to close" : "Click to open"}
                        {this.state.isActive[2] ? <span className="arrow arrow-down-right"></span> : <span className="arrow arrow-up"></span>}
                    </div>
                    {this.state.isActive[2] &&
                    <div className="content">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                        be sure there isn't anything embarrassing hidden in the middle of text. 
                    </div>}
                </div>
            </div>
        )
    }
}

export default RightColumn;