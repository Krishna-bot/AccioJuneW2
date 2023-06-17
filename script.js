/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((e) => {
    if(e.profession === "developer"){
      console.log(e);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((e) =>{
    if(e.profession === "developer"){
      console.log(e);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let uId = arr.length;
  let newarr = {id: uId +1 , name: "Krishna", age: "27", profession: "senior developer" }
  arr.push(newarr);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((e) =>{
    if(e.profession !== "admin"){
      console.log(e);
    }
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: "Shivam", age: "25", profession: "developer" },
    { id: 5, name: "Rohit", age: "20", profession: "developer" },
    { id: 6, name: "karen", age: "22", profession: "Intern" },
  ];
  let finalArr = arr.concat(arr2);
  console.log(finalArr);
}
