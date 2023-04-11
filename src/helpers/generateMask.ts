export default function (length:number):string[] {
  const mask = [] as string[]
  const amountOfThousands = 1 + length * 3
  let formatedItem = '' as string
  for (let i = 0 as number; i < amountOfThousands; i++) {
    if (i % 3 == 0 && i > 2) {
      formatedItem = ' ' + formatedItem
    }
    mask.push(formatedItem = '#' + formatedItem)
  }
  return mask
}