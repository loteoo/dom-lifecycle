
const mountEvent = new Event('mount')

const realCreateElement = document.createElement.bind(document)
document.createElement = (name) => {
  let el = realCreateElement(name)
  setTimeout(() => el.dispatchEvent(mountEvent))
  return el
}
