let user = {
    height : 160,
    name: 'Sarah',
    new: '12345',
    test: '123456',
    surname: 'Miller',
    breathe: function() {
        console.log('breathing');
    }
};
console.log(user);
console.log(user.name);

//1
console.log("TASK 1: ")
function getValue(object, key) {
    return object[key];
}
console.log(getValue(user, 'name'));

//2
function renameKey(object, key) {
    return object[key] = 'Katy';
}
console.log(renameKey(user, 'name'));

//3
function valueIsFunction(object, key) {
    return (typeof object[key] === 'function');
}
console.log(valueIsFunction(user, 'breathe'));

//4
function makeNewObjectWithStringsOf5Chars(object) {
    let newObject = {};
    for(key in object) {
        if(typeof object[key] === 'string' && object[key].length == 5) {
            newObject[key] = object[key];
        }
    }
    return newObject;
}
console.log(makeNewObjectWithStringsOf5Chars(user));

//5
function makeNewObjectWithNumber(object) {
    let newObject = {};
    for(key in object) {
        if(typeof object[key] === 'number' 
        && +object[key] < 180
        && +object[key] > 150) {
            newObject[key] = object[key];
        }
    }
    return newObject;   
}
console.log(makeNewObjectWithNumber(user));

//6
function numberOfCharacters(object, key) {
    let index = 0;
    let count = 0;
    while (index <= object[key].length -1) {
        count++;
        index++;
    }
    return count;
}
console.log(numberOfCharacters(user, 'surname'));

//7
function makeNewObject(object, keys) {
    let newObject = {};
    for(key in object) {
        if(!keys.includes(key)) {
            newObject[key] = object[key];
        }
    }
    return newObject;
}
console.log(makeNewObject(user, ['test', 'new', 'breathe']));