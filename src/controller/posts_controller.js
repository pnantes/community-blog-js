export default class Requests {

    static baseUrl = "https://blog-m2.herokuapp.com/posts?page=1"
    static userURL = `https://blog-m2.herokuapp.com/users/${localStorage.getItem("@kenzie:id")}`
    static postUrl = "https://blog-m2.herokuapp.com/posts"

    static async listAllPosts(){
        return await fetch(this.baseUrl, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("@kenzie:token")}`,
                "Content-Type": "application/json"
            }
        })
        .then(res=> res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async userData(){
        return await fetch(this.userURL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("@kenzie:token")}`,
                "Content-Type": "application/json"
            }
        })
        .then(res=> res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async criarPosts(postData){
        return await fetch(this.postUrl, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("@kenzie:token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        .then(res=> res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

}
