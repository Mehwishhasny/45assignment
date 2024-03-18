var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Dubai", "London", "Switzerland", "Canada", "Venice"];
//prinitng the list in its orin=ginal order:
console.log(placesToVisit);
//printing the list in alphabetical order:
console.log("Alphabetical List:", __spreadArray([], placesToVisit, true).sort());
//printing the list again:
console.log("Original list:", placesToVisit);
//reversing the alphabetical ordered list:
console.log("Reversed Alphabetical List:", (__spreadArray([], placesToVisit, true).sort()).reverse());
//printing the list again:
console.log("Original list:", placesToVisit);
//Reserve the order of the list:
console.log("Reversed list:", placesToVisit.reverse());
//Original order of the list:
console.log("Original list:", placesToVisit.reverse());
//Original to Aplabetical ordered list:
console.log("Original to Aplhabetical list:", placesToVisit.sort());
//Original to Reversed Alphabetical list:
console.log("Original to Reversed Alphabetical list:", placesToVisit.reverse());
