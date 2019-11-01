# Figma Plugin Starter

A starting point for you to develop Figma Plugins. This is definitely just a starting point, so feel free to change and update. If you have any improvements, feel free to submit a pull request! Developing with this starter works best with [VS Code](https://code.visualstudio.com/).

To learn more about developing plugins for Figma, check out these resources:

- [Making plugins with Figma guide](https://help.figma.com/article/331-making-plugins)
- [Figma Plugins documentation](https://www.figma.com/plugin-docs/intro/)
- [Figma Plugin API Reference](https://www.figma.com/plugin-docs/api/api-overview/)


This starter demonstrates:

- Bundling plugin code using Webpack
- Using React with Typescript and TSX in plugin UI with CSS and SVG support
- Uses [Prettier](https://prettier.io/) to keep code style consistent (can be disabled in `webpack.config.js`)
- Managing and saving data to a Figma Document and/or Local Storage


## Structure
The main files to edit are located in `src`. The Figma plugin structure separates the user interface and controls of the plugin from the actual plugin actions itself that modify the actual documents in Figma. They communicate through passing messages to each other. 

![](https://static.figma.com/uploads/04c4c6293fce2a7fe67bccd385ee5ab998705780)

(If you want to learn more about how Figma plugins work, [read more here](https://www.figma.com/plugin-docs/how-plugins-run/))

In order to support this, the files are structured into: 

- Plugin Typescript files are called from `src/plugin.ts` and located in `src/plugin/*`
- User Interface Typescript/React and CSS files are called from `src/ui.tsx` and located in `src/ui/*`

## Development
In order to make this plugin run, ensure that you do all of these steps!

**Download these files**

- Download the files instead of checking them out

**Building files**

    $ npm install
    $ npx webpack --watch

**Testing in Figma**

The main settings for your plugin are located in the `manifest.json` file. Make sure to add the name of your plugin and  Make sure In order to add this plugin for testing in Figma:

- Open the Figma desktop app (plugin development doesn't work on Figma web)
- Navigate to the Plugins tab in the left sidebar
- Click 'Create your own plugin' on the right
- Click the 'Click to choose a manifest.json file' and navigate to the `dist/manifest.json` file in the **`dist`** folder of your plugin (Ensure that you don't select the `manifest.json` file in the root directory of your plugin!)

In order to save to local storage, you'll need to genarate a plugin ID:

- Right click the plugin you just added and click "Publish new release" (don't worry, we won't publish yet)
- Scroll down to 'Identifier' and click the 'Generate ID' button
- Copy the generated ID to your `manifest.json`

To run the plugin:

- Open a Figma file
- Right click to open menu, navigate to Plugins -> Development -> Your Plugin
- You can see the console for errors and logs underneath Plugins -> Development -> Open Console
- You can quickly re-run the last plugin with ALT+CMD+P


## Publishing

**Building files**

    $ NODE_ENV=production npx webpack

**Publish new release**

When you're ready to publish, you can publish the plugin to either your organization only or open to everyone.

- Open Figma desktop app
- Navigate to Plugins tab in the left sidebar
- Under 'Development' on the right, right-click the plugin and click 'Publish new release'
- In the following modal, enter the icon, preview artwork, and description for the plugin then whether to publish for just your organization or for the public
- 🥂
