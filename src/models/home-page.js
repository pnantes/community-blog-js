
class HomePage {


    static token = JSON.parse(localStorage.getItem("@kenzie:token"));
    static name = JSON.parse(localStorage.getItem("@kenzie:username"));
    static email = JSON.parse(localStorage.getItem("@kenzie:email"));
    static image = JSON.parse(localStorage.getItem("@kenzie:avatarUrl"));

    static header() {
        const header = document.createElement("header");
        const div = document.createElement("div");
        const figure = document.createElement("figure");
        const divButton = document.createElement("div");
        const img = document.createElement("img");
        const button = document.createElement("button");

        header.classList.add("header");
        div.classList.add("container");
        divButton.classList.add("header__button");
        button.classList.add("button");

        img.src = this.image;
        img.alt = "Avatar Usuário";

        button.type = "button";

        divButton.append(button);
        figure.append(img);
        div.append(figure, divButton);
        header.append(div);
        this.body.append(header);


        if (JSON.parse(localStorage.getItem("@kenzie:user")) !== null) {
            button.innerText = "Logout";
            button.addEventListener("click", (event) => {
                event.preventDefault();
                localStorage.removeItem("@kenzie:username");
                localStorage.removeItem("@kenzie:token");
                window.location.reload(true);
            });
        }

    }

    static main() {

        const main = document.createElement("main");
        const divMain = document.createElement("div");
        const divUser = document.createElement("div");
        const img = document.createElement("img");
        const divTexto = document.createElement("div");
        const h2 = document.createElement("h2"); //user name
        const pArtigo = document.createElement("p");

        divUser.append(img);
        divTexto.append(h2, pArtigo);
        divMain.append(divUser, divTexto);
        main.append(divMain);
        this.body.append(main);

        img.src = this.image;
        img.alt = "Avatar Usuário";
        h2.innerText = `${this.username}`;

        // pArtigo.innerText = '';

        if (JSON.parse(localStorage.getItem("@kenzie:token"))) { //=== userdopost (validação com token)
            const divButtons = document.createElement("div");
            const pEdita = document.createElement("p"); //editar
            const pApaga = document.createElement("p"); //apagar
            const pData = document.createElement("p"); //data

            divButtons.append(pEdita, pApaga, pData);
            main.append(divButtons);

            pEdita.innerText = "Editar"
            pApaga.innerText = "Apagar"
            // pData.innerText = `${}` 

            pEdita.addEventListener("click", (event) => {
                event.preventDefault();

                window.location.reload(true);
            });

            pApaga.addEventListener("click", (event) => {
                event.preventDefault();

                window.location.reload(true);
            });
        }


    }
}