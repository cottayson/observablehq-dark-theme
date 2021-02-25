// ==UserScript==
// @name        Dark Theme for observablehq.com
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 10.02.2021, 15:20:11
// @inject-into auto
// ==/UserScript==

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
:root {
  /* background colors */
  --bg-color: #151515;
  --pea-bg-color: #161616;
  --pea-bg-hover-color: #202020;
  --items-bg-color: #151515;
  --button-bg-color: #151515;

  /* text colors */
  --text-color: #eee;
  --text-color-2: #ccc;
  --min-text-color: #eee;
  --link-text-color: #ccf;

  /* other */
  --global-border-color: #444;

  /* code highlighting colors */
  --code-string: #ccf;
  --code-collapsed-text: #ccc;
  --code-unknown-variable: #ccc;
  --code-error-color: #f22;
  --code-number: #0f0;
  --code-regexp: #ff5;
}

.site-header {
  background-color: var(--bg-color);
}

.observable-navy {
  color: var(--text-color);
}

h1, h2, h3, h4, h5 {
  color: var(--text-color);
}

p, .observablehq {
  color: var(--text-color);
}

body, div.observablehq {
  background-color: var(--bg-color);
  color: var(--min-text-color);
}

.button-normal {
  background-color: var(--button-bg-color);
}

.pea {
  background-color: var(--pea-bg-color);
}

.pea:hover {
  background-color: var(--pea-bg-hover-color);
}

div.flex.items-center, div.flex.bg-white, div.pa2 {
  background-color: var(--items-bg-color);
  color: var(--min-text-color);
}

footer.bg-near-white {
  background-color: var(--bg-color);
}

.dark-gray {
  color: var(--text-color-2);
}

.b--light-silver {
  border-color: var(--global-border-color);
}

.bg-white, .bg-near-white {
  background-color: var(--bg-color);
}

/* ----CODE STYLE BEGIN---- */

.observablehq--collapsed, .observablehq--expanded, .observablehq--function, .observablehq--gray, .observablehq--import, .observablehq--string:after, .observablehq--string:before {
  color: var(--code-collapsed-text);
}

.cm-s-observable span.cm-string {
  color: var(--code-string);
}

.cm-s-observable span.cm-string-2 {
  color: var(--code-string);
}

.cm-s-observable span.cm-property {
  color: #e8e8e8;
}

.observablehq--blue, .observablehq--keyword, a[href]
{
  color: var(--link-text-color);
}

.observablehq--index, .observablehq--key {
  color: #88f; /*88f key in array*/
}

.cm-s-observable span.cm-atom {
  color: #aaf; /* boolean true, false */
}

.cm-s-observable span.cm-def {
  color: var(--text-color); /* variable */
}

.cm-s-observable span.cm-variable {
  color: var(--code-unknown-variable);
}


.cm-s-observable span.cm-variable-2 {
  color: #aff;
}

.cm-s-observable span.cm-comment {
  color: #bbb;
}

.cm-s-observable span.cm-keyword {
  color: #f88; /* for keyword */
}

.CodeMirror, CodeMirror-wrap pre.CodeMirror-line {
  color: #f00; /* brackets color */
}

.cm-s-observable.CodeMirror {
  color: #fff; /* brackets color */
}

.cm-s-observable.CodeMirror .CodeMirror-matchingbracket {
  color: #fff !important;
}

div.observablehq--inspect {
  color: var(--code-error-color);
}

.cm-s-observable span.cm-number, .cm-s-observable {
  color: var(--code-number);
}

.cm-s-observable span.cm-regexp, .observablehq--regexp {
  color: var(--code-regexp);
}

.observablehq--number {
  color: var(--code-number);
}

.observablehq--string {
  color: var(--code-string);
}

/* ----CODE STYLE END---- */
`;
document.getElementsByTagName('head')[0].appendChild(style);