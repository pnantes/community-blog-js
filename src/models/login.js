
export default class LoginRequest {
  static base_url = 'https://blog-m2.herokuapp.com/users/login'

  static loginInput() {
    const inputLogin = document.querySelectorAll(".inputLogin");
    let entradaInput = [];

    inputLogin.forEach(input => {
      entradaInput.push(input.value);
    });

    const loginData = criaObjetoLogin(entradaInput);

    LoginRequest.login(loginData);

    return entradaInput;
  }

  static async login(loginData) {
    console.log(loginData)
    return await fetch(this.base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        localStorage.setItem("@kenzie:id", res.userId)
        localStorage.setItem("@kenzie:token", res.token)
        
        // localStorage.setItem("@kenzie:token", JSON.stringify(res.token))

        window.location.href = 'homePage.html'

      })
      .catch(err => console.log(err))
  }
}

const botaoInput = document.querySelector(".botaoLogin");
botaoInput.addEventListener('click', LoginRequest.loginInput);

function criaObjetoLogin(data) {
  const email = data[0];
  const senha = data[1];

  const objetoLogin = {
    email: email,
    password: senha
  }
  return objetoLogin;
}
