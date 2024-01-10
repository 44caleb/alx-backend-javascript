export default function getStudentIdsSum(studentArray) {
  const idSum = studentArray.reduce((currId, student) => student.id + currId, 0);
  return idSum;
}
