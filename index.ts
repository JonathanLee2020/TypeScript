// basic tyoes
let age: number = 25;
let myArray: Array<string> = ["one", "two", "three"]; // Array of strings
let isAdult: boolean = true;    

let fruits: Array<string> = ["apple", "orange"];
let variables: Array<any> = ["apple", "orange"];

let numArr: number[][] = [[1], [2,3]]

// Tuples
let employee: [number, string] = [1, "jack"];
let employees : [number, string][] = [
    [2, "1"]
]

// objects

type Car = {
    brand: string,
    year: number
}

// let car1 : Car = {
//     brand: "Lexus",
//     year: 2020
// }

interface Car1 {
    brand: string, 
    year: number
}

let newCar : Car1 = {
    brand: "Lexus",
    year: 2020
}
// customy typer

// Union
let x : string  | number = 22;
x = "hello"

type occupation = "employed" | "student"

let jOccupation : occupation = "employed"

// Type assetion and funcitons
 function add(x: any, y: number) {
    return x + y;
 }

 function copyArr <T>(arr: T[]): T[] {
    return [...arr]
 }
// func

