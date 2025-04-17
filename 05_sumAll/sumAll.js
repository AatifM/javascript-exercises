const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
        return "ERROR";
    }

    if (max < min) {
        [min, max] = [max, min];
    }

    let finalSum = 0;

    for (let i = min; i <= max; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
