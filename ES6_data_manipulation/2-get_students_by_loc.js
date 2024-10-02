// define function that takes 2 params
// students: an array of student objs
// city: a string representing the city name
function getStudentsByLocation(students, city) {
  // use filter method on students array to create new array
  // of only students that location matches specified city
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;
