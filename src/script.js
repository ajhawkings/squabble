const images = ['homer', 'q1', 'barbie', 'q2', 'grinch', 'q3']

let counter = 0

const gallery = document.getElementById('gallery')

function slideshow (increment) {
  counter += increment
  if (counter === images.length) {
    counter = 0
  }
  if (counter === -1) {
    counter = images.length
  }

  for (let i = 0; i < 3; i++) {
    const image = gallery.children[i + 1].children[0]
    const imageName = images[counter + i] || images[counter + i - images.length]
    image.src = `images/${imageName}.webp`
    image.alt = imageName
  }
}

slideshow(1)

const forward = document.getElementById('forward')
const back = document.getElementById('back')
forward.addEventListener('click', () => { slideshow(1) })
back.addEventListener('click', () => { slideshow(-1) })
