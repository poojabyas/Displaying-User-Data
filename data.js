let container=document.querySelector(".container")


let api = fetch("https://reqres.in/api/users");

api.then(function(res){
    return res.json();
})
.then(function(response){
    display(response.data);
})
.catch(function(error){
    console.log(error);
});

function display(data){
    data.forEach(function(element){
        // console.log(element);

        let card=document.createElement("div")
        let name=document.createElement("p")
        let email=document.createElement("h5")
        let avatar=document.createElement("img")


        name.innerText=element.first_name
        email.innerText=element.email
        avatar.setAttribute("src",element.avatar)

        container.appendChild(card)
        card.append(name,email,avatar)

    });
}