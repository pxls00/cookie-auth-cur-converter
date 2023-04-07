import { AUTH_TOKEN_EXPIRATION_TIME } from '@/consts/auth'
// import { UnAuthorizedError } from '@/helpers/errorClasses'
import expireTimeGenerator from '@/helpers/expireTimeGenerator'
import type ErrorItem from '@/interfaces/error'
import type RequestBody from '@/interfaces/auth/login-body'

export default {
  set (name: string, value: string | Partial<RequestBody>, expirationTime: number = AUTH_TOKEN_EXPIRATION_TIME) {
    const expirationDateTime = expireTimeGenerator(expirationTime)
    const encodedValue = encodeURIComponent(JSON.stringify(value))
    const encodedName = encodeURIComponent(JSON.stringify(name))
    document.cookie = `${encodedName}=${encodedValue};expires=${expirationDateTime}`
  },
  
  delete (name: string):void {
    this.set(name, '')
  },
  
  get (name: string): string | ErrorItem {
    const cookie:Array<string> = decodeURIComponent(document.cookie).split(';')
    const cookieItem: string | undefined = cookie.find(item => item.includes(name))

    if(cookieItem) {
      const cookieItemPayload = cookieItem.split('=') as string[]
      return JSON.parse(cookieItemPayload[1])
    }
    // const error = new UnAuthorizedError()
    // throw error
    return ''
  }
}