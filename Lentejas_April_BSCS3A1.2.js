// --- Basic Info ---
const schoolName = "Northwest Samar State University";
const yearFounded = 2024;
const maxCapacity = 50;

const subjects = ["CS302", "CS303", "CSElec"];
const grades = [90, 85, 78];

const contact = {
  email: "info@nwssu.edu",
  phone: "09125832605"
};

// --- Classes ---
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getRole() {
    return "person";
  }

  introduce() {
    return `Hi, I'm ${this.name} and I am a ${this.getRole()}.`;
  }
}

class Student extends Person {
  constructor(name, age, gradeLevel) {
    super(name, age);
    this.gradeLevel = gradeLevel;
  }

  getRole() {
    return "student";
  }
}

class Teacher extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  getRole() {
    return "Insturctor";
  }
}

class School {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.members = [];
  }

  addPerson(person) {
    if (this.members.length < this.capacity) {
      this.members.push(person);
    } else {
      console.log("University is at full capacity.");
    }
  }

  listMembers() {
    this.members.forEach(person => console.log(person.introduce()));
  }

  countStudents() {
    return this.members.filter(person => person.getRole() === "student").length;
  }
}

// --- Execution ---
const school = new School(schoolName, maxCapacity);

school.addPerson(new Student("April", 10, 5));
school.addPerson(new Student("Fatima", 11, 5));
school.addPerson(new Teacher("Mr. Ortiz", 35, 2000));

// Output basic school info
if (yearFounded < 2010) {
  console.log(`${schoolName} has been around for a while.`);
}

if (school.members.length > 0) {
  console.log(`${schoolName} currently has ${school.members.length} people.`);
} else {
  console.log("No one has joined the school yet.");
}

// Print introductions & stats
school.listMembers();
console.log(`Number of students: ${school.countStudents()}`);

// Grade check
grades.forEach(grade => {
  const status = grade >= 80 ? "Passed" : "Needs improvement";
  console.log(`Grade ${grade}: ${status}`);
});

console.log(`Subjects offered: ${subjects.join(", ")}`);
console.log(`Contact: ${contact.email}, ${contact.phone}`);