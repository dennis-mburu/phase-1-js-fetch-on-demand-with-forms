const init = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        // console.log(event.target.children[1])
        const input = document.querySelector('input#searchByID')
        // console.log(input.value)

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            title = document.querySelector('section#movieDetails h4')
            summary = document.querySelector('section#movieDetails p')
    
            title.textContent = data.title
            summary.textContent = data.summary
    
        })


    }) 
}

document.addEventListener('DOMContentLoaded', init);