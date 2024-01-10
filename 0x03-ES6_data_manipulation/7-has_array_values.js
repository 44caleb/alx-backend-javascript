export default function hasValuesFromArray(setObj, arrayObj) {
  return arrayObj.every((element) => setObj.has(element));
}
