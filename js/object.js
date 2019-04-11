console.log("object.js");


// syntax for an object
const cupcake = {
    color : ["pink", "white", "brown"],
    flavor : "chocolate",
    size : "mini",
    calories : 0,
    icing : true,
    eatCupcake: () => {
        console.log("yum");
    }
}


console.log("cupcake", cupcake);

// dot notation allows you to access all of the properties of an object.
console.log(cupcake.color);

for (let i = 0; i < cupcake.color.length; i++) {
    console.log("cupcake colors", cupcake.color[i]);
}

cupcake.color.forEach(item => {
    console.log("what is color", item);
    console.log(`the color again is ${item}`);
})

//  ^^^ if you use the second version, use back tics to define the string and ${} to define the item that you want to be evaluated and defined.



const car = {
    make : "ford",
    model : "Mustang",
    year : 2015,
    color : "red",
}
 console.log("car", car);

 const animals = ["kippers", "jack", "gypsy", "angus", "seymour boots", "sharky"];
 console.log("you are AWESOME", animals);

 const abby = {
     member : "daughter",
     age : 19,
     cool : true,
 }
 const becky = {
    member : "mother",
    age : 50,
    cool : true,
 }
 const jeff = {
    member : "father",
    age : 11,
    cool : true,
}
 const tom = {
     member : "daughter",
     age : 69,
     cool : false,
 }

 const familyMembers = [abby, becky, tom, jeff];
 console.log("this my fam", familyMembers);


 const myFamily = [
     {
         name: "John",
         age: 5,
     },
     {
        name: "Bell",
        age: 10,
     }
     {
         name: "Emily",
         age: 22
     }
 ]

 console.log(myFamily);




