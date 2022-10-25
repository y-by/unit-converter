/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById('toConvert-input')
const btn = document.getElementById('btn')
const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')
const result3 = document.getElementById('result3')

btn.addEventListener('click', () => {
  const meterToFeet = input.value * 3.281
  const feetToMeter = input.value / 3.281
  const literToGallon = input.value * 0.264
  const gallonToLiter = input.value / 0.264
  const kilogramToPound = input.value * 2.204
  const poundToKilogram = input.value / 2.204

  result1.textContent = `${input.value} meters = ${meterToFeet.toFixed(3)} feet | ${input.value} feet = ${feetToMeter.toFixed(3)} meters`
  result2.textContent = `${input.value} liters = ${literToGallon.toFixed(3)} gallons | ${input.value} gallons = ${gallonToLiter.toFixed(3)} liters`
  result3.textContent = `${input.value} kilos = ${kilogramToPound.toFixed(3)} pounds | ${input.value} pounds = ${poundToKilogram.toFixed(3)} kilos`



  console.log(meterToFeet, literToGallon, kilogramToPound)
})