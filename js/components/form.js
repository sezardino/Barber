export default class Form {
  constructor() {
    this.form = document.querySelector('.form');
    this.btn = this.form.querySelector('.form__button');
    this.path = 'question.php';
  }

  async postData (data) {
    const response = await fetch(this.path, {
      method: 'Post',
      body: data
    });

    return await response.text();
  }

  onFormSubmit(evt) {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const data = new FormData(this.form);
      this.btn.textContent = 'Loading';
      this.btn.style.backgroundColor = 'blue';

      this.postData(data)
        .then((res) => {
          console.log(res);
          this.btn.textContent = 'Отправленно';
          this.btn.style.backgroundColor = 'green';
        }).catch(() => {
          this.btn.textContent = 'Ошибка';
          this.btn.style.backgroundColor = 'red';
      })
        .finally(() => setTimeout(() => {
          this.btn.textContent = 'отправить';
          this.btn.style.backgroundColor = '#000000';
      }, 3000));
      this.form.reset();
    });
  }

  init() {
    this.onFormSubmit();
  }
}
