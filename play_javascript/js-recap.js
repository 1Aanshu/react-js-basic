// VSCode Update
// Browser Extension

console.log("Hello World");

const data = [];
const trigger = true;

const obj = { name: "Aanshu", role: ["admin"] };

const triggerUser = (data, trigger) => {
  if (!trigger) return "No user message";
  data.push(obj);
  const [a] = data;
  const { name } = a;
  return `Welcome ${name}`;
};
const resp = triggerUser(data, trigger);
console.log({ resp });

const items = [{ name: "aanshu" }, { name: "raktim" }, { name: "lakim" }];

const checkData = (arr) => {
  return Array.isArray(arr) && arr.length > 0 ? arr.length : 0;
};

checkData(items);

// Update country

const countries = ["denmark", "chin", "nepal", "finland"];

const checkCountry = (arr, index, newValue) => {
  arr[index] = newValue;
  return arr;
};


//combine two list
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];

// Write a code which gives grades to student according to their scores
/*-80-100; A
-70-89;B 
-60-69;C 
-50-59;D 
-0-49; F */

// Write a function to generate factorial of a number using recursion
