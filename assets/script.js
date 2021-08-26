var generateBTN = document.getElementById('generateBTN');


const authors = Object.keys(quotes)



 function firstQuote() {
    var quotes = {
        "- Albert Einstein": '"A clever person solves a problem, A wise person avoids it."' ,
        "- Ralph Johnson": '"Before software can be reusable it first has to be usable"',
        "- Brian Kernighan": 'Dont comment bad code - rewrite it"',
        "- ken Thompson": 'One of my most productive days was throwing away 1000 lines of code.',
        "- Anon": 'Its not a bug, Its an undocumented feature"',
        "- Bill Gates": ' The computer was born to solve problems that did not exist before.',
        "- Mark Zuckerberg": 'People dont care about what you say, they care about what you build."',
        "- Norm Schryer": 'If the code and the comments do not match, possibly both are incorrect.',
    };

    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author]

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}

function generate() {


    var quotes = {
        "- Albert Einstein": '"A clever person solves a problem, A wise person avoids it."' ,
        "- Ralph Johnson": '"Before software can be reusable it first has to be usable"',
        "- Brian Kernighan": 'Dont comment bad code - rewrite it"',
        "- ken Thompson": 'One of my most productive days was throwing away 1000 lines of code.',
        "- Anon": 'Its not a bug, Its an undocumented feature"',
        "- Bill Gates": ' The computer was born to solve problems that did not exist before.',
        "- Mark Zuckerberg": 'People dont care about what you say, they care about what you build."',
        "- Norm Schryer": 'If the code and the comments do not match, possibly both are incorrect.',
    };

    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author]

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
    console.log(authors);
}