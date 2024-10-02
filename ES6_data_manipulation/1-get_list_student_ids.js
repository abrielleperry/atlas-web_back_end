function getListStudentIds(students) { // define function and take students array as argument
  if (!Array.isArray(students)) { // check if students arg is an array
    return []; // if not return an empty array
  }
  return students.map((student) => student.id);
  // use map function to iterate over each student obj in students array
  // for each obj return its value of its id property
  // which returns a new array of only ids of the students
}

export default getListStudentIds;
