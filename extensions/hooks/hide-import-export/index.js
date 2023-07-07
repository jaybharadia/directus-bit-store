"use strict";

var index = ({ filter, action }) => {
    // filter("items.create", (event, payload, context) => {
    //     console.log("Creating Item!", event);
    //     console.log("Creating Item!", payload);
    //     console.log("Creating Item!", context);
    // });

    filter("items.read", (event, payload, context) => {
        console.log("Event ---> !", event);
        console.log("Payload !", payload);

        if (payload.query && payload.query.export) {
            throw new Error("Permission Not Granted");
        }

        // console.log("CONTEXT ", context);

        // console.log("Creating Item!", context);
    });

    filter("items.create", (event, payload) => {
        console.log("inside item create --> ", event, payload);
    });

    // action("items.create", () => {
    //     console.log("Item created!", action);
    // });
};

module.exports = index;
