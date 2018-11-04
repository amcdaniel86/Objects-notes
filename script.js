// let olympicRecords = {
//   athletics100Men: "Justin Gatlin",
//   athleticsLongJumpMen: "Mike Powel",
// };

// olympicRecords.swimming200Men = "Michael Phelps"
// olympicRecords["athleticsLongJumpMen"]


// olympicRecords["swimming400Women"] = "Katie Ledecky";

  
//   olympicRecords.athletics100Men = "Usain Bolt";
  
// delete olympicRecords.swimming200Men;


// console.log(olympicRecords);
// Object.keys(olympicRecords);


// let user = {
//   name: "Alex", id: 8, list:[book1, book2]
// };

// let book1 = { title: "Catcher in the Rye", author: "JD Salinger", isbn: "03167694587", category: "classic literature"
// };

// let book2 = { title: "to kill a mockingbird", author: "harper lee", isbn: "0446310786", category: "classic literature"
// };

// let library = [];

// let students = [
//   "bob",
//   "susy",
//   "ted",
//   "sarah",
//   "bill"
// ]

// let bob = { name: "bob", age: 17 };
// let susy = { name: "susy", age: 18 };
// let ted = { name: "ted", age: 18 };
// let sarah = { name: "sarah", age: 20 };
// let bill = { name: "bill", age: 19 };

// console.log(students[0]);

// console.log(bob.name);
// console.log(susy.age);

// students = [ {name: "bob", age: 17 },
//             {name: "susy", age: 18 },
//             {name: "ted", age: 18  },
//             {name: "sarah", age: 20},
//             {name: "bill", age: 19}
// ]

// console.log(students[3].name);

// students.push({ name: "steve", age:52});
// let mary = {name: "mary", age:22 };
// students.push(mary);

// console.log([students]);
// console.log(students[0].name);
// console.log(students[3].age);

// let twoD = [
//   ["bob", "susy", "ted"],
//   ["lilly", "sarah", "bill"],
//   ["thomas", "barry", "alex"] ]
// console.log(twoD[1]);
// console.log(twoD[1][0]);
// console.log(twoD[0][0]);
// console.log(twoD[0][3]);
// console.log(twoD[3][0]);

let classes = [

  [
    {name: 'tomas', lname: 'Bechtelar', age:22 },
    {name: 'nico', lname: 'schamberger', age:26},
    {name: 'ashleigh', lname: 'kutch', age: 29},
    {name: 'lulu', lname: 'considine', age: 20},
    {name: 'garland', lname: 'waelchi', age:21}
  ],
  [
    {name: 'charlie', lname: 'rolfson', age:23},
    {name: 'austin', lname: 'schowalter', age:26},
    {name: 'emie', lname: 'franecki', age:29},
    {name: 'okey', lname: 'runte', age: 18},
    {name: 'jameson', lname: 'jakubowski', age:22}
  ],
  [
    {name: 'antwan', lname: 'marquardt', age:22},
    {name: 'eugenia', lname: 'nienow', age: 23},
    {name: 'keely', lname: 'hagenes', age:29},
    {name: 'jazmin', lname: 'aufderhar', age: 29},
    {name: 'stanley', lname: 'hand', age: 22}
  ],
  [
    {name: 'vincent', lname: 'langworth', age: 20},
    {name: 'mervin', lname: 'blick', age: 28},
    {name: 'damien', lname: 'rohan', age: 28},
    {name: 'fabian', lname: 'kautzer', age: 22},
    {name: 'liliana', lname: 'lesch', age: 26}
  ],
  [
    {name: 'antonette', lname: 'stokes', age: 25},
    {name: 'alexandrine', lname: 'dubuque', age: 22},
    {name: 'braeden', lname: 'walker', age: 26},
    {name: 'derick', lname: 'weber', age: 22},
    {name: 'robert', lname: 'beatty', age: 30}
  ]
];
console.log(classes[2][2].age);

console.log(classes[4][0].name);
console.log(classes[1][3].age);
console.log(classes[4][4].lname);

let classRoom = {
  teacher: {
    name: 'greg',
    lname: 'dach',
    age:38,
    address: {
      street: '3085 kelton knolls',
      city: 'aldaside',
      state: 'maryland'
    }
  }
};
console.log(classRoom.teacher.address.city);
console.log(classRoom.teacher.age);

let classRoom2 = {
  teacher: {name: 'marcelino', lname: 'padberg', age:25},
  students: [
    {name:'aliyah', lname: 'schulist', age:18},
    {name:'cleveland', lname: 'towne', age: 28},
    {name: 'jan', lname: 'quitzon', age:18},
    {name: 'alaina', lname: 'runolfsdottir', age:18},
    {name: 'gerhard', lname: 'bergstrom', age:23}
  ]
};
console.log(classRoom2.students[2].name);
console.log(classRoom2.teacher.age);

var schoolSystem = {
  schools: [
    {
      name: "Fake School 1",
      classRooms: [
        {
          teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
          students: [
              { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
              { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
              { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
              { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
              { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
            ]
        },
        {
          teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
          students: [
            { firstName: 'Manley', lastName: 'Doyle', age: 18 },
            { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
            { firstName: 'Sid', lastName: 'Rohan', age: 30 },
            { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
            { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
          ]
        }
      ]
     },
     {
      name: "Fake School 2",
      classRooms: [
        {
          teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
          students: [
            { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
            { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
            { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
            { firstName: 'Rickie', lastName: 'White', age: 22 },
            { firstName: 'Rose', lastName: 'Collins', age: 30 }
          ]
        },
        { teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
        students: [
          { firstName: 'Melany', lastName: 'Welch', age: 25 },
          { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
          { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
          { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
          { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
         ]
       }
     ]
 },
 {
    name: "Fake School 3",
    classRooms: [
      {
        teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
        students: [
          { firstName: 'Christop', lastName: 'Hahn', age: 26 },
          { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
          { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
          { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
          { firstName: 'Maudie', lastName: 'Haley', age: 30 }
        ]
      },
      {  teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
      students: [
        { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
        { firstName: 'Lois', lastName: 'Kulas', age: 28 },
        { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
        { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
        { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
      ]
    }
  ]
}
]
};
console.log(schoolSystem.schools[1].name);
console.log(schoolSystem.schools[1]);
console.log(schoolSystem.schools[1].classRooms[0]);
console.log(schoolSystem.schools[1].classRooms[0].students[1]);
console.log(schoolSystem.schools[1].classRooms[0].students[1].firstName)

schoolSystem.push[1] = "Lucille D. Lozano";