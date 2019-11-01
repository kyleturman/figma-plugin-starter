import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";

type RootState = {
    plugin_data: any;
};

export default class UI extends React.Component<{}, RootState> {
    constructor(props: any) {
        super(props);
        this.state = {
            plugin_data: {}
        };

        window.onmessage = this.receiveMessage;
    }

    receiveMessage = (event: any) => {
        if (event.data.pluginMessage.type == "updatePluginData") {
            this.setState({ plugin_data: event.data.pluginMessage.data });
        }
    };

    render() {
        return (
            <div>
                <App plugin_data={this.state.plugin_data} />
            </div>
        );
    }
}

ReactDOM.render(<UI />, document.getElementById("root"));
