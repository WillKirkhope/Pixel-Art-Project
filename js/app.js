//Your code goes here
const grid = document.querySelector('#grid')
let currentColor

function createCanvas() {
  for (var i = 0; i < 1000; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    cell.addEventListener('click', (event) => {
      event.target.style.backgroundColor = currentColor
      event.target.style.borderColor = currentColor
    })

    grid.appendChild(cell)
  }
}
createCanvas()

const colorPalette = document.querySelector('.color-palette')
const colors = ["#FFFFF0", "#F5F5DC", "#F5DEB3", "#C3B091", "#C0C0C0", "#808080", "#464646", "#000080", "#084C9E", "#0000CD", "#007FFF", "#00FFFF", "#7FFFD4", "#008080", "#228B22", "#808000", "#7FFF00", "#FFD700", "#DAA520",
  "#FF7F50", "#FA8072", "#FC0FC0", "#FF77FF", "#CC8899", "#E0B0FF", "#B57EDC", "#843179", "#4B0082", "#800000", "#DC143C"
]

function createPalette() {
  colors.forEach(color => {
    const brush = document.createElement('div')
    brush.classList.add('brush')
    brush.style.backgroundColor = color
    brush.dataset.color = color

    brush.addEventListener('click', (event) => {
      currentColor = event.target.dataset.color
    })

    colorPalette.appendChild(brush)
  })
}
createPalette()
