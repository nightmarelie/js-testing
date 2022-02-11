"use strict";

const username = "john";
typeof username === "string";

if (!"serviceWorker" in (navigator || {})) {
}

const greeting = "hello";
console.log(`${greeting} world!`);
[1, 2, 3].forEach((x) => console.log(x));
