var fs = require('fs');

let obj;

try {
    var data = fs.readFileSync('input.json', 'utf8');
    obj = JSON.parse(data);
} catch(e) {
    console.log('Error:', e.stack);
}

let analyzeAndSortObject = (o) => {
    let keys = Object.keys(o);
    keys.sort();
    let ret = {};
    keys.forEach((key) => {
        if(typeof o[key] === "object") {
            o[key] = {...analyzeAndSortObject(o[key])};
        }

        ret[key] = o[key];
    });

    return ret;
}

obj = {...analyzeAndSortObject(obj)};

console.log(JSON.stringify(obj))
