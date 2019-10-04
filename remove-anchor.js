const removeUrlAnchor = str => {
    let pos = str.indexOf("#");
    if (pos === -1) {
        return str;
    } else {
        let result = str.slice(0, pos);
        return result;
    }
}