// #61
// Create an object factory for a student object. The student object should have the following methods 
// and it should produce the expected results demonstrated in the sample code:

// info: Logs the name and year of the student.
// addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
// listCourses: Returns a list of the courses student has enrolled in.
// addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
// updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
// viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

// class Student {
//   constructor (name, year) {
//     this.name = name; 
//     this.year = year;
//     this.courses = []
//   }
//   info(){
//       console.log(`${this.name} is a ${this.year} year student`)
//   }
//   listCourses(){
//       //this.courses.forEach(course => console.log)
//       this.courses.forEach(courseObj => {
//         console.log(`${courseObj}`)
//       })
//   }
//   addCourse(course){
//     this.courses.push(course)
//   }
//   addNote(courseNumber, description){
//     // iterate through the course list, find the right object 
//     // whose "code === coursenUm"
//     this.courses.forEach(obj => {
//       if (obj['code'] === courseNumber) {
//         obj['note'] ? obj['note'] += `; ${description}` : obj['note'] = description
//       }
//     })
//   }
//   addGrade(courseName, courseGrade) {
//     this.courses.forEach(courseObj => {
//       if (courseObj['name'] === courseName) {
//         courseObj['grade'] = courseGrade
//       }
//     })
//     }
  
//   updateNote(courseNumber, descript) {
//     this.courses.forEach(course => {
//       if (course['code'] === courseNumber) {
//         course['note'] = descript
//       }
//     })
//   }
// }

// console.clear()
// let foo = createStudent('Foo', '1st');
// //foo.info();
// //foo.listCourses();
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// //foo.listCourses();
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// //foo.viewNotes();
// foo.addNote(102, 'Difficult subject');
// //foo.viewNotes();
// //foo.updateNote(101, 'Fun course');
// foo.listCourses()

// #62
// Create a school object. The school object uses the student object from the previous exercise. 
// It has methods that use and update information about the student. Be sure to check out the previous exercise 
// for the other arguments that might be needed by the school object. Implement the following methods for the school object:
// 
// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.


// class Student {
//   constructor (name, year) {
//     this.name = name; 
//     this.year = year;
//     this.courses = []
//     this.GPA = 0
//   }
//   info(){
//       console.log(`${this.name} is a ${this.year} year student`)
//   }
//   listCourses(){
//       //this.courses.forEach(course => console.log)
//       this.courses.forEach(courseObj => {
//         console.log(`${courseObj}`)
//       })
//   }
//   addCourse(courseName, courseNumber){
//     let obj = {}
//     obj['name'] = courseName;
//     obj['code'] = courseNumber
//     this.courses.push(obj)
//   }
//   addNote(courseNumber, description){
//     // iterate through the course list, find the right object 
//     // whose "code === coursenUm"
//     this.courses.forEach(obj => {
//       if (obj['code'] === courseNumber) {
//         obj['note'] ? obj['note'] += `; ${description}` : obj['note'] = description
//       }
//     })
//   }
//   addGrade(courseName, courseGrade) {
//     this.courses.forEach(courseObj => {
//       console.log(courseObj)
//       if (courseObj['name'] === courseName) {
//         courseObj['grade'] = courseGrade
//       }
//     })
//     }
  
//   updateNote(courseNumber, descript) {
//     this.courses.forEach(course => {
//       if (course['code'] === courseNumber) {
//         course['note'] = descript
//       }
//     })
//   }
//   calculateGPA() {
//     let score = 0
//     let classCount = 0
//     this.courses.forEach(courseObj => {
//       score += courseObj['grade']
//       classCount += 1
//     })
//     return score/classCount
//   }
// }

// class School {
//   constructor() {
//     this.students = []
//     this.classes = []
//   }
//   viewStudentCourses(studentObject) {
//     return studentObject.courses
//   }
//   viewClasses(){
//     console.log(this.classes)
//   }
//   addClass(className) {
//     if (this.classes[className]) {
//       console.log("Class already exists")
//     } else {
//       this.classes[className] = []
//     }
//   }
//   enrollStudent(className, student) {
//     // iterates through the student object
//     // extracts the student's name 
//     // extracts the student's grade 
//     // packages info above as object and adds it to the className list 
//     let studentObjectOmittingCoursesProperty = {}
//     console.log(student)
//     for (let prop in student) {
//       if (prop === 'name') {
//         studentObjectOmittingCoursesProperty['name'] = student[prop];
//       }
//       if (prop === 'courses') {
//         student[prop].forEach(courseObject => {
//           for (prop in courseObject) {
//             if (courseObject[prop] === className) {
//               studentObjectOmittingCoursesProperty['grade'] = courseObject['grade'] || "In Progress"
//             }
//           }
//         })
//       } 
//     }
//     this.classes[className].push(studentObjectOmittingCoursesProperty)
//   }
//   getReportCard(student) {
//     student.courses.forEach(courseObj => {
//       console.log(`${courseObj['name']}: ${courseObj['grade'] || "In Progress"}`)
//     })
//   }
//   courseReport(courseName) {
//     // create course report 
//   }
//   toString(courseName) {
//     return this.classes[courseName]
//   }
//   viewClassRoster(courseName) {
//     console.log(`${courseName}:`)
//     console.log(this.toString(courseName))
//   }
//   viewStudentCourseInfo(student) {
//     console.log(student)
//   }
// }

// let Casey = new Student("Casey Rudick", "2nd")
// let Puri = new Student("Puri Rudick", '1st')
// let LaunchSchool = new School()
// Casey.addCourse("Math", 101)
// Casey.addGrade("Math", 94)
// Casey.addCourse("JavaScript", 102)
// Casey.addGrade("JavaScript", 95)
// Casey.addCourse("OOP", 120)
// Casey.addNote(101, "Good class")
// Casey.addNote(102, "Difficult")
// Casey.addNote(102, "Excited for OOP")
// Puri.addCourse("Multivariable Calculus", 110)
// Puri.addCourse("Machine Learning", 120)
// Puri.addGrade("Machine Learning", 98)
// let Ryry = new Student("Rylee Rudick", "0")
// Ryry.addCourse("Machine Learning", 120)
// Ryry.addGrade("Machine Learning", -5)
// //Puri.addGrade("Multivariable Calculus", 99)
// // LaunchSchool.enrollStudent(Casey, "Physics")
// // LaunchSchool.enrollStudent(Casey, "Chemistry")

// //LaunchSchool.viewClasses()
// //console.log(LaunchSchool.viewStudentCourses(Casey))
// //Casey.addGrade("Chemistry",93)
// //console.log(`Student courses in the school${LaunchSchool.viewStudentCourses(Casey)}`)
// console.clear()
// console.log(Puri.calculateGPA())
// LaunchSchool.getReportCard(Puri)

// //console.log(Array.isArray(LaunchSchool.classes))
// //LaunchSchool.viewStudentCourses(Casey)
// LaunchSchool.addClass("Machine Learning")
// LaunchSchool.addClass("Multivariable Calculus")
// LaunchSchool.addClass("JavaScript")
// LaunchSchool.enrollStudent("Machine Learning", Puri)
// LaunchSchool.enrollStudent("Machine Learning", Ryry)
// LaunchSchool.enrollStudent("Multivariable Calculus", Puri)
// console.clear()
// LaunchSchool.viewClassRoster("Machine Learning")
// LaunchSchool.viewClassRoster("OOP")

// //LaunchSchool.viewClassRoster("Multivariable Calculus")  




