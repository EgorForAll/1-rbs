const cards = document.querySelectorAll('.catalog__card')
const minus = document.querySelector('.mns-btn')
const plus = document.querySelector('.pls-btn')
const total = document.querySelector('.basket-range')

minus.addEventListener('click', (e) => {
  e.preventDefault()
  if (total.value != 0) {
    total.value--
  }
})

plus.addEventListener('click', (e) => {
  e.preventDefault()
  total.value++
})

const onHoverCard = (e) => {
  const busketField = e.target.querySelector('.card__buy')
  const favoriteBtn = e.target.querySelector('.card__favourite')
  busketField.classList.add('card__buy--hovered')
  favoriteBtn.classList.add('card__favourite--hovered')
}

const onCardLeave = (e) => {
  const busketField = e.target.querySelector('.card__buy')
  const favoriteBtn = e.target.querySelector('.card__favourite')
  busketField.classList.remove('card__buy--hovered')
  favoriteBtn.classList.remove('card__favourite--hovered')
}

cards.forEach((card) => {
  card.addEventListener('mouseenter', (e) => onHoverCard(e))
  card.addEventListener('mouseleave', (e) => onCardLeave(e))
})
