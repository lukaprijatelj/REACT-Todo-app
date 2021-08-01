# REACT-Todo-app

// start APP 
1. Open root folder and run 'npm start' which will start node server.
2. Open client folder and run 'npm start' which will compile react and open url.



// install node

// install typescript
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

// install redux
npm install --save redux react-redux
npm install @types/react-redux

// immutability array
const newArray = numbers.filter(n => n != 2);   // for removing element
const newArray = numbers.slice(0, index);   
const newArray = [... numbers];    // for creating new array
const newArray = numbers.map(n => n === 2 ? 20 : n);   // for updating array

// immutability objects
const newObj = { ... oldObj };
const newObj = { ... oldObj, prop1: "test" };
const newObj = { ... oldObj, prop2: { ... oldObj.prop3 } };   // when you need deep cloning

// immer library is better than immutable (for immutability libraries)

// added proxy property to package.json in order for api calls to work

![alt tag](https://raw.githubusercontent.com/lukaprijatelj/REACT-Todo-app/master/Screenshot.jpg)