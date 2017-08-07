import Runner from './runner';
import { setAssignPolyFill } from './service';
(function () {
  window['Runner'] = Runner;

})();


function onDocumentLoad() {
  if (!Object.assign) {
     
    setAssignPolyFill();

    console.log(`Assign Polyfill set:${Object.assign != undefined}`);
  }
  
  new Runner('.interstitial-wrapper');  
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);
