const images = ['siri', 'q1', 'gru', 'q2', 'bond', 'q3']

let counter = 0

const gallery = document.getElementById('gallery')

function next (increment) {
  counter += increment
  if (counter === images.length) {
    counter = 0
  }
  if (counter === -1) {
    counter = images.length
  }

  for (let i = 0; i < 3; i++) {
    console.log(counter, i)
    const image = gallery.children[i + 1].children[0]
    const imageName = images[counter + i] || images[counter + i - images.length]
    image.src = `images/${imageName}.png`
    image.alt = imageName
  }
}

next(1)

const forward = document.getElementById('forward')
const back = document.getElementById('back')
forward.addEventListener('click', () => { next(1) })
back.addEventListener('click', () => { next(-1) })
