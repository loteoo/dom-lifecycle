// TODO: do this with a mutation observer instead

const onmountEvent = new Event('onmount')
const onmodifyEvent = new Event('onmodify')
const ondeleteEvent = new Event('ondelete')

const realCreateElement = document.createElement.bind(document)

document.createElement = (name) => {
  let el = realCreateElement(name)
  el.addEventListener("DOMNodeInserted", ev => el.dispatchEvent(onmountEvent), false);
  el.addEventListener("DOMAttrModified", ev => el.dispatchEvent(onmodifyEvent), false);
  el.addEventListener("DOMNodeRemoved", ev => el.dispatchEvent(ondeleteEvent), false);
  return el
}
