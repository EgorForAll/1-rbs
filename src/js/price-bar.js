const rangeInput = document.querySelectorAll('.range-input input')
const priceInput = document.querySelectorAll('.price-input input')
const range = document.querySelector('.slider .progress')
const formPrice = document.querySelector('.form-price')
let priceGap = 1000

const syncInputs = (e) => {
  let minPrice = parseInt(priceInput[0].value)
  let maxPrice = parseInt(priceInput[1].value)

  if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
    if (e.target.className === 'input-min') {
      rangeInput[0].value = minPrice
      range.style.left = (minPrice / rangeInput[0].max) * 100 + '%'
    } else {
      rangeInput[1].value = maxPrice
      range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%'
    }
  }
}

const syncSlide = (e) => {
  let minVal = parseInt(rangeInput[0].value)
  let maxVal = parseInt(rangeInput[1].value)

  if (maxVal - minVal < priceGap) {
    if (e.target.className === 'range-min') {
      rangeInput[0].value = maxVal - priceGap
    } else {
      rangeInput[1].value = minVal + priceGap
    }
  } else {
    priceInput[0].value = minVal
    priceInput[1].value = maxVal
    range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
  }
}

document.addEventListener('DOMContentLoaded', (e) => {
  syncInputs(e)
  syncSlide(e)
})

priceInput.forEach((input) => {
  input.addEventListener('input', (e) => syncInputs(e))
})

rangeInput.forEach((input) => {
  input.addEventListener('input', (e) => syncSlide(e))
})

formPrice.addEventListener('reset', (e) => {
  setTimeout(() => {
    syncInputs(e)
    syncSlide(e)
  }, 100)
})
