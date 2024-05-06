function getListStudents() {
  const students = [ // define array of student objects
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return students; // return array of student objects
}

export default getListStudents;
