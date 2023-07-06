"use strict";

const fs = require("fs");
var index = (router) => {
    router.get("/", (req, res) => {
        fs.readFile(
            `${__dirname}/../../../public/custom.css`,
            { encoding: "utf-8" },
            function (err, data) {
                if (!err) {
                    res.setHeader("Content-Type", "text/css");
                    res.send(data);
                } else {
                    console.log(err);
                }
            }
        );
    });
};

module.exports = index;
