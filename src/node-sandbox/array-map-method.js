const existingArray = ["str1", "str2", "str3"];

const newArray = existingArray.map(value => value + "!");

console.log(newArray);

const secondNewArray = existingArray.map((value, index) => {
    console.log(index)
    return index + ": " + value + "!";
})

console.log(secondNewArray);
