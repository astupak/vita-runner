import Runner from './runner';
import { setAssignPolyFill } from './service';
(function () {
  window['Runner'] = Runner;

})();


function onDocumentLoad() {
  !Object.assign && setAssignPolyFill();
  
  new Runner('.interstitial-wrapper');  
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);
