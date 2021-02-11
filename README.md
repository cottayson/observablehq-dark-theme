# What it is?
Is a dark theme for <https://observablehq.com>

# How to use
1. Install [Violentmonkey](https://violentmonkey.github.io/) extension
1. Load `test.user.js` script.
1. Open your favorite observable [notebook](https://observablehq.com/@observablehq/input-checkbox)

# Contributing

## Setting up your favourite editor
* Firstly read this [Install a local script](https://violentmonkey.github.io/posts/how-to-edit-scripts-with-your-favorite-editor/#install-a-local-script)

## Let's use "hard way"
- Your browser is `Google Chrome` or `Mozilla Firefox`
- [Install](https://nodejs.org/en/download/) `node.js` if it's not installed
- Run `npm install` in project directory
- Start http server by running `npm start` or `http-server -c5`
- Open url in browser <http://localhost:8080/test.user.js>
- Click on `options` button and select `Track local file before this window is closed`
- Click `Confirm installation` or `install` button

Note: **You will need to reload browser after each script change.**

### Issues:
* [ ] User can't see cursor
* [ ] User can't see selected text
* [ ] User can't see current working cell
* [ ] User can't see placeholders like `alt-backspace to delete`
* [ ] Booleans are dark green, it's bad
* [ ] Code completion (you can press **TAB** for code completion) use wrong background and text colors
* [ ] Buttons! Publish, like, menu
* [ ] Right panel \`graph of dependencies\` needs more contrast colors
* [ ] Help ("?" in bottom right corner)
  + [ ] Keyboard shortcuts 
  + [ ] Other submenus
* [ ] Notebook comments have white background
