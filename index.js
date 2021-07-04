
function submitData(name, email) {
    let url = "http://localhost:3000/users";

    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };


    return fetch(url, configObj)
        .then(response => response.json())
        .then(function(json) {
            const li = document.createElement("li");
            li.innerHTML = json.id;
    
            const idList = document.getElementById("ids");
            idList.appendChild(li);
        })
        .catch(function(error) {
            const errorDisp = document.getElementById("caught-error");
            errorDisp.innerHTML = error.message;
        });
};