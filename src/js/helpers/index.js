const getFormFields = (form) => {
  const formElements = form.elements
  const fields = {}
  for (let i = 0; i < formElements.length; i++) {
    const item = formElements.item(i)
    const key = item.name
    if (key) {
      fields[item.name] = item.value
    }
  }
  return fields
}

export { getFormFields }
