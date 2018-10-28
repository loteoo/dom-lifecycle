// Load this file before instanciating your apps

// Declare the event
const mountEvent = new Event('create')

// Trigger the event on every new DOM node asynchronously
const realCreateElement = document.createElement.bind(document)
document.createElement = (name) => {
  let el = realCreateElement(name)
  setTimeout(() => el.dispatchEvent(mountEvent))
  return el
}
