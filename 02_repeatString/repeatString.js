const repeatString = function(string, nRepeats) {
    if (nRepeats < 0 ){
        return "ERROR"
    }
    let response = "";
    for (let i = 0; i < nRepeats; i++) {
        response += string
    }
    return response

};

// Do not edit below this line
module.exports = repeatString;
