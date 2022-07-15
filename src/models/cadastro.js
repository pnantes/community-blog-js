
export default class UserRequests {

  static base_url = 'https://blog-m2.herokuapp.com/users/register'

  static cadastroInput() {
    const inputCadastro = document.querySelectorAll(".inputCadastro");
    let entradaInput = [];

    inputCadastro.forEach(input => {
      entradaInput.push(input.value);
    });

    const cadastroData = CreateData.criaObjetoCadastro(entradaInput);

    UserRequests.criaUser(cadastroData);
  }


  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`
  }

  static async criaUser(criaUserDados) {
    return await fetch(this.base_url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(criaUserDados)
    })
      .then(res => res.json())
      .then(res => console.log('oi'))
      .then(res => window.location = "src/views/login.html")
      .catch(err => console.log(err))
  }
}

class CreateData {

  static criaObjetoCadastro(data) {
    const user = data[0];
    const email = data[1];
    const avatarImg = data[2];
    const senha = data[3];

    const objetoCadastro = {
      username: user,
      email: email,
      avatarUrl: avatarImg,
      password: senha
    }
    return objetoCadastro;
  }
}


const buttonCadastro = document.querySelector(".buttonCadastro");

console.log(buttonCadastro)

buttonCadastro.addEventListener('click', UserRequests.cadastroInput);