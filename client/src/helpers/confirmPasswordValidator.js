import { passwordValidator } from "./passwordValidator"

export function confirmPasswordValidator(confirmPassword, password) {
    if (confirmPassword != password) return "Password does not match."
    if (!confirmPassword || confirmPassword.length <= 0) return "Password can't be empty."
    return ''
}