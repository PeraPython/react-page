import React from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import '../css/main.css';

const Main = () =>{
    return (
        <main className="main">
            <LeftColumn />
            <RightColumn />
        </main>
    )
}

export default Main;