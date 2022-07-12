
export default class UserRequests {
  // static base_url = "https://blog-m2.herokuapp.com/users/register";

  static cadastroInput() {
    const inputCadastro = document.querySelectorAll(".inputCadastro");
    let entradaInput = [];

    inputCadastro.forEach(input => {
      entradaInput.push(input.value);
    });

    const cadastroData = criaObjetoCadastro(entradaInput);

    UserRequests.criaUser(cadastroData);
  }


  static token = JSON.parse(localStorage.getItem("@kenzie:token"))
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
      .catch(err => console.log(err))
  }
}


const buttonCadastro = document.querySelector(".buttonCadastro");
buttonCadastro.addEventListener('click', UserRequests.cadastroInput);

function criaObjetoCadastro(data) {
  const user = data[0];
  const email = data[1];
  const avatarImg = data[2];
  const senha = data[3];

  const objetoCadastro = {
    username : user,
    email: email,
    avatarUrl : avatarImg,
    password: senha
  }
  return objetoCadastro;
}
