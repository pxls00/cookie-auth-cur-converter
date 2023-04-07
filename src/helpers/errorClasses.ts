export class UnAuthorizedError extends Error {
  protected _code: number
  constructor () {
    super('User token has been expired')
    this.name = 'USER_UNAUTHORIZED'
    this._code= 401
  }

  get code () {
    return this._code
  }
}