//const button = document.querySelector('button')
//button.addEventListener('click', getData)

// first example
//const doIt = async () => {
//    return 'I have been printed.'
//}
//doIt().then(response => console.log(response))

//    fetch('https://restcountries.com/v3.1/all')
//        .then(response => {
//            return response.json()
//        }).then(json => {
//            let countries = json
//            console.log(countries)
//        }).catch(err => {
//            console.log('Error: ' + err.message)
//        })

async function getData() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    //console.log(data)
    return data
}
//console.log(getData())

getData().then(data => console.log(data))
    .catch(err => console.log('Error: ' + err.message))