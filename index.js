// //var
// var num = 10;
// {
//     num = 20;
// }
// console.log("var",num)

// // let
// let num1 = 10

// {
//     num1 = 20
// }
// console.log("let",num1)

// //const
// const num2 = 10

// {
//     num2 = "helo"
// }
// console.log("const",num2)


// var num = 10
// {
//     var num = 20
//     num = 30
//     console.log(num)
// }
// console.log(num)

// let num1 = 10
// {
//     let num1 = 20
//     num1 = 30
//     console.log(num1)
// }
// console.log(num1)

// const num2 = 10
// {
//     const num2 = 20
//     console.log(num2)
// }
// console.log(num2);

//reassign
// var num = 10
// {
//     var num = 20
//     num = 30
//     console.log(num)
// }
// console.log(num)

// let num1 = 10
// {
//     let num1 = 20
//     num1 = 30
//     console.log(num1)
// }
// console.log(num1)

// const num2 = 10
// {
//     const num2 = 20
//     console.log(num2)
// }
// console.log(num2);


// let num1 = 5;
// let num2 = 10;
// let sum = --num1 + ++num2 + num1-- + num2++
// console.log(sum)
// console.log(num1)
// console.log(num2);

// let a = 10
// let b = 20;
// let c = 30
// let result = (a < b && a < c) ? "a" : (b < c) ? "b" : "c";
// console.log(result);

// let num1 = {"key":"val"}
// let arr = [1,2,3]

// let result = ( num1 &&  num2) ? "yes" : "no";
// console.log(result);


// function add() {
//     console.log("hello")
// }

// add();

// function add(a) { //para 
//     console.log(a) 
// }
// add(10); //arg
// add(); //arg


// function add(...a) { //para 
//     console.log(a) 
// }
// add(10,{"key":"val"},30); //arg

// function add(b,...a){
//     console.log(b);
// }

// add("10","20",{"key":"val"})

// function add(a){
//     return a + a;
// }

// const result = add("2");
// console.log(result)



// const result =  (a,b)=> {
//     return b;
// }
// console.log(result(10,20));


// (()=>{
//     console.log("hello");
// })()


// let str = "hello is my name";

// console.log(str[3])
// console.log(str.slice(0,6));
// console.log(str.length);

// let num = "120"
// console.log(typeof parseInt(num));

// const obj = {
//     "key": "val",
//     "first name": "raj",
//     age: function () {
//         return "age"
//     }
// }
// console.log(obj["key"])
// console.log(obj["first name"])
// console.log(obj.age());

const arr = ["hello", "one", { "firstname": "helo", "secondName": "surname" }, [120, 140, [3, 2, 1]]]

// console.log(arr[2]["firstname"])
//console.log(arr[3][2])
console.log(arr[3][2][2])

