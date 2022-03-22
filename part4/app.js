const button = document.querySelector('button')
button.addEventListener('click', getData)

function getData() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            return response.json()
        }).then(json => {
            let countries = json
            console.log(countries)
        }).catch(err => {
            console.log('Error: ' + err.message)
        })
}