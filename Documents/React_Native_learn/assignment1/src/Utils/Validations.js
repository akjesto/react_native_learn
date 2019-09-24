export function checkEmail(email,callBack) {
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;    
    if (regexEmail.test(email)) {
        return true
    } else {
        return false
    
    }
}