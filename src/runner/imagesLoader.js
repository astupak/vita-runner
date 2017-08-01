import { runnerConfig } from 'Configs';

class ImagesLoader {
  constructor(ids) {
    this.images = [];
    this.loadedCallback = null;
    this.callbackCalled = false;
    this.setImages(ids);
  }

  setImages(ids) {
    for (let name in ids){
      this.images.push(document.getElementById(ids[name]));
    }
  }

  checkAll() {
    return this.images.reduce((accumulated, current) => {
      return accumulated && current.complete;
    }, true);
  }

  addEventListeners () {
    for (let img of this.images) {
      img.addEventListener(runnerConfig.events.LOAD,() => {
        if (this.checkAll() && !this.callbackCalled) {
          this.callbackCalled = true;
          this.loadedCallback();
        }
      });
    }
  }

  onLoaded(callback) {
    this.loadedCallback = callback;
    this.addEventListeners();
  }
};

export default ImagesLoader;
