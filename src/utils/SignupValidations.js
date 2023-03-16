import Validations from "./Validations";
export default class SignupValidations {
  constructor(email, password, username) {
    this.email = email;
    this.password = password;
    this.username = username;
  }

  checkValidations() {
    // email validation
    let errors = [];
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Please enter a valid email address";
    }

    // username validation
    if (!Validations.checkUsername(this.username)) {
      errors["username"] = "Please enter a valid username";
    }

    // password validation
    if (!Validations.minLength(this.password, 6)) {
      errors["password"] = "Password must be at least 6 characters";
    }

    return errors;
  }
}
