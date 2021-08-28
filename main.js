import './style.css'

const tipButtons = [
  '[data-js="tip5"]',
  '[data-js="tip10"]',
  '[data-js="tip15"]',
  '[data-js="tip25"]',
  '[data-js="tip50"]',
  '[data-js="tipCustom"]'
]

const bill = {
  value: 0,
  tip: 0,
  numberOfPeople: 0
}

const tip5 = document.querySelector('[data-js="tip5"]')
const tip10 = document.querySelector('[data-js="tip10"]')
const tip15 = document.querySelector('[data-js="tip15"]')
const tip25 = document.querySelector('[data-js="tip25"]')
const tip50 = document.querySelector('[data-js="tip50"]')
const tipCustom = document.querySelector('[data-js="tipCustom"]')
const resetButton = document.querySelector('[data-js="resetButton"]')
const billValue = document.querySelector('[data-js="bill"]')
const numberPerson = document.querySelector('[data-js="person-number"]')
const labelTipPerPerson = document.querySelector('[data-js="tipPerPerson"]')
const labelTotalPerPerson = document.querySelector('[data-js="totalPerPerson"]')


const tipSelected = (event, tip) => {
  const button = event.target

  button.classList.toggle('tipButtonSelected')

  switch(tip) {
    case '[data-js="tip5"]':
      bill.tip = 0.05
      break
    case '[data-js="tip10"]':
      bill.tip = 0.1
      break
    case '[data-js="tip15"]':
      bill.tip = 0.15
      break
    case '[data-js="tip25"]':
      bill.tip = 0.25
      break
    case '[data-js="tip50"]':
      bill.tip = 0.5
      break
  }

  const otherTipButtons = tipButtons.filter((button) => button !== tip)

  otherTipButtons.forEach((name) => {
    const bt= document.querySelector(name)
    bt.classList.remove('tipButtonSelected')
  })
}

tip5.addEventListener('click', (event) => tipSelected(event, '[data-js="tip5"]'))
tip10.addEventListener('click', (event) => tipSelected(event, '[data-js="tip10"]'))
tip15.addEventListener('click', (event) => tipSelected(event, '[data-js="tip15"]'))
tip25.addEventListener('click', (event) => tipSelected(event, '[data-js="tip25"]'))
tip50.addEventListener('click', (event) => tipSelected(event, '[data-js="tip50"]'))

numberPerson.addEventListener('input', (event) => {
    bill.value = Number(billValue.value)
    bill.numberOfPeople = Number(event.target.value)
    
    const tipPerPerson = (bill.value * bill.tip) / bill.numberOfPeople
    const totalPerPerson = (bill.value / bill.numberOfPeople) + tipPerPerson

    labelTipPerPerson.textContent = `$${tipPerPerson.toFixed(2)}`
    labelTotalPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`

    
    resetButton.classList.add('resetActive')
    resetButton.removeAttribute('disabled')
})

resetButton.addEventListener('click', () => {
  bill.value = 0
  bill.tip = 0
  bill.numberOfPeople = 0

  tip5.classList.remove('tipButtonSelected')
  tip10.classList.remove('tipButtonSelected')
  tip15.classList.remove('tipButtonSelected')
  tip25.classList.remove('tipButtonSelected')
  tip50.classList.remove('tipButtonSelected')

  billValue.value = ''
  numberPerson.value = ''
  labelTipPerPerson.textContent = '$0.00'
  labelTotalPerPerson.textContent = '$0.00'
  resetButton.classList.remove('resetActive')
  resetButton.disabled = true
})