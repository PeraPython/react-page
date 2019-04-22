import React, { Component } from 'react';
import '../css/table.css';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            toggle: {}
        }
    }
    componentDidMount() {
        fetch("https://cdn.sbtech.com/rj/mocks/MOCK_DATA.json")
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
                let toggle ={};
                for(let key in data[0]){
                    toggle[key] = false;
                }
                this.setState({ toggle: toggle })
            });
    }

    sortByKey(key){
        let { data } = this.state;
        this.state.toggle[key] ? data.sort( (a, b) => a[key] > b[key] ? 1 : a[key] === b[key] ? 0 : -1 ) : data.sort( (a, b) => b[key] > a[key] ? 1 : b[key] === a[key] ? 0 : -1  );
        let toggle = this.state.toggle;
        for(let x in this.state.toggle){
            if(key !== x){
                toggle[x] = false; 
            } 
        }
        toggle[key] = !this.state.toggle[key];
        this.setState({data: data, toggle: {...toggle}})
    }
    
    handleClick(page){
        for(let i = 0; i <document.getElementsByClassName('rows').length; i++){
            if(i >= (page-1)*100 && i < page*100){
                document.getElementById(i).style.display = "table-row";
            } else {
                document.getElementById(i).style.display = "none";
            }
        }
    }

    render(){ 
        if(this.state.data){
            const { data } = this.state;
            let header = [];
            for ( let key in data[0]){
                header.push(key);
            }
            const pageNumbers = [];
            for(let i=1; i<= Math.ceil(data.length / 100); i++){
                pageNumbers.push(i);
            }
            let i = 0;
            let j=0;
            return(
                <div className="table-container">
                    <div className="pagination">{pageNumbers.map(x => <span key={`page-${x}`} className="page-link" onClick={this.handleClick.bind(this, x)}>{"| "}{x}{" "}</span>)}{"|"}</div>
                    <table className="table">
                        <thead>
                            <tr id="table-header">
                                {header.map(x => <th key={`header-${j++}`} id={x.replace(" ","-")} onClick={this.sortByKey.bind(this, x)}>{x}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map( arr => (<tr id={i++} key={`row-${i}`} className="rows" style={{display: i <= 100 ? 'table-row' : 'none'}}>{header.map(key => (<td key={`cell-${j++}`}>{arr[key]}</td>))}</tr>))}
                        </tbody>
                      </table>
                      <div className="pagination">{pageNumbers.map(x => <span key={`page-${j++}`} className="page-link" onClick={this.handleClick.bind(this, x)}>{"| "}{x}{" "}</span>)}{"|"}</div>
                </div>
        )
    } else {
        return (
            <div id="loading"> Loading, please wait ...</div>
        )
    }
        
    }
}

export default Table;