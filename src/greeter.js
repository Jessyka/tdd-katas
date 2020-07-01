const greet = name => {
    name = name.trim();
    
    return `${getMessage()} ${name.charAt(0).toUpperCase() + name.slice(1)}`
}

const getMessage = () => {
    var currentdate = new Date();
    if(currentdate.getHours() >= 6 && currentdate.getHours() <= 12)
        return 'Good morning'

    if(currentdate.getHours() >= 18 && currentdate.getHours() <= 22)
        return 'Good evening'
    
    return 'Hello'
}

module.exports = {
    greet
}