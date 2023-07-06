"use strict";

const path = require("path");

const stylePath = path.resolve(__dirname, "../../../public/custom-hook.css");
console.log("🚀 ~ file: index.js:6 ~ stylePath:", stylePath);
var index = ({ embed, init, action }) => {
    // filter('items.create', () => {
    // 	console.log('Creating Item!');
    // });

    // action('items.create', () => {
    // 	console.log('Item created!');
    // });

    // embed(
    //     "head",
    //     () =>
    //         `<link rel="stylesheet" href="../../../../public/custom-hook.css"></link>`
    // );

    embed("body", () => {
        // setTimeout(() => {
        //     console.log("timer expired ******");

        //     return `<script src="/admin/public/js/index.js" ></script>`;
        // }, 5000);

        return `<script src="/admin/public/js/index.js" ></script>`;
    });

    // init("routes.after", ({ app }) => {
    //     // app.use(Sentry.Handlers.requestHandler());
    //     // console.log('-- Sentry Request Handler Added --');

    //     console.log("init event appp after ***");
    //     embed(
    //         "body",
    //         () => `<script src="/admin/public/js/index.js" ></script>`
    //     );
    // });

    action("collections.read", () => {
        console.log("Item COmpanies READ!");
    });

    // init('routes.custom.after', ({ app }) => {
    // 	app.use(Sentry.Handlers.errorHandler());
    // 	console.log('-- Sentry Error Handler Added --');
    // });
};

module.exports = index;
