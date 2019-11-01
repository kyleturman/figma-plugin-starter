import React from "react";

type IntroProps = {
    plugin_data: object;
};

type IntroState = {};

export default class Intro extends React.Component<IntroProps, IntroState> {
    private name_input: HTMLInputElement;

    private nameInputRef = (el: HTMLInputElement) => {
        this.name_input = el;
    };

    addName = () => {
        parent.postMessage(
            {
                pluginMessage: {
                    type: "writeName",
                    name: "name_example",
                    value: this.name_input.value
                }
            },
            "*"
        );
    };

    render() {
        // Initial load while waiting for data from PluginDataManager
        if (Object.keys(this.props.plugin_data).length === 0) {
            return <div></div>;
        }

        let prefilledName = this.props.plugin_data["local"]["name_example"];

        return (
            <div>
                <h1 className="type type--pos-x-large-normal mb-4">
                    Test plugin
                </h1>
                <div className="mb-2">
                    This is a test plugin that uses React and{" "}
                    <a
                        href="https://thomas-lowry.github.io/figma-plugin-ds"
                        target="_blank">
                        Figma Plugin DS
                    </a>{" "}
                    styles to write your name to this Figma file.
                </div>
                <div className="mb-2">
                    <input
                        className="input"
                        ref={this.nameInputRef}
                        defaultValue={prefilledName}
                        placeholder="Enter your name"></input>
                </div>
                <button
                    className="button button--primary"
                    onClick={this.addName}>
                    Write name
                </button>
            </div>
        );
    }
}
