module.exports = function reverse(n) {
    const str = `${Math.abs(n)}`;

    let newStr = "";

    for (const char of str) {
        newStr = char + newStr;
    }

    return Number(newStr);
};
