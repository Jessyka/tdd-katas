const greet = name => {
    name = name.trim();
    return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}`
}

module.exports = {
    greet
}