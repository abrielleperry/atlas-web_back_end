function getListStudents() {
  const students = [ // define array of student objects
    { id: 1, firstname: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstname: 'James', location: 'Columbia' },
    { id: 5, firstname: 'Serena', location: 'San Francisco' },
  ];
  return students; // return array of student objects
}

export default getListStudents;
