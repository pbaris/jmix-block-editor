/*
 * Copyright 2023 Haulmont.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {css, registerStyles} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

export const contentStyles = css `

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
`

// Register a module with ID for backwards compatibility.
registerStyles('', contentStyles, { moduleId: 'jmix-block-editor-content-styles' });