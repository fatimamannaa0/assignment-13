let array = []
array.unshift(55);
array.unshift(13, 18);
array.push(127);

console.log(array[0]);
console.log(array.length);
console.log(typeof array);

console.log("---While Loop---");
let elements = 0;

while(elements < array.length){
    console.log(`${array[elements]}`);
    elements++
}

console.log("---Do-While Loop---")
elements = 0;

do{
    console.log(`${array[elements]}`);
    elements++
}while(elements < array.length);

console.log("---For Loop---");

for(elements = 0; elements < array.length; elements++ ){
     console.log(`${array[elements]}`);
}

console.log("---For of Loop---");

for(const element of array){
    console.log(element);
}

console.log("---Calculating total---");
let total = 0;

for(elements = 0; elements < array.length; elements++ ){
    total += elements;
}

console.log("Total = " + total);

console.log("---Logging all elements that are divided by 3 and 5---");

for(elements = 0; elements < array.length; elements++ ){
    if(array[elements] % 3 === 0 || array[elements] % 5 === 0 ){
        console.log(`${array[elements]}`);
    }
}

console.log("---Skipping all elements that are divided by 5 and 11---");

for(elements = 0; elements < array.length; elements++ ){
    if(array[elements] % 55 === 0){
        continue;
    }
     console.log(`${array[elements]}`);
}

console.log("---Exiting when any element divided by 3---");

for(elements = 0; elements < array.length; elements++ ){
    if(array[elements] % 3 === 0){
        break;
    }
     console.log(`${array[elements]}`);
}

console.log("---Logging all elements using for loop---");

array = array.slice(1)

array = array.slice(0,2)

for(elements = 0; elements < array.length; elements++ ){
     console.log(`${array[elements]}`);
}

loop_1: for (let i = 0; i <= 5; i++) {
    loop_2: for (let j = 0; j <= 5; j++) {
        loop_3: for (let k = 0; k <= 5; k++) {
            if (i == j - 1 && j == k - 1) {
                break loop_1;
            }
            console.log(`i=${i} - j=${j} - k=${k}`);
        }
    }
}