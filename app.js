const getQuoteBtnElement = document.getElementById('getQuoteBtn')
console.log(getQuoteBtnElement)
const squareFrameContainer = document.querySelector('.square-frame')
console.log(squareFrameContainer)


const API = 'https://api.quotable.io/quotes'

async function fetchQuotes() {
    try {
        const response = await fetch(API)
        const fetchedQuotes = await response.json()
        console.log(fetchedQuotes.results)
        const randomQuote = fetchedQuotes.results[Math.floor(Math.random()*fetchedQuotes.results.length)]
        console.log(randomQuote)
        displayFetchedQuotes(randomQuote)
    }catch(error){
        console.log('something went wrong', error)
    }
}

function displayFetchedQuotes(quote){
    console.log(quote)
        squareFrameContainer.innerHTML = ''
        const quotesTemplate = `
        <p class="quote">
            "${quote.content}"
        </p>
        <h3 class="author">${quote.author}</h3>
        <button type="button" class="getQuoteBtn" id="getQuoteBtn">Get Quote <span class="loader"></span></button>
        <div class="quote-image">
            <img src="./Images/cute-african-american-schoolboy-with-backpack-glasses-vector-illustration.png" alt="">
        </div>
    `
    squareFrameContainer.insertAdjacentHTML('beforeend', quotesTemplate)
    const getQuoteBtnElement = document.getElementById('getQuoteBtn')
    getQuoteBtnElement.addEventListener('click', function(){
        fetchQuotes()
        console.log('clicked')
        // const spinnerElement = document.querySelector('.loader')
        // console.log(spinnerElement)
        // spinnerElement.style.display = 'inline-block'
        getQuoteBtnElement.textContent = 'Fetching...'
        // getQuoteBtnElement.disabled = true

        setTimeout(()=>{
            // spinnerElement.style.display = 'none'
            getQuoteBtnElement.textContent = 'Get Quote'
            // getQuoteBtnElement.disabled = false
        }, 5000)
    })

}

window.addEventListener('load', fetchQuotes())
