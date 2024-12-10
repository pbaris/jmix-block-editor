import {css} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

export const statesStyles = css`

  :host {
    width: 50em;
    height: 20em;
  }

  .jmix-block-editor-container {
    height: 100%;
  }
`;

export const jmixBlockEditorStyles = [statesStyles];