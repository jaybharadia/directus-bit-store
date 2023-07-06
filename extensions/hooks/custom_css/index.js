const path = require("path");
const fs = require("fs");
const style = fs.readFileSync(path.join(__dirname, "style.css"));
const appJs = fs.readFileSync(path.join(__dirname, "app.js"));

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
        console.log("inside Hook Body js injection *******");
        // setTimeout(() => {
        //     console.log("timer expired ******");

        //     return `<script src="/admin/public/js/index.js" ></script>`;
        // }, 5000);

        // return `<script src="/admin/public/js/index.js" ></script>`;
        return `<style>${style}</style><script>${appJs}</script>`;
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
