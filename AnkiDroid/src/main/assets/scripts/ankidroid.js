"use strict";
globalThis.ankidroid = globalThis.ankidroid || {};

globalThis.ankidroid.userAction = function (number) {
    try {
        let userJs = globalThis[`userJs${number}`];
        if (userJs != null) {
            userJs();
        } else {
            window.location.href = `missing-user-action:${number}`;
        }
    } catch (e) {
        alert(e);
    }
};

globalThis.ankidroid.showHint = function () {
    document.querySelector("a.hint:not([style*='display: none'])")?.click();
};

globalThis.ankidroid.showAllHints = function () {
    document.querySelectorAll("a.hint").forEach(el => el.click());
};
