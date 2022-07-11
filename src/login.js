//para a criação da classe do login

export default class LoginRequest {
    // static base_url = 'https://blog-m2.herokuapp.com/users/login'
  
    static async login(loginData) {
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
        localStorage.setItem("@kenzie:user", JSON.stringify(res.response))
        localStorage.setItem("@kenzie:token", JSON.stringify(res.token))
        return res
      })
      .catch(err => console.log(err))
    }
  }

  //onde chamar as funções de construção da pagina inicial??
  //header e main da classe HomePage - devo criar com os posts que existem na api