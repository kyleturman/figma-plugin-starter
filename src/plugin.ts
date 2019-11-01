import PluginDataManager from "./plugin/PluginDataManager";

function main() {
    // You can do some validation if you need to before
    // the plugin runs.
    // if (figma.currentPage.selection.length === 0) {
    //     figma.closePlugin("Please select at least one frame in order to run the plugin");
    //     return;
    // }

    figma.showUI(__html__, { width: 420, height: 380 });
    let plugin_data_manager = new PluginDataManager(figma);

    figma.ui.onmessage = (msg) => {
        // PluginDataManager functions

        if (msg.type === "setLocalData") {
            plugin_data_manager.updateLocalDataField(msg.name, msg.value);
        }

        if (msg.type === "setDocumentData") {
            plugin_data_manager.updateDocumentDataField(msg.name, msg.value);
        }

        // Create new actions here
        // https://www.figma.com/plugin-docs/accessing-document/

        if (msg.type === "writeName") {
            plugin_data_manager.updateLocalDataField(msg.name, msg.value);

            // Create a text node
            let text_node = figma.createText();

            // Load the default font for it then
            // change the characters to the passed in value
            figma.loadFontAsync(text_node.fontName as FontName).then(() => {
                text_node.characters = msg.value;
            });

            // If there's a selection, add the text
            // node to the first selected frame
            if (figma.currentPage.selection.length !== 0) {
                let selected_frame = figma.currentPage
                    .selection[0] as FrameNode;
                selected_frame.appendChild(text_node);
            }

            figma.closePlugin();
        }
    };
}

main();
