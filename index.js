function findMatching(d, found) {
    return d.filter((matchingDriver) => matchingDriver.toUpperCase().includes(found.toUpperCase()));
}


function fuzzyMatch(d, firstLetter) {
    return d.filter((matchingDriver) => matchingDriver.indexOf(firstLetter) === 0);
}


function matchName(d, foundName) {
    return d.filter((dirt) => dirt.name === foundName);
}