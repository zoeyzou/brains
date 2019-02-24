export function getValueGroupsFromArrayOfObject(
  array: any[]
): Array<Array<string | number>> {
  return array.map(item => Object.values(item));
}
