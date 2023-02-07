import styles from './a.css'
import axs from './a.xs'
import pic2 from './pic2.png'

console.log('pic2', pic2)

window.addEventListener('error', (e) => {
  console.log('win error', e)
})

window.addEventListener('click', (e) => {
  console.log('win click', e)
})
console.log('styles', styles)
console.log('axs', axs)

function sayName(name) {
  console.log('name', name)
}

sayName()

