export default function (expirationTime: number):string {
  const date = new Date() as Date
  date.setTime(date.getTime() + (expirationTime * 1000))
  return date.toUTCString()
}