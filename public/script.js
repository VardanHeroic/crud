function send() {
    const inputs = document.getElementsByTagName('input')
    const data = {}

    for (let input of inputs) {
        data[input.name] = input.value
    }

    console.log(JSON.stringify(data));
    fetch("http://localhost:3000/addName", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
}
