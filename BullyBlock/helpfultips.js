var helpfultips = [
    "Don't react or respond to negative comments." ,
    "Block anyone making negative comments on your account." ,
    "Treat others the way you would want to be treated." ,
    "Report anyone that continues to make negative comments." ,
    "Just be yourself no matter what anyone says.",
    "Never reveal any personal information to anyone online.",
    "The best way to avoid negativity is to simply ignore it."
]

if (bullyblock) {
    switchy.setAttribute('checked', "checked");
} else {
    switchy.removeAttribute('checked');
}

var quote = helpfultips[ Math.floor( Math.random() * 7 ) ];

document.getElementById("helpfultippy").innerHTML = quote;
