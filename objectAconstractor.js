// const person = {
//     name :{
//         firstName: "lavan",
//         lastName: "muhamad",
//     },

//     age: 23,
//      country: "Iraq",
//    bio(){
//      console.log(`${this.name.firstName} ${this.name.lastName} is ${this.age}years old. `);
//    },
// };

// // let hemin= new person("hemin", "ali", 28);
// // hemin.bio();

//  person.bio();

// function person (firstName,lastName){
//     (this.firstName = firstName, this.lastName= lastName)
// }
// const lava =new person ("hemn", "hhhh");
// const lavann =new person ("uhiu ");
// // person.lava();
//  console.log(lava)
// class Person{
//     name;
//     constructor(name1){
//         this.name=name1;

//     }

//     introducaSelf(){
//         console.log(`hello ${this.name}`);
//     }
// }
// const person1 = new Person("lavin");
// person1.introducaSelf();

// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,

//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//       }
//   };
//  person.introduceSelf();

// const person1 = {
//   name: "Chris",
//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}.`);
//   },
// };

// const person2 = {
//   name: "Deepti",
//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}.`);
//   },
// };
// person1.introduceSelf();

// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function () {
//       console.log(`Hi! I'm ${this.name}.`);
//     };
//     return obj;
//   }
//   const salva = createPerson("Salva");
// salva.name;
// salva.introduceSelf();
//   function logProperty(propertyName, propertyAge ) {
//     console.log(person[propertyName], person[propertyAge]);
//   }
//   person["eyes"] = "hazel";
// person.farewell = function () {
//   console.log("Bye everybody!");
// };

// person.farewell();
// person["eyes"];
//  logProperty("age", "name" );

//  const person1 = {
//     name: "Chris",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };

//   const person2 = {
//     name: "Deepti",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };
//   person2["introduceSelf()"];

// bio : function(){
//     console.log(`${this.name[1]} ${this.age} hello`)
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
// },
// introduceSelf: function(){
//     console.log(`${this.name[1]}`)
// }
// introduceSelf: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },

//    person2.bio();
//   console.log( person2.name["first"]);

// const fetchPromise = fetch("https://rickandmortyapi.com/api/character");

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const newArray = data.results.map(function(dat){
//         let info ={
//             ...dat,

//         };
//         return info;

//     });

//             console.log(data.info);
//   });

async function fetchProducts() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => {
  const card = document.querySelector(".card" );
  

  data.results.forEach((item) => {
   

    if (item.episode.length > 25) {
      item.caracter = "main";
    
     }
      
     else {
      item.caracter = "side";
    }
    // console.log(item);

    if(item.status=="Alive"){
      // console.log(item);
      const element = document.createElement("div");
      element.classList.add("item");
    
    
    element.textContent="Caracter:"+item.caracter+","+"id:"+ item.id+" "+" name: "+item.name+" status: "+item.status+" species:"+item.species+" type:"+item.type;
      card.appendChild(element);

    }

    
  });
  // console.log(data);
  
  
});




// const newArray = data.results.map(function(dat){
//     let info ={
//         ...dat,

//     };
//     return info;

// });
// const person ={
//   name:["hemin","sabah"],
//   age:22,
//   bio:function(){
//     console.log(` ${this.name[0]} ${this.name[1]} is ${this.age}`);

//   },
//   introduceSelf:function(){
//     console.log(`Hi I am${this.name[0]}`);

//   }
  
// }
// function logProperty(propertyName) {
//   console.log(person[propertyName]);
// }

// logProperty("name");
// // ["Bob", "Smith"]
// logProperty("age");
// // 32
