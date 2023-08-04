// ==UserScript==
// @name         MS teams - anonymous pro + gruvbox
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  My take on MS Teams mingled with Gruvbox and my personal favourite Anonymous Pro font.
// @homepage     https://imn1.xyz/
// @author       n1
// @match        https://teams.microsoft.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
        /* Comment out this rule if you want to retain original font. */
        * {
            font-family: "Anonymous Pro" !important;
            font-size: 11px !important;
            font-weight: normal !important;
            line-height: 1.1 !important;
        }

        *:not(.wi > *), .b {
            color: #ebdbb2;
        }

        /* to align messages */
        .ui-chat__messagecontent, .ui-reactions {
            margin-left: 120px;
        }
        .ui-chat__item__gutter {
            display: none;
        }
        .ui-chat__item__message {
            margin-left: 0
        }
        .fui-Primitive {
            vertical-align: middle;
        }

        /* gruvbox */
        body, app-bar, .app-header-bar, .ts-left-rail-wrapper, .ts-messages-header, .bw > div, .et,
        .app-notification-banner, #message-pane-layout-a11y, .bbo, .ui-alert {
            background-color: #282828 !important;
        }

        .left-rail-box-shadow-overlay::before,
        .left-rail-header-v2 .left-rail-header.constant-border::after,
        .messages-header-v2 .ts-section-divider::before {
            background: none;
        }

        .ts-header-search, [id^=new-message-], .ui-chat {
            background-color: #1d2021 !important;
        }

        * {
            box-shadow: none !important;
        }

        .ui-box, .ts-btn-fluent.ts-btn-fluent-split::after, .ui-alert {
            border: none !important;
        }

        .acx {
            min-height: auto !important;
        }

        /* highlights */
        .left-rail-selected *, .ui-chat__message__author.wi, .ui-chat__message__author.vy * {
            color: #d79921;
        }

        .warning-error-banner * {
            color: #cc241d;
        }

        /* links */
        a.fui-Link, a.fui-Link:hover {
            color: #ebdbb2 !important;
        }

        /* annotation icon */
        .ui-chat__message__badge {
            display: none !important;
        }
    `;

    document.getElementsByTagName("head")[0].appendChild(style);
})();