const greet = name => `${getMessage()} ${getName(name)}`;

const getName = name => name.trim().charAt(0).toUpperCase() + name.trim().slice(1)

const getMessage = () => {
    const currentdate = new Date();
    const currentHour = currentdate.getHours();

    if(currentHour >= 6 &&  currentHour <= 12)
        return 'Good morning';

    if(currentHour >= 18 && currentHour <= 22)
        return 'Good evening';
    
    if(currentHour >= 22 || currentHour < 6)
        return 'Good night';
    
    return 'Hello'
}

module.exports = {
    greet
}