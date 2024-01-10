export default function getStudentsByLocation(studentArray, city) {
  const newArray = studentArray.filter((student) => student.location === city);
  return newArray;
}
