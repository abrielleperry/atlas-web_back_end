function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
// use reduce method on students array to sum up the id value of each student
// callback func tkes 2 params: sum the accmulated value and students the current student obj
// for each student it adds the student ids to the sum
// 0 is initial value of sum
export default getStudentIdsSum;
