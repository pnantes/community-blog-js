//para fazer a classe de cadastro do usuário

export default class UserRequests {
    // static base_url = "https://blog-m2.herokuapp.com/users/register"

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