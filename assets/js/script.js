// TODO: Declare any global variables we need
let headFlipCount = 0
let tailFlipCount = 0

let counts = {
    heads: 0,
    tails: 0
}

  // TODO: Add event listener and handler for flip and clear buttons
document.addEventListener('DOMContentLoaded', function () {
    function handleFlipResult(result) {
        // result = "heads" || "tails"
        counts[result]++ // result = "heads" ==> counts["heads"] == counts.heads

        let img = document.querySelector('img')
        img.src = `assets/images/penny-${result}.jpg`
        img.alt = `${result} face of a penny`

        // TODO: capitalize the result in the message
        document.querySelector('.message-container h3').textContent = `You Flipped ${result}!`

        // document.querySelector('#heads').textContent = counts.heads
        // document.querySelector('#tails.textContent') = counts.tails
        document.querySelector(`#${result}`).textContent = counts[result]
        let hPercent = Math.round(counts.heads/(counts.heads+counts.tails) * 100)
        let tPercent = Math.round(counts.tails/(counts.heads+counts.tails) * 100)

        document.querySelector('#heads-percent').textContent = hPercent + '%'
        document.querySelector('#tails-percent').textContent = tPercent + '%'



    }

    function handleFlip(e) {
        console.log("Flipping out")
            let isHeads = Math.random() >= .5

            if(isHeads) {
                handleFlipResult('heads')
                
            } else {
                handleFlipResult('tails')
            }
                   
    }

    function handleClear(e) {
        console.log("Clear it out")
        counts.heads = counts.tails = 0

        document.querySelector('#heads').textContent = 0
        document.querySelector('#tails').textContent = 0
        document.querySelector('#heads-percent').textContent = '0%'
        document.querySelector('#tails-percent').textContent = '0%'

        document.querySelector('.message-container h3').textContent = `Let's Get Rolling!`
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)   
    }
  
// Add event listeners
    document.querySelector("#flip").addEventListener('click', handleFlip)
    document.querySelector("#clear").addEventListener('click', handleClear)

})