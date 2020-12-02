// Dummy data to mock API fetch
const employees = [{
  id: 1,
  name: "Michael Scott",
  role: "Regional Manager",
  department: "Management"
},
{
  id: 2,
  name: "Karen Filippelli",
  role: "Regional Manager",
  department: "Management"
},
{
  id: 3,
  name: "Pam Beesly",
  role: "Receptionist",
  department: "Sales"
},
{
  id: 4,
  name: "Jim Halpert",
  role: "Sales Representative",
  department: "Sales"
},
{
  id: 5,
  name: "Dwight Schrute",
  role: "Sales Representative",
  department: "Sales"
}];

// This code is meant to serve as a mock fetch from an API.
export const getAllEmployees = new Promise(function(resolve) {
  setTimeout(() => {
    resolve(employees);
  }, 1000);
});
