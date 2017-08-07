import Runner from './runner';
import { setAssignPolyFill } from './service';
(function () {
  window['Runner'] = Runner;

})();


function onDocumentLoad() {
  new Runner('.interstitial-wrapper');  
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);
