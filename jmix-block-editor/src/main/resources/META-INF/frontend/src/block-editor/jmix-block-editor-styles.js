import {css} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import {contentStyles} from "./jmix-block-editor-content-styles";

/*
let prefixes = [
    '.ce-hint--align-start',
    '.cdx-notify--error',
    '.ce-paragraph',
    '.ce-header',
    '.cdx-list',
    '.ce-rawtool__textarea',
    '.cdx-quote-icon',
    '.tc-wrap',
    '.cdx-warning',
    '.ce-code__textarea',
    '.cdx-checklist',
    '.embed-tool--loading .embed-tool__caption',
    '.cdx-underline',
    '.ce-delimiter',
    '.inline-code',
    '.link-tool',
    '.cdx-marker',
    '.cdx-simple-image .cdx-loader'
];

function isEditorJsStyle(styleSheet) {
    if (styleSheet.ownerNode.id === 'editor-js-styles' || styleSheet.ownerNode.id === 'codex-tooltips-style') {
        return true;
    }

    try {
        let firstRule = styleSheet.cssRules[0];
        return prefixes.some(prefix => firstRule.cssText.startsWith(prefix));

    } catch (e) {
        return false;
    }
}

let editorJsStyles = [...document.styleSheets]
    .filter(isEditorJsStyle)
    .map((styleSheet) => {
        try {
            return [...styleSheet.cssRules].map((rule) => rule.cssText).join("\n");
        } catch (e) {
            console.log("Access to stylesheet %s is denied. Ignoring…", styleSheet.href);
        }
    })
    .filter(Boolean)
    .join("");

console.log(editorJsStyles);

export const contentStyles = css`
    ${unsafeCSS(editorJsStyles)}
`;
console.log(contentStyles);
*/

export const statesStyles = css`
	//:host {
	//	width: 50em;
	//	height: 20em;
	//}

	.jmix-block-editor-container {
		height: 100%;
	}

	.jmix-block-editor-container div::part(input-field) {
        border: 1px solid var(--lumo-contrast-10pct);
        border-radius: var(--_input-container-radius);
    }
`;

export const jmixBlockEditorStyles = [contentStyles, statesStyles];