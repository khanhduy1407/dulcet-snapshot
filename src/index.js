import DulcetDOM from 'dulcet-dom';
import DulcetDOMServer from 'dulcet-dom/server';

export const render = (rootComponent, domElement) => {
  if (navigator.userAgent.match(/Node\.js/i) && window && window.dulcetSnapshotRender) {
    domElement.innerHTML = DulcetDOMServer.renderToString(rootComponent)
    window.dulcetSnapshotRender()
  } else {
    DulcetDOM.render(rootComponent, domElement)
  }
}
