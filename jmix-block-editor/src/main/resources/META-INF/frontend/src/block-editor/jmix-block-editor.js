import EditorJS from '@editorjs/editorjs';
import EditorJSHeader from '@editorjs/header';
import EditorJSList from '@editorjs/list';
import EditorJSRawTool from '@editorjs/raw';
import EditorJSQuote from '@editorjs/quote';
import EditorJSTable from '@editorjs/table'
import EditorJSWarning from '@editorjs/warning';
import EditorJSCodeTool from '@editorjs/code';
import EditorJSChecklist from '@editorjs/checklist';
import EditorJSEmbed from '@editorjs/embed';
import EditorJSUnderline from '@editorjs/underline';
import EditorJSDelimiter from '@editorjs/delimiter';
import EditorJSParagraph from '@editorjs/paragraph';
import EditorJSInlineCode from '@editorjs/inline-code';
import EditorJSLinkTool from '@editorjs/link';
import EditorJSMarker from '@editorjs/marker';
import EditorJSSimpleImage from "@editorjs/simple-image";

import {ElementMixin} from '@vaadin/component-base/src/element-mixin.js';
import {defineCustomElement} from '@vaadin/component-base/src/define.js';
import {ResizeMixin} from '@vaadin/component-base/src/resize-mixin.js';
import {InputFieldMixin} from '@vaadin/field-base/src/input-field-mixin.js';
import {TooltipController} from '@vaadin/component-base/src/tooltip-controller.js';
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {inputFieldShared} from '@vaadin/field-base/src/styles/input-field-shared-styles.js';
import {registerStyles, ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import {jmixBlockEditorStyles} from './jmix-block-editor-styles';

registerStyles('jmix-block-editor', [inputFieldShared, jmixBlockEditorStyles], {moduleId: 'jmix-block-editor-styles'});

class JmixBlockEditor extends ResizeMixin(InputFieldMixin(ThemableMixin(ElementMixin(PolymerElement)))) {

    static get is() {
        return 'jmix-block-editor';
    }

    static get template() {
        return html`
            <div class="jmix-block-editor-container">
                <div part="label">
                    <slot name="label"></slot>
                    <span part="required-indicator" aria-hidden="true"></span>
                </div>

                <div part="input-field"
                     readonly="[[readonly]]"
                     disabled="[[disabled]]"
                     invalid="[[invalid]]"></div>

                <div part="helper-text">
                    <slot name="helper"></slot>
                </div>

                <div part="error-message">
                    <slot name="error-message"></slot>
                </div>
            </div>

            <slot name="tooltip"></slot>
        `;
    }

    static get properties() {
        return {
            value: {
                type: String,
                observer: '_onValueChange'
            },

            /** @private */
            _editor: {
                type: Object
            }
        }
    }

    static get observers() {
        return ['_disabledChanged(disabled, readonly, _editor)'];
    }

    /** @protected */
    ready() {
        super.ready();



        const editor = this.shadowRoot.querySelector('[part="input-field"]');

        this._editor = new EditorJS({
            holder: editor,
            // data: JSON.parse(this.value),

            tools: {
                header: EditorJSHeader,
                raw: EditorJSRawTool,
                code: EditorJSCodeTool,
                embed: EditorJSEmbed,
                underline: EditorJSUnderline,
                delimiter: EditorJSDelimiter,
                inlineCode: EditorJSInlineCode,
                marker: EditorJSMarker,
                image: EditorJSSimpleImage,
                quote: {
                    class: EditorJSQuote,
                    inlineToolbar: true
                },
                table: {
                    class: EditorJSTable,
                    inlineToolbar: true
                },
                list: {
                    class: EditorJSList,
                    inlineToolbar: true
                },
                warning: {
                    class: EditorJSWarning,
                    inlineToolbar: true
                },
                checklist: {
                    class: EditorJSChecklist,
                    inlineToolbar: true
                },
                paragraph: {
                    class: EditorJSParagraph,
                    inlineToolbar: true
                },
                linkTool: {
                    class: EditorJSLinkTool,
                    config: {
                        endpoint: 'http://localhost:8080', //TODO backend endpoint for url data fetching,
                    }
                }
            }
        });

        this._tooltipController = new TooltipController(this);
        this._tooltipController.setPosition('top');
        this._tooltipController.setAriaTarget(this._editor);
        this.addController(this._tooltipController);
    }

    /**
     * @protected
     */
    _disabledChanged(disabled, readonly, editor) {
        if (disabled === undefined || readonly === undefined || editor === undefined) {
            return;
        }

        console.log('panos:_disabledChanged', disabled, readonly, editor);

        // editor.setReadOnly(disabled || readonly);
        // if (!disabled && !readonly) {
        //     editor.textInput.getElement().removeAttribute('disabled')
        // }
    }

    /**
     * @protected
     */
    _onValueChange(value) {
        if (this._editor === undefined) {
            return;
        }

        console.log('panos:_onValueChange', value);

        // this._editor.session.setValue(value);
    }

    get clearElement() {
        return null;
    }
}

defineCustomElement(JmixBlockEditor);

export {JmixBlockEditor};