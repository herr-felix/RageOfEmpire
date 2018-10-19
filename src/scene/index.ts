/// <reference path="./interface.d.ts" />
import SceneWorker from 'worker!./worker.ts' /* tslint:disable */ // @ts-ignore

// Scene is really just a gateway to the worker that handle all the rendering
export default class Scene {
  private worker: Worker

  constructor() {
    this.worker = new SceneWorker()
  }

  private send(event: SceneEvent) {
    this.worker.postMessage(event)
  }

  InitCanvas(canvas: HTMLCanvasElement) {
    console.log(canvas)
    const offscreen = canvas.transferControlToOffscreen()
    this.worker.postMessage({
      kind: "CanvasReady",
      canvas: offscreen,
    }, [offscreen])
  }

}
