"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = ["いちご", "りんご", "バナナ"];
items.push("みかん");
items.unshift("さくらんぼ");
items.shift();
items.pop();
console.table(items);
