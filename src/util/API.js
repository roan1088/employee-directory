// Dummy data to mock API fetch
employees = [{
  name: "Michael Scott",
  role: "Regional Manager",
  department: "Management"
},
{
  name: "Karen Filippelli",
  role: "Regional Manager",
  department: "Management"
},
{
  name: "Pam Beesly",
  role: "Receptionist",
  department: "Sales"
},
{
  name: "Jim Halpert",
  role: "Sales Representative",
  department: "Sales"
},
{
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
