

const css = `
  @keyframes nodeInserted {  
    from {opacity: 0.99;}
    to {opacity: 1;}
  }
  * {
    animation-duration: 0.001s;
    animation-name: nodeInserted;
  }
`

const head = document.head || document.getElementsByTagName('head')[0]
const style = document.createElement('style')
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);



const mountEvent = new Event('mount')
const modifyEvent = new Event('modify')
const deleteEvent = new Event('delete')

const realCreateElement = document.createElement.bind(document)



document.createElement = (name) => {
  let el = realCreateElement(name)
  el.addEventListener("animationstart", ev => el.dispatchEvent(mountEvent), false);
  el.addEventListener("MSAnimationStart", ev => el.dispatchEvent(mountEvent), false);
  el.addEventListener("webkitAnimationStart", ev => el.dispatchEvent(mountEvent), false);
  return el
}
