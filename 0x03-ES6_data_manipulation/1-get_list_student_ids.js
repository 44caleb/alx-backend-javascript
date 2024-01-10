export default function getListStudentsIds(studentArray) {
  if (Array.isArray(studentArray) !== true) {
    return [];
  }

  const ids = studentArray.map((students) => students.id);
  return ids;
}
