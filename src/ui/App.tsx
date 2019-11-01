import React from "react";

import Intro from "./views/Intro";

// Include the Figma Plugin Design System
import "./styles/global/figma-plugin-ds.css";

// Include our base styles for the plugin
import "./styles/base.css";

type AppProps = {
    plugin_data: object;
};

type AppState = {};

export default class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div className="app type type--pos-medium-normal">
                <Intro plugin_data={this.props.plugin_data} />
            </div>
        );
    }
}
