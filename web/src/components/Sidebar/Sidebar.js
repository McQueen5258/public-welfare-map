import React, { Component } from 'react';

import './Sidebar.css';
import Introduce from '../Introduce/Introduce';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <div>浏览</div>
                    <div>地图</div>
                </div>
                <Introduce />
                <div>链接</div>
            </div>
        );
    }
}
