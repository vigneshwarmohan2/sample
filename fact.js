//factory function.
function developer(name) {
  this.name = name;
  this.type = "developer";
}
function tester(name) {
  this.name = name;
  this.type = "tester";
}
function Employee() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new developer(name);
        break;
      case 2:
        return new tester(name);
        break;
    }
  };
}
function say() {
  console.log("Hi my name is", this.name, "and Iam a", this.type);
}
let employee = new Employee();
let employees = [];
employees.push(employee.create("Sreejith", 1));
employees.push(employee.create("Arun", 2));
employees.push(employee.create("Venkat", 1));
employees.push(employee.create("John", 2));
employees.forEach((emp) => {
  say.call(emp);
});
