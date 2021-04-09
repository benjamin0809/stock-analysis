interface Params {
    [key: string]: any
}
export default class Utils {
  static formatUrl (url:string, param: Params) :string {
    if (param != null && Object.keys(param).length > 0) {
      let str = url || ''
      const flag = str.indexOf('?') > -1 ? '&' : '?'
      str = Object.keys(param).reduce((cal, cur) => {
        cal += `${cur}=${param[cur]}&`
        return cal
      }, flag)
      return url + str.substring(0, str.length - 1)
    }
    return url
  }
}
