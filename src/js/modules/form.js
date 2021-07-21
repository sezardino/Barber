import { getFormFields } from '../helpers'

class Form {
  constructor() {
    this.form = document.querySelector('.js-form')
    this.postUrl = 'https://jsonplacehowlder.typicode.com/posts'
    this.error = this.form.querySelector('.js-error')
    this.success = this.form.querySelector('.js-success')

    this.init()
  }

  postMessage(message) {
    const data = {
      method: 'POST',
      body: JSON.stringify(message),
    }

    return fetch(this.postUrl, data).then((response) => response.json())
  }

  addListeners() {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      const fields = getFormFields(evt.target)

      if (fields.tel && fields.name && fields.message) {
        this.postMessage(fields)
          .then(() => (this.success.style.display = 'initial'))
          .catch(() => (this.error.style.display = 'initial'))
      }
    })
  }

  init() {
    this.addListeners()
  }
}

export default Form
