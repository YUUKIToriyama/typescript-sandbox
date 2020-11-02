/* main.ts */
import {Item} from "./item";
var elem = document.getElementById("output");
var book = new Item("ライ麦畑でつかまえて", 580);
var dish = new Item("カレーパン", 150);
book.say(elem);
dish.say(elem);
