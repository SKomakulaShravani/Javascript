
const employees=[
    {name:'shravani',id:1,age:30,salary:10000},
    {name:'swarna',id:2,age:33,salary:15000},
    {name:'sujatha',id:3,age:35,salary:25000},
    {name:'rajkumar',id:4,age:38,salary:16000}
];
let totalSalary=0;
//for loop
for(const employee of employees){
    totalSalary+=employee.salary
}
console.log(totalSalary); 
//foreach loop
employees.forEach(employee=>{totalSalary+=employee.salary});
console.log(totalSalary); 
//reducer
const totaESalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log(totaESalary);
//display age>33
const employeesGreaterThan33 = employees.filter(employee => employee.age > 33);

console.log('Employees older than 33:', employeesGreaterThan33);

//forloop

let eGreaterThan33 = [];
for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > 35) {
        eGreaterThan33.push(employees[i]);
    }
}
console.log("above 35 age" , eGreaterThan33);
