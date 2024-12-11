import {css, registerStyles} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

export const contentStyles = css `
	.ct {
		z-index: 999;
		opacity: 0;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		pointer-events: none;
		-webkit-transition: opacity 50ms ease-in, -webkit-transform 70ms cubic-bezier(.215, .61, .355, 1);
		transition: opacity 50ms ease-in, -webkit-transform 70ms cubic-bezier(.215, .61, .355, 1);
		transition: opacity 50ms ease-in, transform 70ms cubic-bezier(.215, .61, .355, 1);
		transition: opacity 50ms ease-in, transform 70ms cubic-bezier(.215, .61, .355, 1), -webkit-transform 70ms cubic-bezier(.215, .61, .355, 1);
		will-change: opacity, top, left;
		-webkit-box-shadow: 0 8px 12px 0 rgba(29, 32, 43, .17), 0 4px 5px -3px rgba(5, 6, 12, .49);
		box-shadow: 0 8px 12px 0 rgba(29, 32, 43, .17), 0 4px 5px -3px rgba(5, 6, 12, .49);
		border-radius: 9px
	}

	.ct, .ct:before {
		position: absolute;
		top: 0;
		left: 0
	}

	.ct:before {
		content: "";
		bottom: 0;
		right: 0;
		background-color: #1d202b;
		z-index: -1;
		border-radius: 4px
	}

	@supports (-webkit-mask-box-image:url("")) {
		.ct:before {
			border-radius: 0;
			-webkit-mask-box-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%
		}
	}
	@media (--mobile) {
		.ct {
			display: none
		}
	}

	.ct__content {
		padding: 6px 10px;
		color: #cdd1e0;
		font-size: 12px;
		text-align: center;
		letter-spacing: .02em;
		line-height: 1em
	}

	.ct:after {
		content: "";
		width: 8px;
		height: 8px;
		position: absolute;
		background-color: #1d202b;
		z-index: -1
	}

	.ct--bottom {
		-webkit-transform: translateY(5px);
		transform: translateY(5px)
	}

	.ct--bottom:after {
		top: -3px;
		left: 50%;
		-webkit-transform: translateX(-50%) rotate(-45deg);
		transform: translateX(-50%) rotate(-45deg)
	}

	.ct--top {
		-webkit-transform: translateY(-5px);
		transform: translateY(-5px)
	}

	.ct--top:after {
		top: auto;
		bottom: -3px;
		left: 50%;
		-webkit-transform: translateX(-50%) rotate(-45deg);
		transform: translateX(-50%) rotate(-45deg)
	}

	.ct--left {
		-webkit-transform: translateX(-5px);
		transform: translateX(-5px)
	}

	.ct--left:after {
		top: 50%;
		left: auto;
		right: 0;
		-webkit-transform: translate(41.6%, -50%) rotate(-45deg);
		transform: translate(41.6%, -50%) rotate(-45deg)
	}

	.ct--right {
		-webkit-transform: translateX(5px);
		transform: translateX(5px)
	}

	.ct--right:after {
		top: 50%;
		left: 0;
		-webkit-transform: translate(-41.6%, -50%) rotate(-45deg);
		transform: translate(-41.6%, -50%) rotate(-45deg)
	}

	.ct--shown {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}

	:root {
		--selectionColor: #e1f2ff;
		--inlineSelectionColor: #d4ecff;
		--bg-light: #eff2f5;
		--grayText: #707684;
		--color-dark: #1D202B;
		--color-active-icon: #388AE5;
		--color-gray-border: rgba(201, 201, 204, .48);
		--content-width: 650px;
		--narrow-mode-right-padding: 50px;
		--toolbox-buttons-size: 26px;
		--toolbox-buttons-size--mobile: 36px;
		--icon-size: 20px;
		--icon-size--mobile: 28px;
		--block-padding-vertical: .4em;
		--color-line-gray: #EFF0F1
	}

	.codex-editor {
		position: relative;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		z-index: 1
	}

	.codex-editor .hide {
		display: none
	}

	.codex-editor__redactor [contenteditable]:empty:after {
		content: "\\feff"
	}

	@media (min-width: 651px) {
		.codex-editor--narrow .codex-editor__redactor {
			margin-right: 50px
		}
	}
	@media (min-width: 651px) {
		.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor {
			margin-left: 50px;
			margin-right: 0
		}
	}
	@media (min-width: 651px) {
		.codex-editor--narrow .ce-toolbar__actions {
			right: -5px
		}
	}

	.codex-editor-copyable {
		position: absolute;
		height: 1px;
		width: 1px;
		top: -400%;
		opacity: .001
	}

	.codex-editor-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		pointer-events: none;
		overflow: hidden
	}

	.codex-editor-overlay__container {
		position: relative;
		pointer-events: auto;
		z-index: 0
	}

	.codex-editor-overlay__rectangle {
		position: absolute;
		pointer-events: none;
		background-color: #2eaadc33;
		border: 1px solid transparent
	}

	.codex-editor svg {
		max-height: 100%
	}

	.codex-editor path {
		stroke: currentColor
	}

	.codex-editor ::-moz-selection {
		background-color: #d4ecff
	}

	.codex-editor ::selection {
		background-color: #d4ecff
	}

	.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before {
		opacity: 0 !important
	}

	.ce-scroll-locked {
		overflow: hidden
	}

	.ce-scroll-locked--hard {
		overflow: hidden;
		top: calc(-1 * var(--window-scroll-offset));
		position: fixed;
		width: 100%
	}

	.ce-toolbar {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		-webkit-transition: opacity .1s ease;
		transition: opacity .1s ease;
		will-change: opacity, top;
		display: none
	}

	.ce-toolbar--opened {
		display: block
	}

	.ce-toolbar__content {
		max-width: 650px;
		margin: 0 auto;
		position: relative
	}

	.ce-toolbar__plus {
		color: #1d202b;
		cursor: pointer;
		width: 26px;
		height: 26px;
		border-radius: 7px;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-ms-flex-negative: 0;
		flex-shrink: 0
	}

	@media (max-width: 650px) {
		.ce-toolbar__plus {
			width: 36px;
			height: 36px
		}
	}
	@media (hover: hover) {
		.ce-toolbar__plus:hover {
			background-color: #eff2f5
		}
	}

	.ce-toolbar__plus--active {
		background-color: #eff2f5;
		-webkit-animation: bounceIn .75s 1;
		animation: bounceIn .75s 1;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards
	}

	.ce-toolbar__plus-shortcut {
		opacity: .6;
		word-spacing: -2px;
		margin-top: 5px
	}

	@media (max-width: 650px) {
		.ce-toolbar__plus {
			position: absolute;
			background-color: #fff;
			border: 1px solid #E8E8EB;
			-webkit-box-shadow: 0 3px 15px -3px rgba(13, 20, 33, .13);
			box-shadow: 0 3px 15px -3px #0d142121;
			border-radius: 6px;
			z-index: 2;
			position: static
		}

		.ce-toolbar__plus--left-oriented:before {
			left: 15px;
			margin-left: 0
		}

		.ce-toolbar__plus--right-oriented:before {
			left: auto;
			right: 15px;
			margin-left: 0
		}
	}

	.ce-toolbar__actions {
		position: absolute;
		right: 100%;
		opacity: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		padding-right: 5px
	}

	.ce-toolbar__actions--opened {
		opacity: 1
	}

	@media (max-width: 650px) {
		.ce-toolbar__actions {
			right: auto
		}
	}

	.ce-toolbar__settings-btn {
		color: #1d202b;
		width: 26px;
		height: 26px;
		border-radius: 7px;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		margin-left: 3px;
		cursor: pointer;
		user-select: none
	}

	@media (max-width: 650px) {
		.ce-toolbar__settings-btn {
			width: 36px;
			height: 36px
		}
	}
	@media (hover: hover) {
		.ce-toolbar__settings-btn:hover {
			background-color: #eff2f5
		}
	}

	.ce-toolbar__settings-btn--active {
		background-color: #eff2f5;
		-webkit-animation: bounceIn .75s 1;
		animation: bounceIn .75s 1;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards
	}

	@media (min-width: 651px) {
		.ce-toolbar__settings-btn {
			width: 24px
		}
	}

	.ce-toolbar__settings-btn--hidden {
		display: none
	}

	@media (max-width: 650px) {
		.ce-toolbar__settings-btn {
			position: absolute;
			background-color: #fff;
			border: 1px solid #E8E8EB;
			-webkit-box-shadow: 0 3px 15px -3px rgba(13, 20, 33, .13);
			box-shadow: 0 3px 15px -3px #0d142121;
			border-radius: 6px;
			z-index: 2;
			position: static
		}

		.ce-toolbar__settings-btn--left-oriented:before {
			left: 15px;
			margin-left: 0
		}

		.ce-toolbar__settings-btn--right-oriented:before {
			left: auto;
			right: 15px;
			margin-left: 0
		}
	}

	.ce-toolbar__plus svg, .ce-toolbar__settings-btn svg {
		width: 24px;
		height: 24px
	}

	@media (min-width: 651px) {
		.codex-editor--narrow .ce-toolbar__plus {
			left: 5px
		}
	}
	@media (min-width: 651px) {
		.codex-editor--narrow .ce-toolbox .ce-popover {
			right: 0;
			left: auto;
			left: initial
		}
	}

	.ce-inline-toolbar {
		--y-offset: 8px;
		--color-background-icon-active: rgba(56, 138, 229, .1);
		--color-text-icon-active: #388AE5;
		--color-text-primary: black;
		position: absolute;
		visibility: hidden;
		-webkit-transition: opacity .25s ease;
		transition: opacity .25s ease;
		will-change: opacity, left, top;
		top: 0;
		left: 0;
		z-index: 3;
		opacity: 1;
		visibility: visible
	}

	.ce-inline-toolbar [hidden] {
		display: none !important
	}

	.ce-inline-toolbar__toggler-and-button-wrapper {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		padding: 0 6px
	}

	.ce-inline-toolbar__buttons {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex
	}

	.ce-inline-toolbar__dropdown {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		padding: 6px;
		margin: 0 6px 0 -6px;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		cursor: pointer;
		border-right: 1px solid rgba(201, 201, 204, .48);
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}

	@media (hover: hover) {
		.ce-inline-toolbar__dropdown:hover {
			background: #eff2f5
		}
	}

	.ce-inline-toolbar__dropdown--hidden {
		display: none
	}

	.ce-inline-toolbar__dropdown-content, .ce-inline-toolbar__dropdown-arrow {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex
	}

	.ce-inline-toolbar__dropdown-content svg, .ce-inline-toolbar__dropdown-arrow svg {
		width: 20px;
		height: 20px
	}

	.ce-inline-toolbar__shortcut {
		opacity: .6;
		word-spacing: -3px;
		margin-top: 3px
	}

	.ce-inline-tool {
		color: var(--color-text-primary);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		border: 0;
		border-radius: 4px;
		line-height: normal;
		height: 100%;
		padding: 0;
		width: 28px;
		background-color: transparent;
		cursor: pointer
	}

	@media (max-width: 650px) {
		.ce-inline-tool {
			width: 36px;
			height: 36px
		}
	}
	@media (hover: hover) {
		.ce-inline-tool:hover {
			background-color: #f8f8f8
		}
	}

	.ce-inline-tool svg {
		display: block;
		width: 20px;
		height: 20px
	}

	@media (max-width: 650px) {
		.ce-inline-tool svg {
			width: 28px;
			height: 28px
		}
	}

	.ce-inline-tool--link .icon--unlink, .ce-inline-tool--unlink .icon--link {
		display: none
	}

	.ce-inline-tool--unlink .icon--unlink {
		display: inline-block;
		margin-bottom: -1px
	}

	.ce-inline-tool-input {
		background: #F8F8F8;
		border: 1px solid rgba(226, 226, 229, .2);
		border-radius: 6px;
		padding: 4px 8px;
		font-size: 14px;
		line-height: 22px;
		outline: none;
		margin: 0;
		width: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		display: none;
		font-weight: 500;
		-webkit-appearance: none;
		font-family: inherit
	}

	@media (max-width: 650px) {
		.ce-inline-tool-input {
			font-size: 15px;
			font-weight: 500
		}
	}

	.ce-inline-tool-input::-webkit-input-placeholder {
		color: #707684
	}

	.ce-inline-tool-input::-moz-placeholder {
		color: #707684
	}

	.ce-inline-tool-input:-ms-input-placeholder {
		color: #707684
	}

	.ce-inline-tool-input::-ms-input-placeholder {
		color: #707684
	}

	.ce-inline-tool-input::placeholder {
		color: #707684
	}

	.ce-inline-tool-input--showed {
		display: block
	}

	.ce-inline-tool--active {
		background: var(--color-background-icon-active);
		color: var(--color-text-icon-active)
	}

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0
		}
		to {
			opacity: 1
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0
		}
		to {
			opacity: 1
		}
	}

	.ce-block {
		-webkit-animation: fade-in .3s ease;
		animation: fade-in .3s ease;
		-webkit-animation-fill-mode: none;
		animation-fill-mode: none;
		-webkit-animation-fill-mode: initial;
		animation-fill-mode: initial
	}

	.ce-block:first-of-type {
		margin-top: 0
	}

	.ce-block--selected .ce-block__content {
		background: #e1f2ff
	}

	.ce-block--selected .ce-block__content [contenteditable] {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none
	}

	.ce-block--selected .ce-block__content img, .ce-block--selected .ce-block__content .ce-stub {
		opacity: .55
	}

	.ce-block--stretched .ce-block__content {
		max-width: none
	}

	.ce-block__content {
		position: relative;
		max-width: 650px;
		margin: 0 auto;
		-webkit-transition: background-color .15s ease;
		transition: background-color .15s ease
	}

	.ce-block--drop-target .ce-block__content:before {
		content: "";
		position: absolute;
		top: 100%;
		left: -20px;
		margin-top: -1px;
		height: 8px;
		width: 8px;
		border: solid #388AE5;
		border-width: 1px 1px 0 0;
		-webkit-transform-origin: right;
		transform-origin: right;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg)
	}

	.ce-block--drop-target .ce-block__content:after {
		content: "";
		position: absolute;
		top: 100%;
		height: 1px;
		width: 100%;
		color: #388ae5;
		background: repeating-linear-gradient(90deg, #388AE5, #388AE5 1px, #fff 1px, #fff 6px)
	}

	.ce-block a {
		cursor: pointer;
		-webkit-text-decoration: underline;
		text-decoration: underline
	}

	.ce-block b {
		font-weight: 700
	}

	.ce-block i {
		font-style: italic
	}

	@-webkit-keyframes bounceIn {
		0%, 20%, 40%, 60%, 80%, to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}
		0% {
			-webkit-transform: scale3d(.9, .9, .9);
			transform: scale3d(.9, .9, .9)
		}
		20% {
			-webkit-transform: scale3d(1.03, 1.03, 1.03);
			transform: scale3d(1.03, 1.03, 1.03)
		}
		60% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scaleZ(1)
		}
	}
	@keyframes bounceIn {
		0%, 20%, 40%, 60%, 80%, to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}
		0% {
			-webkit-transform: scale3d(.9, .9, .9);
			transform: scale3d(.9, .9, .9)
		}
		20% {
			-webkit-transform: scale3d(1.03, 1.03, 1.03);
			transform: scale3d(1.03, 1.03, 1.03)
		}
		60% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scaleZ(1)
		}
	}
	@-webkit-keyframes selectionBounce {
		0%, 20%, 40%, 60%, 80%, to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}
		50% {
			-webkit-transform: scale3d(1.01, 1.01, 1.01);
			transform: scale3d(1.01, 1.01, 1.01)
		}
		70% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scaleZ(1)
		}
	}
	@keyframes selectionBounce {
		0%, 20%, 40%, 60%, 80%, to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}
		50% {
			-webkit-transform: scale3d(1.01, 1.01, 1.01);
			transform: scale3d(1.01, 1.01, 1.01)
		}
		70% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scaleZ(1)
		}
	}
	@-webkit-keyframes buttonClicked {
		0%, 20%, 40%, 60%, 80%, to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}
		0% {
			-webkit-transform: scale3d(.95, .95, .95);
			transform: scale3d(.95, .95, .95)
		}
		60% {
			-webkit-transform: scale3d(1.02, 1.02, 1.02);
			transform: scale3d(1.02, 1.02, 1.02)
		}
		80% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scaleZ(1)
		}
	}
	@keyframes buttonClicked {
		0%, 20%, 40%, 60%, 80%, to {
			-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
			animation-timing-function: cubic-bezier(.215, .61, .355, 1)
		}
		0% {
			-webkit-transform: scale3d(.95, .95, .95);
			transform: scale3d(.95, .95, .95)
		}
		60% {
			-webkit-transform: scale3d(1.02, 1.02, 1.02);
			transform: scale3d(1.02, 1.02, 1.02)
		}
		80% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scaleZ(1)
		}
	}

	.cdx-block {
		padding: .4em 0
	}

	.cdx-block::-webkit-input-placeholder {
		line-height: normal !important
	}

	.cdx-input {
		border: 1px solid rgba(201, 201, 204, .48);
		-webkit-box-shadow: inset 0 1px 2px 0 rgba(35, 44, 72, .06);
		box-shadow: inset 0 1px 2px #232c480f;
		border-radius: 3px;
		padding: 10px 12px;
		outline: none;
		width: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}

	.cdx-input[data-placeholder]:before {
		position: static !important
	}

	.cdx-input[data-placeholder]:before {
		display: inline-block;
		width: 0;
		white-space: nowrap;
		pointer-events: none
	}

	.cdx-settings-button {
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		border-radius: 3px;
		cursor: pointer;
		border: 0;
		outline: none;
		background-color: transparent;
		vertical-align: bottom;
		color: inherit;
		margin: 0;
		min-width: 26px;
		min-height: 26px
	}

	.cdx-settings-button--focused {
		background: rgba(34, 186, 255, .08) !important
	}

	.cdx-settings-button--focused {
		-webkit-box-shadow: inset 0 0 0px 1px rgba(7, 161, 227, .08);
		box-shadow: inset 0 0 0 1px #07a1e314
	}

	.cdx-settings-button--focused-animated {
		-webkit-animation-name: buttonClicked;
		animation-name: buttonClicked;
		-webkit-animation-duration: .25s;
		animation-duration: .25s
	}

	.cdx-settings-button--active {
		color: #388ae5
	}

	.cdx-settings-button svg {
		width: auto;
		height: auto
	}

	@media (max-width: 650px) {
		.cdx-settings-button svg {
			width: 28px;
			height: 28px
		}
	}
	@media (max-width: 650px) {
		.cdx-settings-button {
			width: 36px;
			height: 36px;
			border-radius: 8px
		}
	}
	@media (hover: hover) {
		.cdx-settings-button:hover {
			background-color: #eff2f5
		}
	}

	.cdx-loader {
		position: relative;
		border: 1px solid rgba(201, 201, 204, .48)
	}

	.cdx-loader:before {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		width: 18px;
		height: 18px;
		margin: -11px 0 0 -11px;
		border: 2px solid rgba(201, 201, 204, .48);
		border-left-color: #388ae5;
		border-radius: 50%;
		-webkit-animation: cdxRotation 1.2s infinite linear;
		animation: cdxRotation 1.2s infinite linear
	}

	@-webkit-keyframes cdxRotation {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0)
		}
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg)
		}
	}
	@keyframes cdxRotation {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0)
		}
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg)
		}
	}

	.cdx-button {
		padding: 13px;
		border-radius: 3px;
		border: 1px solid rgba(201, 201, 204, .48);
		font-size: 14.9px;
		background: #fff;
		-webkit-box-shadow: 0 2px 2px 0 rgba(18, 30, 57, .04);
		box-shadow: 0 2px 2px #121e390a;
		color: #707684;
		text-align: center;
		cursor: pointer
	}

	@media (hover: hover) {
		.cdx-button:hover {
			background: #FBFCFE;
			-webkit-box-shadow: 0 1px 3px 0 rgba(18, 30, 57, .08);
			box-shadow: 0 1px 3px #121e3914
		}
	}

	.cdx-button svg {
		height: 20px;
		margin-right: .2em;
		margin-top: -2px
	}

	.ce-stub {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 12px 18px;
		margin: 10px 0;
		border-radius: 10px;
		background: #eff2f5;
		border: 1px solid #EFF0F1;
		color: #707684;
		font-size: 14px
	}

	.ce-stub svg {
		width: 20px;
		height: 20px
	}

	.ce-stub__info {
		margin-left: 14px
	}

	.ce-stub__title {
		font-weight: 500;
		text-transform: capitalize
	}

	.codex-editor.codex-editor--rtl {
		direction: rtl
	}

	.codex-editor.codex-editor--rtl .cdx-list {
		padding-left: 0;
		padding-right: 40px
	}

	.codex-editor.codex-editor--rtl .ce-toolbar__plus {
		right: -26px;
		left: auto
	}

	.codex-editor.codex-editor--rtl .ce-toolbar__actions {
		right: auto;
		left: -26px
	}

	@media (max-width: 650px) {
		.codex-editor.codex-editor--rtl .ce-toolbar__actions {
			margin-left: 0;
			margin-right: auto;
			padding-right: 0;
			padding-left: 10px
		}
	}

	.codex-editor.codex-editor--rtl .ce-settings {
		left: 5px;
		right: auto
	}

	.codex-editor.codex-editor--rtl .ce-settings:before {
		right: auto;
		left: 25px
	}

	.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)) {
		margin-left: 3px;
		margin-right: 0
	}

	.codex-editor.codex-editor--rtl .ce-conversion-tool__icon {
		margin-right: 0;
		margin-left: 10px
	}

	.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown {
		border-right: 0px solid transparent;
		border-left: 1px solid rgba(201, 201, 204, .48);
		margin: 0 -6px 0 6px
	}

	.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down {
		margin-left: 0;
		margin-right: 4px
	}

	@media (min-width: 651px) {
		.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus {
			left: 0;
			right: 5px
		}
	}
	@media (min-width: 651px) {
		.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions {
			left: -5px
		}
	}

	.cdx-search-field {
		--icon-margin-right: 10px;
		background: #F8F8F8;
		border: 1px solid rgba(226, 226, 229, .2);
		border-radius: 6px;
		padding: 2px;
		display: grid;
		grid-template-columns:auto auto 1fr;
		grid-template-rows:auto
	}

	.cdx-search-field__icon {
		width: 26px;
		height: 26px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		margin-right: var(--icon-margin-right)
	}

	.cdx-search-field__icon svg {
		width: 20px;
		height: 20px;
		color: #707684
	}

	.cdx-search-field__input {
		font-size: 14px;
		outline: none;
		font-weight: 500;
		font-family: inherit;
		border: 0;
		background: transparent;
		margin: 0;
		padding: 0;
		line-height: 22px;
		min-width: calc(100% - 26px - var(--icon-margin-right))
	}

	.cdx-search-field__input::-webkit-input-placeholder {
		color: #707684;
		font-weight: 500
	}

	.cdx-search-field__input::-moz-placeholder {
		color: #707684;
		font-weight: 500
	}

	.cdx-search-field__input:-ms-input-placeholder {
		color: #707684;
		font-weight: 500
	}

	.cdx-search-field__input::-ms-input-placeholder {
		color: #707684;
		font-weight: 500
	}

	.cdx-search-field__input::placeholder {
		color: #707684;
		font-weight: 500
	}

	.ce-popover {
		--border-radius: 6px;
		--width: 200px;
		--max-height: 270px;
		--padding: 6px;
		--offset-from-target: 8px;
		--color-border: #EFF0F1;
		--color-shadow: rgba(13, 20, 33, .1);
		--color-background: white;
		--color-text-primary: black;
		--color-text-secondary: #707684;
		--color-border-icon: rgba(201, 201, 204, .48);
		--color-border-icon-disabled: #EFF0F1;
		--color-text-icon-active: #388AE5;
		--color-background-icon-active: rgba(56, 138, 229, .1);
		--color-background-item-focus: rgba(34, 186, 255, .08);
		--color-shadow-item-focus: rgba(7, 161, 227, .08);
		--color-background-item-hover: #F8F8F8;
		--color-background-item-confirm: #E24A4A;
		--color-background-item-confirm-hover: #CE4343;
		--popover-top: calc(100% + var(--offset-from-target));
		--popover-left: 0;
		--nested-popover-overlap: 4px;
		--icon-size: 20px;
		--item-padding: 3px;
		--item-height: calc(var(--icon-size) + 2 * var(--item-padding))
	}

	.ce-popover__container {
		min-width: var(--width);
		width: var(--width);
		max-height: var(--max-height);
		border-radius: var(--border-radius);
		overflow: hidden;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-box-shadow: 0px 3px 15px -3px var(--color-shadow);
		box-shadow: 0 3px 15px -3px var(--color-shadow);
		position: absolute;
		left: var(--popover-left);
		top: var(--popover-top);
		background: var(--color-background);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		z-index: 4;
		opacity: 0;
		max-height: 0;
		pointer-events: none;
		padding: 0;
		border: none
	}

	.ce-popover--opened > .ce-popover__container {
		opacity: 1;
		padding: var(--padding);
		max-height: var(--max-height);
		pointer-events: auto;
		-webkit-animation: panelShowing .1s ease;
		animation: panelShowing .1s ease;
		border: 1px solid var(--color-border)
	}

	@media (max-width: 650px) {
		.ce-popover--opened > .ce-popover__container {
			-webkit-animation: panelShowingMobile .25s ease;
			animation: panelShowingMobile .25s ease
		}
	}

	.ce-popover--open-top .ce-popover__container {
		--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))
	}

	.ce-popover--open-left .ce-popover__container {
		--popover-left: calc(-1 * var(--width) + 100%)
	}

	.ce-popover__items {
		overflow-y: auto;
		-ms-scroll-chaining: none;
		overscroll-behavior: contain
	}

	@media (max-width: 650px) {
		.ce-popover__overlay {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: #1D202B;
			z-index: 3;
			opacity: .5;
			-webkit-transition: opacity .12s ease-in;
			transition: opacity .12s ease-in;
			will-change: opacity;
			visibility: visible
		}
	}

	.ce-popover__overlay--hidden {
		display: none
	}

	@media (max-width: 650px) {
		.ce-popover .ce-popover__container {
			--offset: 5px;
			position: fixed;
			max-width: none;
			min-width: calc(100% - var(--offset) * 2);
			left: var(--offset);
			right: var(--offset);
			bottom: calc(var(--offset) + env(safe-area-inset-bottom));
			top: auto;
			border-radius: 10px
		}
	}

	.ce-popover__search {
		margin-bottom: 5px
	}

	.ce-popover__nothing-found-message {
		color: #707684;
		display: none;
		cursor: default;
		padding: 3px;
		font-size: 14px;
		line-height: 20px;
		font-weight: 500;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}

	.ce-popover__nothing-found-message--displayed {
		display: block
	}

	.ce-popover--nested .ce-popover__container {
		--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));
		top: calc(var(--trigger-item-top) - var(--nested-popover-overlap));
		position: absolute
	}

	.ce-popover--open-top.ce-popover--nested .ce-popover__container {
		top: calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))
	}

	.ce-popover--open-left .ce-popover--nested .ce-popover__container {
		--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)
	}

	.ce-popover-item-separator {
		padding: 4px 3px
	}

	.ce-popover-item-separator--hidden {
		display: none
	}

	.ce-popover-item-separator__line {
		height: 1px;
		background: var(--color-border);
		width: 100%
	}

	.ce-popover-item-html--hidden {
		display: none
	}

	.ce-popover-item {
		--border-radius: 6px;
		border-radius: var(--border-radius);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		padding: var(--item-padding);
		color: var(--color-text-primary);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		border: none;
		background: transparent
	}

	@media (max-width: 650px) {
		.ce-popover-item {
			padding: 4px
		}
	}

	.ce-popover-item:not(:last-of-type) {
		margin-bottom: 1px
	}

	.ce-popover-item__icon {
		width: 26px;
		height: 26px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center
	}

	.ce-popover-item__icon svg {
		width: 20px;
		height: 20px
	}

	@media (max-width: 650px) {
		.ce-popover-item__icon {
			width: 36px;
			height: 36px;
			border-radius: 8px
		}

		.ce-popover-item__icon svg {
			width: 28px;
			height: 28px
		}
	}

	.ce-popover-item__icon--tool {
		margin-right: 4px
	}

	.ce-popover-item__title {
		font-size: 14px;
		line-height: 20px;
		font-weight: 500;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-right: auto
	}

	@media (max-width: 650px) {
		.ce-popover-item__title {
			font-size: 16px
		}
	}

	.ce-popover-item__secondary-title {
		color: var(--color-text-secondary);
		font-size: 12px;
		white-space: nowrap;
		letter-spacing: -.1em;
		padding-right: 5px;
		opacity: .6
	}

	@media (max-width: 650px) {
		.ce-popover-item__secondary-title {
			display: none
		}
	}

	.ce-popover-item--active {
		background: var(--color-background-icon-active);
		color: var(--color-text-icon-active)
	}

	.ce-popover-item--disabled {
		color: var(--color-text-secondary);
		cursor: default;
		pointer-events: none
	}

	.ce-popover-item--focused:not(.ce-popover-item--no-focus) {
		background: var(--color-background-item-focus) !important
	}

	.ce-popover-item--hidden {
		display: none
	}

	@media (hover: hover) {
		.ce-popover-item:hover {
			cursor: pointer
		}

		.ce-popover-item:hover:not(.ce-popover-item--no-hover) {
			background-color: var(--color-background-item-hover)
		}
	}

	.ce-popover-item--confirmation {
		background: var(--color-background-item-confirm)
	}

	.ce-popover-item--confirmation .ce-popover-item__title, .ce-popover-item--confirmation .ce-popover-item__icon {
		color: #fff
	}

	@media (hover: hover) {
		.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover {
			background: var(--color-background-item-confirm-hover)
		}
	}

	.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused {
		background: var(--color-background-item-confirm-hover) !important
	}

	@-webkit-keyframes panelShowing {
		0% {
			opacity: 0;
			-webkit-transform: translateY(-8px) scale(.9);
			transform: translateY(-8px) scale(.9)
		}
		70% {
			opacity: 1;
			-webkit-transform: translateY(2px);
			transform: translateY(2px)
		}
		to {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
	}
	@keyframes panelShowing {
		0% {
			opacity: 0;
			-webkit-transform: translateY(-8px) scale(.9);
			transform: translateY(-8px) scale(.9)
		}
		70% {
			opacity: 1;
			-webkit-transform: translateY(2px);
			transform: translateY(2px)
		}
		to {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
	}
	@-webkit-keyframes panelShowingMobile {
		0% {
			opacity: 0;
			-webkit-transform: translateY(14px) scale(.98);
			transform: translateY(14px) scale(.98)
		}
		70% {
			opacity: 1;
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px)
		}
		to {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
	}
	@keyframes panelShowingMobile {
		0% {
			opacity: 0;
			-webkit-transform: translateY(14px) scale(.98);
			transform: translateY(14px) scale(.98)
		}
		70% {
			opacity: 1;
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px)
		}
		to {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
	}

	.wobble {
		-webkit-animation-name: wobble;
		animation-name: wobble;
		-webkit-animation-duration: .4s;
		animation-duration: .4s
	}

	@-webkit-keyframes wobble {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translateZ(0)
		}
		15% {
			-webkit-transform: translate3d(-9%, 0, 0);
			transform: translate3d(-9%, 0, 0)
		}
		30% {
			-webkit-transform: translate3d(9%, 0, 0);
			transform: translate3d(9%, 0, 0)
		}
		45% {
			-webkit-transform: translate3d(-4%, 0, 0);
			transform: translate3d(-4%, 0, 0)
		}
		60% {
			-webkit-transform: translate3d(4%, 0, 0);
			transform: translate3d(4%, 0, 0)
		}
		75% {
			-webkit-transform: translate3d(-1%, 0, 0);
			transform: translate3d(-1%, 0, 0)
		}
		to {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translateZ(0)
		}
	}
	@keyframes wobble {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translateZ(0)
		}
		15% {
			-webkit-transform: translate3d(-9%, 0, 0);
			transform: translate3d(-9%, 0, 0)
		}
		30% {
			-webkit-transform: translate3d(9%, 0, 0);
			transform: translate3d(9%, 0, 0)
		}
		45% {
			-webkit-transform: translate3d(-4%, 0, 0);
			transform: translate3d(-4%, 0, 0)
		}
		60% {
			-webkit-transform: translate3d(4%, 0, 0);
			transform: translate3d(4%, 0, 0)
		}
		75% {
			-webkit-transform: translate3d(-1%, 0, 0);
			transform: translate3d(-1%, 0, 0)
		}
		to {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translateZ(0)
		}
	}

	.ce-popover-header {
		margin-bottom: 8px;
		margin-top: 4px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center
	}

	.ce-popover-header__text {
		font-size: 18px;
		font-weight: 600
	}

	.ce-popover-header__back-button {
		border: 0;
		background: transparent;
		width: 36px;
		height: 36px;
		color: var(--color-text-primary)
	}

	.ce-popover-header__back-button svg {
		display: block;
		width: 28px;
		height: 28px
	}

	.ce-popover--inline {
		--height: 38px;
		--height-mobile: 46px;
		--container-padding: 4px;
		position: relative
	}

	.ce-popover--inline .ce-popover__custom-content {
		margin-bottom: 0
	}

	.ce-popover--inline .ce-popover__items {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex
	}

	.ce-popover--inline .ce-popover__container {
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		padding: var(--container-padding);
		height: var(--height);
		top: 0;
		min-width: -webkit-max-content;
		min-width: -moz-max-content;
		min-width: max-content;
		width: -webkit-max-content;
		width: -moz-max-content;
		width: max-content;
		-webkit-animation: none;
		animation: none
	}

	@media (max-width: 650px) {
		.ce-popover--inline .ce-popover__container {
			height: var(--height-mobile);
			position: absolute
		}
	}

	.ce-popover--inline .ce-popover-item-separator {
		padding: 0 4px
	}

	.ce-popover--inline .ce-popover-item-separator__line {
		height: 100%;
		width: 1px
	}

	.ce-popover--inline .ce-popover-item {
		border-radius: 4px;
		padding: 4px
	}

	.ce-popover--inline .ce-popover-item__icon--tool {
		-webkit-box-shadow: none;
		box-shadow: none;
		background: transparent;
		margin-right: 0
	}

	.ce-popover--inline .ce-popover-item__icon {
		width: auto;
		width: initial;
		height: auto;
		height: initial
	}

	.ce-popover--inline .ce-popover-item__icon svg {
		width: 20px;
		height: 20px
	}

	@media (max-width: 650px) {
		.ce-popover--inline .ce-popover-item__icon svg {
			width: 28px;
			height: 28px
		}
	}

	.ce-popover--inline .ce-popover-item:not(:last-of-type) {
		margin-bottom: 0;
		margin-bottom: initial
	}

	.ce-popover--inline .ce-popover-item-html {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center
	}

	.ce-popover--inline .ce-popover-item__icon--chevron-right {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg)
	}

	.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container {
		--offset: 3px;
		left: 0;
		top: calc(var(--height) + var(--offset))
	}

	@media (max-width: 650px) {
		.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container {
			top: calc(var(--height-mobile) + var(--offset))
		}
	}

	.ce-popover--inline .ce-popover--nested .ce-popover__container {
		min-width: var(--width);
		width: var(--width);
		height: -webkit-fit-content;
		height: -moz-fit-content;
		height: fit-content;
		padding: 6px;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column
	}

	.ce-popover--inline .ce-popover--nested .ce-popover__items {
		display: block;
		width: 100%
	}

	.ce-popover--inline .ce-popover--nested .ce-popover-item {
		border-radius: 6px;
		padding: 3px
	}

	@media (max-width: 650px) {
		.ce-popover--inline .ce-popover--nested .ce-popover-item {
			padding: 4px
		}
	}

	.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool {
		margin-right: 4px
	}

	.ce-popover--inline .ce-popover--nested .ce-popover-item__icon {
		width: 26px;
		height: 26px
	}

	.ce-popover--inline .ce-popover--nested .ce-popover-item-separator {
		padding: 4px 3px
	}

	.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line {
		width: 100%;
		height: 1px
	}

	.codex-editor [data-placeholder]:empty:before, .codex-editor [data-placeholder][data-empty=true]:before {
		pointer-events: none;
		color: #707684;
		cursor: text;
		content: attr(data-placeholder)
	}

	.codex-editor [data-placeholder-active]:empty:before, .codex-editor [data-placeholder-active][data-empty=true]:before {
		pointer-events: none;
		color: #707684;
		cursor: text
	}

	.codex-editor [data-placeholder-active]:empty:focus:before, .codex-editor [data-placeholder-active][data-empty=true]:focus:before {
		content: attr(data-placeholder-active)
	}

	.ce-hint--align-start {
		text-align: left;
	}

	.ce-hint--align-center {
		text-align: center;
	}

	.ce-hint__description {
		opacity: 0.6;
		margin-top: 3px;
	}

	.cdx-notify--error {
		background: rgb(255, 251, 251) !important;
	}

	.cdx-notify--error::before {
		background: rgb(251, 93, 93) !important;
	}

	.cdx-notify__input {
		max-width: 130px;
		padding: 5px 10px;
		background: rgb(247, 247, 247);
		border: 0px;
		border-radius: 3px;
		font-size: 13px;
		color: rgb(101, 107, 124);
		outline: 0px;
	}

	.cdx-notify__input::placeholder {
		color: rgb(101, 107, 124);
	}

	.cdx-notify__input:focus::placeholder {
		color: rgba(101, 107, 124, 0.3);
	}

	.cdx-notify__button {
		border: medium;
		border-radius: 3px;
		font-size: 13px;
		padding: 5px 10px;
		cursor: pointer;
	}

	.cdx-notify__button:last-child {
		margin-left: 10px;
	}

	.cdx-notify__button--cancel {
		background: rgb(242, 245, 247);
		box-shadow: rgba(16, 19, 29, 0) 0px 2px 1px 0px;
		color: rgb(101, 107, 124);
	}

	.cdx-notify__button--cancel:hover {
		background: rgb(238, 238, 238);
	}

	.cdx-notify__button--confirm {
		background: rgb(52, 201, 146);
		box-shadow: rgba(18, 49, 35, 0.05) 0px 1px 1px 0px;
		color: rgb(255, 255, 255);
	}

	.cdx-notify__button--confirm:hover {
		background: rgb(51, 176, 130);
	}

	.cdx-notify__btns-wrapper {
		display: flex;
		flex-flow: row;
		margin-top: 5px;
	}

	.cdx-notify__cross {
		position: absolute;
		top: 5px;
		right: 5px;
		width: 10px;
		height: 10px;
		padding: 5px;
		opacity: 0.54;
		cursor: pointer;
	}

	.cdx-notify__cross::after, .cdx-notify__cross::before {
		content: "";
		position: absolute;
		left: 9px;
		top: 5px;
		height: 12px;
		width: 2px;
		background: rgb(87, 93, 103);
	}

	.cdx-notify__cross::before {
		transform: rotate(-45deg);
	}

	.cdx-notify__cross::after {
		transform: rotate(45deg);
	}

	.cdx-notify__cross:hover {
		opacity: 1;
	}

	.cdx-notifies {
		position: fixed;
		z-index: 2;
		bottom: 20px;
		left: 20px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	}

	.cdx-notify {
		position: relative;
		width: 220px;
		margin-top: 15px;
		padding: 13px 16px;
		background: rgb(255, 255, 255);
		box-shadow: rgba(23, 32, 61, 0.13) 0px 11px 17px 0px;
		border-radius: 5px;
		font-size: 14px;
		line-height: 1.4em;
		overflow-wrap: break-word;
	}

	.cdx-notify::before {
		content: "";
		position: absolute;
		display: block;
		top: 0px;
		left: 0px;
		width: 3px;
		height: calc(100% - 6px);
		margin: 3px;
		border-radius: 5px;
		background: 0px 0px;
	}

	@keyframes bounceIn {
		0% {
			opacity: 0;
			transform: scale(0.3);
		}
		50% {
			opacity: 1;
			transform: scale(1.05);
		}
		70% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(1);
		}
	}

	.cdx-notify--bounce-in {
		animation-name: bounceIn;
		animation-duration: 0.6s;
		animation-iteration-count: 1;
	}

	.cdx-notify--success {
		background: rgb(250, 255, 254) !important;
	}

	.cdx-notify--success::before {
		background: rgb(65, 255, 177) !important;
	}

	.ce-paragraph {
		line-height: 1.6em;
		outline: none;
	}

	.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty::before, .ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty="true"]::before {
		content: attr(data-placeholder-active);
	}

	.ce-paragraph p:first-of-type {
		margin-top: 0px;
	}

	.ce-paragraph p:last-of-type {
		margin-bottom: 0px;
	}

	.ce-header {
		padding: 0.6em 0px 3px;
		margin: 0px;
		line-height: 1.25em;
		outline: none;
	}

	.ce-header p, .ce-header div {
		padding: 0px !important;
		margin: 0px !important;
	}

	.cdx-list {
		margin: 0px;
		outline: none;
		display: grid;
		counter-reset: item 0;
		gap: var(--spacing-s);
		padding: var(--spacing-xs);
		--spacing-s: 8px;
		--spacing-xs: 6px;
		--list-counter-type: numeric;
		--radius-border: 5px;
		--checkbox-background: #fff;
		--color-border: #C9C9C9;
		--color-bg-checked: #369FFF;
		--line-height: 1.45em;
		--color-bg-checked-hover: #0059AB;
		--color-tick: #fff;
		--size-checkbox: 1.2em;
	}

	.cdx-list__item {
		line-height: var(--line-height);
		display: grid;
		grid-template: "checkbox content" ". child" / auto 1fr;
	}

	.cdx-list__item-children {
		display: grid;
		grid-area: child;
		gap: var(--spacing-s);
		padding-top: var(--spacing-s);
	}

	.cdx-list__item [contenteditable] {
		outline: none;
	}

	.cdx-list__item-content {
		word-break: break-word;
		white-space: pre-wrap;
		grid-area: content;
		padding-left: var(--spacing-s);
	}

	.cdx-list__item::before {
		counter-increment: item 1;
		white-space: nowrap;
	}

	.cdx-list-ordered .cdx-list__item::before {
		content: counters(item, ".", var(--list-counter-type)) ".";
	}

	.cdx-list-ordered {
		counter-reset: item 0;
	}

	.cdx-list-unordered .cdx-list__item::before {
		content: "•";
	}

	.cdx-list-checklist .cdx-list__item::before {
		content: "";
	}

	.cdx-list__settings .cdx-settings-button {
		width: 50%;
	}

	.cdx-list__checkbox {
		padding-top: calc((var(--line-height) - var(--size-checkbox)) / 2);
		grid-area: checkbox;
		width: var(--size-checkbox);
		height: var(--size-checkbox);
		display: flex;
		cursor: pointer;
	}

	.cdx-list__checkbox svg {
		opacity: 0;
		height: var(--size-checkbox);
		width: var(--size-checkbox);
		left: -1px;
		top: -1px;
		position: absolute;
	}

	@media (hover: hover) {
		.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg {
			opacity: 1;
		}
	}

	.cdx-list__checkbox--checked {
		line-height: var(--line-height);
	}

	@media (hover: hover) {
		.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check {
			background: var(--color-bg-checked-hover);
			border-color: var(--color-bg-checked-hover);
		}
	}

	.cdx-list__checkbox--checked .cdx-list__checkbox-check {
		background: var(--color-bg-checked);
		border-color: var(--color-bg-checked);
	}

	.cdx-list__checkbox--checked .cdx-list__checkbox-check svg {
		opacity: 1;
	}

	.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path {
		stroke: var(--color-tick);
	}

	.cdx-list__checkbox--checked .cdx-list__checkbox-check::before {
		opacity: 0;
		visibility: visible;
		transform: scale(2.5);
	}

	.cdx-list__checkbox-check {
		cursor: pointer;
		display: inline-block;
		position: relative;
		margin: 0px auto;
		width: var(--size-checkbox);
		height: var(--size-checkbox);
		box-sizing: border-box;
		border-radius: var(--radius-border);
		border: 1px solid var(--color-border);
		background: var(--checkbox-background);
	}

	.cdx-list__checkbox-check::before {
		content: "";
		position: absolute;
		inset: 0px;
		border-radius: 100%;
		background-color: var(--color-bg-checked);
		visibility: hidden;
		pointer-events: none;
		transform: scale(1);
		transition: transform 0.4s ease-out, opacity 0.4s;
	}

	.cdx-list-start-with-field {
		background: rgb(248, 248, 248);
		border: 1px solid rgba(226, 226, 229, 0.2);
		border-radius: 6px;
		padding: 2px;
		display: grid;
		grid-template-columns: auto auto 1fr;
		grid-template-rows: auto;
	}

	.cdx-list-start-with-field--invalid {
		background: rgb(255, 236, 237);
		border: 1px solid rgb(225, 63, 63);
	}

	.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input {
		color: rgb(225, 63, 63);
	}

	.cdx-list-start-with-field__input {
		font-size: 14px;
		outline: none;
		font-weight: 500;
		font-family: inherit;
		border: 0px;
		background: transparent;
		margin: 0px;
		padding: 0px;
		line-height: 22px;
		min-width: calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right));
	}

	.cdx-list-start-with-field__input::placeholder {
		color: var(--grayText);
		font-weight: 500;
	}

	.ce-rawtool__textarea {
		min-height: 200px;
		resize: vertical;
		border-radius: 8px;
		border: 0px;
		background-color: rgb(30, 33, 40);
		font-family: Menlo, Monaco, Consolas, Courier New, monospace;
		font-size: 12px;
		line-height: 1.6;
		letter-spacing: -0.2px;
		color: rgb(161, 167, 182);
		overscroll-behavior: contain;
	}

	.cdx-quote-icon svg {
		transform: rotate(180deg);
	}

	.cdx-quote {
		margin: 0px;
	}

	.cdx-quote__text {
		min-height: 158px;
		margin-bottom: 10px;
	}

	.cdx-quote [contentEditable="true"][data-placeholder]::before {
		position: absolute;
		content: attr(data-placeholder);
		color: rgb(112, 118, 132);
		font-weight: 400;
		opacity: 0;
	}

	.cdx-quote [contentEditable="true"][data-placeholder]:empty::before {
		opacity: 1;
	}

	.cdx-quote [contentEditable="true"][data-placeholder]:empty:focus::before {
		opacity: 0;
	}

	.cdx-quote-settings {
		display: flex;
	}

	.cdx-quote-settings .cdx-settings-button {
		width: 50%;
	}

	.tc-wrap {
		--color-background: #f9f9fb;
		--color-text-secondary: #7b7e89;
		--color-border: #e8e8eb;
		--cell-size: 34px;
		--toolbox-icon-size: 18px;
		--toolbox-padding: 6px;
		--toolbox-aiming-field-size: calc(var(--toolbox-icon-size) + var(--toolbox-padding) * 2);
		border-left: 0px;
		position: relative;
		height: 100%;
		width: 100%;
		margin-top: var(--toolbox-icon-size);
		box-sizing: border-box;
		display: grid;
		grid-template-columns: calc(100% - var(--cell-size)) var(--cell-size);
	}

	.tc-wrap--readonly {
		grid-template-columns: 100% var(--cell-size);
	}

	.tc-wrap svg {
		vertical-align: top;
	}

	@media print {
		.tc-wrap {
			border-left-color: var(--color-border);
			border-left-style: solid;
			border-left-width: 1px;
			grid-template-columns: 100% var(--cell-size);
		}
	}
	@media print {
		.tc-wrap .tc-row::after {
			display: none;
		}
	}

	.tc-table {
		position: relative;
		width: 100%;
		height: 100%;
		display: grid;
		font-size: 14px;
		border-top: 1px solid var(--color-border);
		line-height: 1.4;
	}

	.tc-table::after {
		width: calc(var(--cell-size));
		height: 100%;
		left: calc(var(--cell-size) * -1);
		top: 0px;
	}

	.tc-table::after, .tc-table::before {
		position: absolute;
		content: "";
	}

	.tc-table::before {
		width: 100%;
		height: var(--toolbox-aiming-field-size);
		top: calc(var(--toolbox-aiming-field-size) * -1);
		left: 0px;
	}

	.tc-table--heading .tc-row:first-child {
		font-weight: 600;
		border-bottom: 2px solid var(--color-border);
	}

	.tc-table--heading .tc-row:first-child [contenteditable]:empty::before {
		content: attr(heading);
		color: var(--color-text-secondary);
	}

	.tc-table--heading .tc-row:first-child::after {
		bottom: -2px;
		border-bottom: 2px solid var(--color-border);
	}

	.tc-add-column, .tc-add-row {
		display: flex;
		color: var(--color-text-secondary);
	}

	@media print {
		.tc-add {
			display: none;
		}
	}

	.tc-add-column {
		padding: 4px 0px;
		justify-content: center;
		border-top: 1px solid var(--color-border);
	}

	.tc-add-column--disabled {
		visibility: hidden;
	}

	@media print {
		.tc-add-column {
			display: none;
		}
	}

	.tc-add-row {
		height: var(--cell-size);
		align-items: center;
		padding-left: 4px;
		position: relative;
	}

	.tc-add-row--disabled {
		display: none;
	}

	.tc-add-row::before {
		content: "";
		position: absolute;
		right: calc(var(--cell-size) * -1);
		width: var(--cell-size);
		height: 100%;
	}

	@media print {
		.tc-add-row {
			display: none;
		}
	}

	.tc-add-column, .tc-add-row {
		transition: all;
		cursor: pointer;
		will-change: background-color;
	}

	.tc-add-column:hover, .tc-add-row:hover {
		transition: background-color 0.1s;
		background-color: var(--color-background);
	}

	.tc-add-row {
		margin-top: 1px;
	}

	.tc-add-row:hover::before {
		transition: 0.1s;
		background-color: var(--color-background);
	}

	.tc-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
		position: relative;
		border-bottom: 1px solid var(--color-border);
	}

	.tc-row::after {
		content: "";
		pointer-events: none;
		position: absolute;
		width: var(--cell-size);
		height: 100%;
		bottom: -1px;
		right: calc(var(--cell-size) * -1);
		border-bottom: 1px solid var(--color-border);
	}

	.tc-row--selected {
		background: var(--color-background);
	}

	.tc-row--selected::after {
		background: var(--color-background);
	}

	.tc-cell {
		border-right: 1px solid var(--color-border);
		padding: 6px 12px;
		overflow: hidden;
		outline: none;
		line-break: normal;
	}

	.tc-cell--selected {
		background: var(--color-background);
	}

	.tc-wrap--readonly .tc-row::after {
		display: none;
	}

	.tc-toolbox {
		--toolbox-padding: 6px;
		--popover-margin: 30px;
		--toggler-click-zone-size: 30px;
		--toggler-dots-color: #7b7e89;
		--toggler-dots-color-hovered: #1d202b;
		position: absolute;
		cursor: pointer;
		z-index: 1;
		opacity: 0;
		transition: opacity 0.1s;
		will-change: left, opacity;
	}

	.tc-toolbox--column {
		top: calc(var(--toggler-click-zone-size) * -1);
		transform: translate(calc(var(--toggler-click-zone-size) * -1 / 2));
		will-change: left, opacity;
	}

	.tc-toolbox--row {
		left: calc(var(--popover-margin) * -1);
		transform: translateY(calc(var(--toggler-click-zone-size) * -1 / 2));
		margin-top: -1px;
		will-change: top, opacity;
	}

	.tc-toolbox--showed {
		opacity: 1;
	}

	.tc-toolbox .tc-popover {
		position: absolute;
		top: 0px;
		left: var(--popover-margin);
	}

	.tc-toolbox__toggler {
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--toggler-click-zone-size);
		height: var(--toggler-click-zone-size);
		color: var(--toggler-dots-color);
		opacity: 0;
		transition: opacity 0.15s;
		will-change: opacity;
	}

	.tc-toolbox__toggler:hover {
		color: var(--toggler-dots-color-hovered);
	}

	.tc-toolbox__toggler svg {
		fill: currentcolor;
	}

	.tc-wrap:hover .tc-toolbox__toggler {
		opacity: 1;
	}

	.tc-settings .cdx-settings-button {
		width: 50%;
		margin: 0px;
	}

	.tc-popover {
		--color-border: #eaeaea;
		--color-background: #fff;
		--color-background-hover: rgba(232, 232, 235, .49);
		--color-background-confirm: #e24a4a;
		--color-background-confirm-hover: #d54040;
		--color-text-confirm: #fff;
		background: var(--color-background);
		border: 1px solid var(--color-border);
		box-shadow: rgba(13, 20, 33, 0.13) 0px 3px 15px -3px;
		border-radius: 6px;
		padding: 6px;
		display: none;
		will-change: opacity, transform;
	}

	.tc-popover--opened {
		display: block;
		animation: 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards menuShowing;
	}

	.tc-popover__item {
		display: flex;
		align-items: center;
		padding: 2px 14px 2px 2px;
		border-radius: 5px;
		cursor: pointer;
		white-space: nowrap;
		user-select: none;
	}

	.tc-popover__item:hover {
		background: var(--color-background-hover);
	}

	.tc-popover__item:not(:last-of-type) {
		margin-bottom: 2px;
	}

	.tc-popover__item-icon {
		display: inline-flex;
		width: 26px;
		height: 26px;
		align-items: center;
		justify-content: center;
		background: var(--color-background);
		border-radius: 5px;
		border: 1px solid var(--color-border);
		margin-right: 8px;
	}

	.tc-popover__item-label {
		line-height: 22px;
		font-size: 14px;
		font-weight: 500;
	}

	.tc-popover__item--confirm {
		background: var(--color-background-confirm);
		color: var(--color-text-confirm);
	}

	.tc-popover__item--confirm:hover {
		background-color: var(--color-background-confirm-hover);
	}

	.tc-popover__item--confirm .tc-popover__item-icon {
		background: var(--color-background-confirm);
		border-color: rgba(0, 0, 0, 0.1);
	}

	.tc-popover__item--confirm .tc-popover__item-icon svg {
		transition: transform 0.2s ease-in;
		transform: rotate(90deg) scale(1.2);
	}

	.tc-popover__item--hidden {
		display: none;
	}

	@keyframes menuShowing {
		0% {
			opacity: 0;
			transform: translateY(-8px) scale(0.9);
		}
		70% {
			opacity: 1;
			transform: translateY(2px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	.cdx-warning {
		position: relative;
	}

	@media (min-width: 736px) {
		.cdx-warning {
			padding-left: 36px;
		}
	}

	.cdx-warning [contentEditable="true"][data-placeholder]::before {
		position: absolute;
		content: attr(data-placeholder);
		color: rgb(112, 118, 132);
		font-weight: 400;
		opacity: 0;
	}

	.cdx-warning [contentEditable="true"][data-placeholder]:empty::before {
		opacity: 1;
	}

	.cdx-warning [contentEditable="true"][data-placeholder]:empty:focus::before {
		opacity: 0;
	}

	.cdx-warning::before {
		content: "";
		background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='14' height='14' rx='4' stroke='black' stroke-width='2'/%3E%3Cline x1='12' y1='9' x2='12' y2='12' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 15.02V15.01' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
		width: 24px;
		height: 24px;
		background-size: 24px 24px;
		position: absolute;
		margin-top: 8px;
		left: 0px;
	}

	@media (max-width: 735px) {
		.cdx-warning::before {
			display: none;
		}
	}

	.cdx-warning__message {
		min-height: 85px;
	}

	.cdx-warning__title {
		margin-bottom: 6px;
	}

	.ce-code__textarea {
		min-height: 200px;
		font-family: Menlo, Monaco, Consolas, Courier New, monospace;
		color: rgb(65, 49, 78);
		line-height: 1.6em;
		font-size: 12px;
		background: rgb(248, 247, 250);
		border: 1px solid rgb(241, 241, 244);
		box-shadow: none;
		white-space: pre;
		overflow-wrap: normal;
		overflow-x: auto;
		resize: vertical;
	}

	.cdx-checklist {
		gap: 6px;
		display: flex;
		flex-direction: column;
	}

	.cdx-checklist__item {
		display: flex;
		box-sizing: content-box;
		align-items: flex-start;
	}

	.cdx-checklist__item-text {
		outline: none;
		flex-grow: 1;
		line-height: 1.57em;
	}

	.cdx-checklist__item-checkbox {
		width: 22px;
		height: 22px;
		display: flex;
		align-items: center;
		margin-right: 8px;
		margin-top: calc(0.785em - 11px);
		cursor: pointer;
	}

	.cdx-checklist__item-checkbox svg {
		opacity: 0;
		height: 20px;
		width: 20px;
		position: absolute;
		left: -1px;
		top: -1px;
		max-height: 20px;
	}

	@media (hover: hover) {
		.cdx-checklist__item-checkbox:not(.cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check svg {
			opacity: 1;
		}
	}

	.cdx-checklist__item-checkbox-check {
		cursor: pointer;
		display: inline-block;
		flex-shrink: 0;
		position: relative;
		width: 20px;
		height: 20px;
		box-sizing: border-box;
		margin-left: 0px;
		border-radius: 5px;
		border: 1px solid rgb(201, 201, 201);
		background: rgb(255, 255, 255);
	}

	.cdx-checklist__item-checkbox-check::before {
		content: "";
		position: absolute;
		inset: 0px;
		border-radius: 100%;
		background-color: rgb(54, 159, 255);
		visibility: hidden;
		pointer-events: none;
		transform: scale(1);
		transition: transform 0.4s ease-out, opacity 0.4s;
	}

	@media (hover: hover) {
		.cdx-checklist__item--checked .cdx-checklist__item-checkbox:not(.cdx-checklist__item--checked .cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check {
			background: rgb(0, 89, 171);
			border-color: rgb(0, 89, 171);
		}
	}

	.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check {
		background: rgb(54, 159, 255);
		border-color: rgb(54, 159, 255);
	}

	.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg {
		opacity: 1;
	}

	.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg path {
		stroke: rgb(255, 255, 255);
	}

	.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check::before {
		opacity: 0;
		visibility: visible;
		transform: scale(2.5);
	}

	.embed-tool--loading .embed-tool__caption {
		display: none;
	}

	.embed-tool--loading .embed-tool__preloader {
		display: block;
	}

	.embed-tool--loading .embed-tool__content {
		display: none;
	}

	.embed-tool__preloader {
		display: none;
		position: relative;
		height: 200px;
		box-sizing: border-box;
		border-radius: 5px;
		border: 1px solid rgb(230, 233, 235);
	}

	.embed-tool__preloader::before {
		content: "";
		position: absolute;
		z-index: 3;
		left: 50%;
		top: 50%;
		width: 30px;
		height: 30px;
		margin-top: -25px;
		margin-left: -15px;
		border-radius: 50%;
		border-width: 2px;
		border-style: solid;
		border-color: rgb(56, 138, 229) rgb(205, 209, 224) rgb(205, 209, 224);
		border-image: none;
		box-sizing: border-box;
		animation: 2s linear infinite embed-preloader-spin;
	}

	.embed-tool__url {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translate(-50%);
		max-width: 250px;
		color: rgb(123, 126, 137);
		font-size: 11px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.embed-tool__content {
		width: 100%;
	}

	.embed-tool__caption {
		margin-top: 7px;
	}

	.embed-tool__caption[contentEditable="true"][data-placeholder]::before {
		position: absolute;
		content: attr(data-placeholder);
		color: rgb(112, 118, 132);
		font-weight: 400;
		opacity: 0;
	}

	.embed-tool__caption[contentEditable="true"][data-placeholder]:empty::before {
		opacity: 1;
	}

	.embed-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {
		opacity: 0;
	}

	@keyframes embed-preloader-spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.cdx-underline {
		text-decoration: underline;
	}

	.ce-delimiter {
		line-height: 1.6em;
		width: 100%;
		text-align: center;
	}

	.ce-delimiter::before {
		display: inline-block;
		content: "***";
		font-size: 30px;
		line-height: 65px;
		height: 30px;
		letter-spacing: 0.2em;
	}

	.ce-paragraph {
		line-height: 1.6em;
		outline: none;
	}

	.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty::before, .ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty="true"]::before {
		content: attr(data-placeholder-active);
	}

	.ce-paragraph p:first-of-type {
		margin-top: 0px;
	}

	.ce-paragraph p:last-of-type {
		margin-bottom: 0px;
	}

	.inline-code {
		background: rgba(250, 239, 240, 0.78);
		color: rgb(180, 68, 55);
		padding: 3px 4px;
		border-radius: 5px;
		margin: 0px 1px;
		font-family: inherit;
		font-size: 0.86em;
		font-weight: 500;
		letter-spacing: 0.3px;
	}

	.link-tool {
		position: relative;
	}

	.link-tool__input {
		padding-left: 38px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: 10px center;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.link-tool__input-holder {
		position: relative;
	}

	.link-tool__input-holder--error .link-tool__input {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");
		background-color: rgb(255, 243, 246);
		border-color: rgb(243, 224, 224);
		color: rgb(169, 90, 90);
		box-shadow: rgba(146, 62, 62, 0.05) 0px 1px 3px inset;
	}

	.link-tool__input[contentEditable="true"][data-placeholder]::before {
		position: absolute;
		content: attr(data-placeholder);
		color: rgb(112, 118, 132);
		font-weight: 400;
		opacity: 0;
	}

	.link-tool__input[contentEditable="true"][data-placeholder]:empty::before {
		opacity: 1;
	}

	.link-tool__input[contentEditable="true"][data-placeholder]:empty:focus::before {
		opacity: 0;
	}

	.link-tool__progress {
		position: absolute;
		box-shadow: rgba(102, 85, 107, 0.04) 0px 1px 3px inset;
		height: 100%;
		width: 0px;
		background-color: rgb(244, 245, 247);
		z-index: -1;
	}

	.link-tool__progress--loading {
		animation: 0.5s ease-in forwards progress;
	}

	.link-tool__progress--loaded {
		width: 100%;
	}

	.link-tool__content {
		display: block;
		padding: 25px;
		border-radius: 2px;
		box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px;
		color: initial !important;
		text-decoration: none !important;
	}

	.link-tool__content::after {
		content: "";
		clear: both;
		display: table;
	}

	.link-tool__content--rendered {
		background: rgb(255, 255, 255);
		border: 1px solid rgba(201, 201, 204, 0.48);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
		border-radius: 6px;
		will-change: filter;
		animation: 0.45s cubic-bezier(0.215, 0.61, 0.355, 1) link-in;
	}

	.link-tool__content--rendered:hover {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
	}

	.link-tool__image {
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		margin: 0px 0px 0px 30px;
		width: 65px;
		height: 65px;
		border-radius: 3px;
		float: right;
	}

	.link-tool__title {
		font-size: 17px;
		font-weight: 600;
		line-height: 1.5em;
		margin: 0px 0px 10px;
	}

	.link-tool__title + .link-tool__anchor {
		margin-top: 25px;
	}

	.link-tool__description {
		margin: 0px 0px 20px;
		font-size: 15px;
		line-height: 1.55em;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-moz-box-orient: vertical;
		overflow: hidden;
	}

	.link-tool__anchor {
		display: block;
		font-size: 15px;
		line-height: 1em;
		color: rgb(136, 136, 136) !important;
		border: 0px !important;
		padding: 0px !important;
	}

	@keyframes link-in {
		0% {
			filter: blur(5px);
		}
		100% {
			filter: none;
		}
	}

	.codex-editor--narrow .link-tool__image {
		display: none;
	}

	@keyframes progress {
		0% {
			width: 0px;
		}
		100% {
			width: 85%;
		}
	}

	.cdx-marker {
		background: rgba(245, 235, 111, 0.29);
		padding: 3px 0px;
	}

	.cdx-simple-image .cdx-loader {
		min-height: 200px;
	}

	.cdx-simple-image .cdx-input {
		margin-top: 10px;
	}

	.cdx-simple-image img {
		max-width: 100%;
		vertical-align: bottom;
	}

	.cdx-simple-image__caption[contentEditable="true"][data-placeholder]:empty::before {
		position: absolute;
		content: attr(data-placeholder);
		color: rgb(112, 118, 132);
		font-weight: 400;
		opacity: 0;
	}

	.cdx-simple-image__caption[contentEditable="true"][data-placeholder]:empty::before {
		opacity: 1;
	}

	.cdx-simple-image__caption[contentEditable="true"][data-placeholder]:empty:focus::before {
		opacity: 0;
	}

	.cdx-simple-image__picture--with-background {
		background: rgb(239, 242, 245);
		padding: 10px;
	}

	.cdx-simple-image__picture--with-background img {
		display: block;
		max-width: 60%;
		margin: 0px auto;
	}

	.cdx-simple-image__picture--with-border {
		border: 1px solid rgb(232, 232, 235);
		padding: 1px;
	}

	.cdx-simple-image__picture--stretched img {
		max-width: none;
		width: 100%;
	}

`;

// Register a module with ID for backwards compatibility.
registerStyles('', contentStyles, { moduleId: 'jmix-block-editor-content-styles' });