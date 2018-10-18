import SceneWorker from 'worker!./worker.ts' /* tslint:disable */ // @ts-ignore

// Scene is really just a gateway to the worker that handle all the rendering
export default class Scene {
  private worker: Worker

  constructor() {
    this.worker = new SceneWorker()
    this.worker.postMessage("Allo!")
  }

}
