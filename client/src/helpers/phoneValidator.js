export function phoneValidator(phone) {
    const re = /^-?[\d.]+(?:e-?\d+)?$/
    if (!phone|| phone.length <= 0) return "Email can't be empty."
    if(phone.length!==10) return 'Wrong format!'
    if (!re.test(phone)) return 'Only number!'
    return ''
}