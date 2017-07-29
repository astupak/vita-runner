import Runner from './runner';

(function () {
  window['Runner'] = Runner;

})();


function onDocumentLoad() {
  new Runner('.interstitial-wrapper');  
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);
