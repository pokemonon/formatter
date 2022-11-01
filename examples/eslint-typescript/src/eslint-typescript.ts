export function findIndexOf(arr: any[], value): number
export function findIndexOf(arr: any[], key, value): number
export function findIndexOf(arr: any[], ...args: any[]) {
  if (args.length === 2) {
    const [key, value] = args
    return arr.findIndex(i => i && i[key] === value)
  }
  return arr.findIndex(i => i === args[0])
}
