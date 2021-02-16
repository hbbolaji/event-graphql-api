exports.validateUserInput =  (input) => {
  const errors = {}
  const {username, email, password, confirmPassword} = input
  if (username.trim() === "") {
    errors.username = "username field cannot be empty"
  }
  if (email.trim() === "") {
    errors.email = "email field cannot be empty"
  }
  if (password.trim() === "") {
    errors.password = "password field cannot be empty"
  } else if (password.trim() !== confirmPassword.trim()) {
    errors.password = "password don't match"
  }
  return {
    errors,
    valid: Object.keys(errors) < 1
  }
}

exports.generateToken = () => {}