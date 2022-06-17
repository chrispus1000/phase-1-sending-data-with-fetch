// Add your code here
function submitData(userName, userEmail) {
    const userObject = {name: userName, email: userEmail};
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(userObject)
    })
    .then(res => res.json())
    .then(data => appendData(data))
    .catch(error => appendError(error));

}

function appendData(data) {
    const body = document.querySelector('body');
    body.innerHTML = data.id;
}

function appendError(error) {
    const body = document.querySelector('body');
    body.innerHTML = error;
}