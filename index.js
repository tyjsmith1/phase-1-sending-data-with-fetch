// // // Add your code here

function submitData() {
    const formData = {
        name: "Steve",
        email: "steve@steve.com",
    }

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
        const newHead = document.querySelector("body")
        newHead.appendChild(document.createElement("p"))
        newHead.innerHTML = data.id
    })
    .catch((error) => {
        alert('Unauthorized Access')

        const newHead = document.querySelector("body")
        newHead.appendChild(document.createElement("p"))
        newHead.innerHTML = error
    })
}
