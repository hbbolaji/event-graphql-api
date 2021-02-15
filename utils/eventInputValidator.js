const error = {}
module.exports = (event) => {
  if (event.name === "") {
    error.name = "name field must not be empty"
  }
  if (event.location === "") {
    error.name = "event must have a location"
  }
  if (event.image === "") {
    error.image = "event must an image"
  }
  if (event.description === "") {
    error.description = "event must have a description"
  }
  if (event.date === "") {
    error.date = "event must a have a date"
  }
  if (event.contact === "") {
    error.contact = "event must have contact"
  }
  return {
    error,
    valid: Object.keys(error) < 1
  }
}