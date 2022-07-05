console.log('%c HI', 'color: firebrick')


// URL Variables
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"


// Challenges loaded on page load
document.addEventListener('DOMContentLoaded', () => {
    dogImgs()
    dogBreeds()
    filterList()
})


// Challenge 1
function dogImgs() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(function(data) {
            data.message.forEach((img) => {
                let imgElement = document.createElement('img')
                imgElement.src = img
                document.getElementById("dog-image-container").appendChild(imgElement)
        })
    })
}


// Challenge 2
function dogBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(function(data) {
        let breedList = data.message
        for (const [key, value] of Object.entries(breedList)) {
            value.forEach((value) => {
            let dogBreedElement = document.createElement('li')
            dogBreedElement.innerText = `${value} ${key}`
            dogBreedElement.setAttribute("onclick", "colorChange(event)")
            document.getElementById("dog-breeds").appendChild(dogBreedElement)})
        }
    })
}


// Challenge 3
function colorChange(event) {
    event.target.style.color = 'red'
}


// Challenge 4
function filterList() {
    let breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.setAttribute('onchange', 'breedFilter()')
}

function breedFilter() {
    let breedDropdown = document.getElementById("breed-dropdown")
    let dogBreeds = document.getElementById("dog-breeds")
    let breedList = dogBreeds.querySelectorAll('li')
    breedList.forEach((listElement) => {
        listElement.style.visibility = 'visible'
    })
    breedList.forEach((listElement) => {
        if ((listElement.innerText[0]) === breedDropdown.value) {
            listElement.style.visibility = 'visibile'
        } else {
            listElement.style.visibility = 'hidden'
        }
    })
}