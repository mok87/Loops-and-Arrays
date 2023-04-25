/*only Odds*/


const array1 = [2, 4, 6, 8, 11, 20, 15, 22]
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array3 = [70, 42, 55, 81, 21, 91, 34]
const array4 = [2, 4, 6, 8, 10, 11, 12] 

const odds = []
for(let i = 0 ; i <  array1.length; i++){
    console.log(array1[i])
    if(array1[i]%2 ==1 ) {
        odds.push(array1[i])
    }
};
console.log(odds)

const odds2 =[]
for(let i = 0 ; i <  array2.length; i++){
    console.log(array2[i])
    if(array2[i]%2 ==1 ) {
        odds2.push(array2[i])
}
};
console.log(odds2)


const odds3 =[]
for(let i = 0 ; i <  array3.length; i++){
    console.log(array3[i])
    if(array3[i]%2 ==1 ) {
        odds3.push(array3[i])
}
};
console.log(odds3)



const odds4 =[]
for(let i = 0 ; i <  array4.length; i++){
    console.log(array4[i])
    if(array4[i]%2 ==1 ) {
        odds4.push(array4[i])
    }
};
console.log(odds4)

/*only Odds */


/*vowels and consanant*/

//write a function that takes a string as an input- complete 
// create a loop that iterates over the input string - complete
//create a variable with a value of array of vowels - complete 
//create a count variable for vowels -complete 
//create a count variable for consanants -complete 
//check if each character is vowels or a consanant -complete 
//increase count of variables by 1 if vowel -complete 
//increase count of variables by 1 if consanant -complete 
//return string and number of vowels and consonants -complete 
//print return value 

const numberOfVowelsAndConsonants = (str)=>{
    let vowelsArr = ['a','e','i','o','u']
    let vowelCount = 0
    let consanantCount = 0
    for(let i = 0; i< str.length;i++){
       if (vowelsArr.includes(str[i])){
        vowelCount++
       }else{
        consanantCount++
       }
          

    }
    return (str+ has+consanantCount+vowelCount)
    
    
};

const returnString = numberOfVowelsAndConsonants('hello');
console.log(returnString);

/*vowels and consanant*/


// create a function that takes an array an input - complete 
// create a variable called reverseArray with empty array as value - complete 
// iterate over input array backwards - complete 
//for each value in array push to reverseArray - complete 
//return reverseArray
// invoke function

/*Reverse Array*/

const reverseArray = (arr)=> {
    const newArray = [];
    for(let i = arr.lenght-1;i >=0; i--){
        newArray.push(arr[i]);
    }
    for(let i = 0; i <arr.lenght; i++){
        newArray.unshift(arr[i]);
    }
    return arr.reverse();
};

console.log(reverseArray([1,2,3]));


const reverseArray1 = (arr)=> {
    const newArray = [];
    for(let i = arr.lenght-1;i >=0; i--){
        newArray.push(arr[i]);
    }
    for(let i = 0; i <arr.lenght; i++){
        newArray.unshift(arr[i]);
    }
    return arr.reverse();
};

console.log(reverseArray1([1,2,5,7,9,11]));

const reverseArray2 = (arr)=> {
    const newArray = [];
    for(let i = arr.lenght-1;i >=0; i--){
        newArray.push(arr[i]);
    }
    for(let i = 0; i <arr.lenght; i++){
        newArray.unshift(arr[i]);
    }
    return arr.reverse();
};

console.log(reverseArray2([20, 50, 30, 60, 200]));

const reverseArray3 = (arr)=> {
    const newArray = [];
    for(let i = arr.lenght-1;i >=0; i--){
        newArray.push(arr[i]);
    }
    for(let i = 0; i <arr.lenght; i++){
        newArray.unshift(arr[i]);
    }
    return arr.reverse();
};

console.log(reverseArray3([1, -1, 2, -3, 5, -8, 13]));

/*Reverse Array*/

/*FizzBuzz*/

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}
/*FizzBuzz*/