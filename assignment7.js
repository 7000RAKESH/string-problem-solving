// 1.Reverse a String: Input: 'hello' | Output: 'olleh'.

// let input = "rakesh";
// let rev = "";
// for (let i = input.length - 1; i >= 0; i--) {
//   rev += input[i];
// }
// console.log(rev);

// 2 .Check Palindrome: Input: 'radar' | Output: True

// let input = "radar";
// let rev = "";
// for (let i = input.length - 1; i >= 0; i--) {
//   rev += input[i];
// }
// if (input === rev) {
//   console.log(true);
// } else {
//   console.log(false);
//

// 3.Find Length: Input: 'hello' | Output: 5 .

// let input = "rakesh";
// let count = 0;
// for (let i = 0; i < input.length; i++) {
//   count++;
// }
// console.log(count);

// 4 Count Vowels and Consonants: Input: 'hello' | Output: Vowels: 2, Consonants: 3 .

// let input = "remo mama".trim();
// let result = "";
// let vowels = ["a", "e", "i", "o", "u"];
// let vowelCount = 0;
// let consonantsCount = 0;
// for (let i = 0; i < input.length; i++) {
//   if (input[i] !== " ") {
//     result += input[i];
//   }
//   for (let j = 0; j < vowels.length; j++) {
//     if (input[i].toLocaleLowerCase() == vowels[j]) {
//       vowelCount++;
//     } else {
//       consonantsCount = result.length - vowelCount;
//     }
//   }
// }
// console.log(vowelCount);
// console.log(consonantsCount);
// console.log(result);

// 5 .Change Case: Input: 'Hello' | Output: 'hELLO' .

// let input = "rakesh";
// let result = input[0].toLocaleLowerCase() + input.slice(1).toUpperCase();
// console.log(result);

// 6.Remove White Spaces: Input: 'hello world' | Output: 'helloworld'

// let result = "";
// function whiteSpace(input) {
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] !== " ") {
//       result += input[i];
//     }
//   }
//   return result.toUpperCase();
// }
// console.log(whiteSpace("hello world"));

// 7.Concatenate Strings: Input: 'hello', 'world' | Output: 'helloworld'.
// let result = "";
// function concat(input1, input2) {
//   result = input1 + input2;
//   return result;
// }
// console.log(concat("salaar", "devaratha"));

// 8.Compare Two Strings: Input: 'abc', 'abc' | Output: True .

// function compare(input1, input2) {
//   if (input1 === input2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// compare("abc", "abcd");

// 9.Repeat a String: Input: 'abc', 3 | Output: 'abcabcabc' .
// function repeat(input) {
//   let result = "";
//   for (let i = 0; i < 3; i++) {
//     result += input;
//   }
//   return result;
// }
// console.log(repeat("abc"));

// 10. Replace a Character: Input: 'hello', 'l', 'z' | Output: 'hezzo'.

// let input = "hello";
// let result = "";
// for (let i = 0; i < input.length; i++) {
//   if (input[i] == "l") {
//     result += "z";
//   } else {
//     result += input[i];
//   }
// }

// console.log(result);

// let str = "rakesh";
// for (char in str) {
//   console.log(str[char]);
// }
