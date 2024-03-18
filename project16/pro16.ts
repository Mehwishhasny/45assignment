let placesToVisit = ["Dubai", "London", "Switzerland", "Canada", "Venice"];
//prinitng the list in its orin=ginal order:
console.log(placesToVisit);

//printing the list in alphabetical order:
console.log("Alphabetical List:" ,[...placesToVisit].sort());

//printing the list again:
console.log("Original list:" ,placesToVisit);

//reversing the alphabetical ordered list:
console.log("Reversed Alphabetical List:" ,([...placesToVisit].sort()).reverse());

//printing the list again:
console.log("Original list:" ,placesToVisit);

//Reserve the order of the list:
console.log("Reversed list:" , placesToVisit.reverse());

//Original order of the list:
console.log("Original list:" , placesToVisit.reverse());

//Original to Aplabetical ordered list:
console.log("Original to Aplhabetical list:", placesToVisit.sort());

//Original to Reversed Alphabetical list:
console.log("Original to Reversed Alphabetical list:" ,placesToVisit.reverse());