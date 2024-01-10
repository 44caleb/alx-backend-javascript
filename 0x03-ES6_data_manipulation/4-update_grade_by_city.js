export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  const studentFilter = studentArray.filter((student) => student.location === city);
  const gradedStudents = studentFilter.map((student) => {
    student.grade = 'N/A';
    for (const grades of newGrades) {
      if (student.id === grades.studentId) {
        student.grade = grades.grade;
      }
    }
    return student;
  });

  return gradedStudents;
}
