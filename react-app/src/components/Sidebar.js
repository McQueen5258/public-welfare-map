import React, { Component } from 'react';

import Introduce from './Introduce';

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
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
            </aside>
        );
    }
}
