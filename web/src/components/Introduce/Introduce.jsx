import React, { Component } from 'react';
import './Introduce.css';

export default class Introduce extends Component {
    render() {
        return (
            <div className="introduce">
                    <h1>广州市海珠区</h1>
                    {/* 线 Line */}
                    <div className="line"></div>
                    <div 
                        className="name"
                        style={{
                            backgroundImage: 'url(./images/Kido/Logo/Kido.png)'
                        }}
                    >蝌蚪实务学堂</div>


            </div>
        );
    }
}
