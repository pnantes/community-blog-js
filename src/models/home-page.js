import Requests from "../controller/posts_controller.js"

class HomePage {

    static token = localStorage.getItem("@kenzie:token");

    static async header() {

        const usuario = await Requests.userData();
        console.log(usuario)
        const body = document.querySelector('.body')
        const header = document.createElement("header");
        const div = document.createElement("div");
        const figure = document.createElement("figure");
        const divButton = document.createElement("div");
        const img = document.createElement("img");
        const button = document.createElement("button");
        const nomeUser = document.createElement("p");
        button.innerText = "Logout";

        header.classList.add("header");
        div.classList.add("container");
        divButton.classList.add("header__button");
        button.classList.add("button");

        img.src = `${usuario.avatarUrl}`;
        img.alt = "Avatar Usuário";

        nomeUser.innerText = `${usuario.username}`

        button.type = "button";

        divButton.append(button);
        figure.append(img);
        div.append(figure, nomeUser, divButton);
        header.append(div);
        body.append(header);


        if (JSON.parse(localStorage.getItem("@kenzie:username")) !== null) {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                localStorage.clear();
                window.location.reload(true);
            });
        }
    }


    static async main() {
        const body = document.querySelector('.body')
        
        const main = document.createElement("main");

        const divInput = document.createElement('div');
        const input = document.createElement('input');
        const buttonInput = document.createElement('button');
        buttonInput.innerText = 'Enviar';

        buttonInput.addEventListener('click', async () => {
            const inputValue = input.value;
            const post = {
                content: inputValue
            }
            await Requests.criarPosts(post);
            window.location.reload();
        })

        main.append(divInput);

        const posts = await Requests.listAllPosts();

        posts.data.forEach(post => {

            const divMain = document.createElement("div");
            const divUser = document.createElement("div");
            const img = document.createElement("img");
            const divTexto = document.createElement("div");
            const h2 = document.createElement("h2");
            const pArtigo = document.createElement("p");

            img.src = `${post.user.avatarUrl}`;
            img.alt = "Avatar Usuário";
            h2.innerText = `${post.user.username}`;
            pArtigo.innerText = `${post.content}`

            divInput.append(input, buttonInput);
            divUser.append(img);
            divTexto.append(h2, pArtigo);
            divMain.append(divUser, divTexto);
            main.append(divMain);

        // if () { //=== userdopost (validação com token)
            //     const divButtons = document.createElement("div");
            //     const pEdita = document.createElement("p"); //editar
            //     const pApaga = document.createElement("p"); //apagar
            //     const pData = document.createElement("p"); //data
    
            //     divButtons.append(pEdita, pApaga, pData);
            //     main.append(divButtons);
    
            //     pEdita.innerText = "Editar"
            //     pApaga.innerText = "Apagar"
            //     // pData.innerText = `${}` 
    
            //     pEdita.addEventListener("click", (event) => {
            //         event.preventDefault();
    
            //         window.location.reload(true);
            //     });
    
            //     pApaga.addEventListener("click", (event) => {
            //         event.preventDefault();
    
            //         window.location.reload(true);
            //     });
            // }
        });

        body.append(main);
    }
}


HomePage.header()
HomePage.main()