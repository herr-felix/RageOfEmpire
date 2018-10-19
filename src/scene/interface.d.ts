
type SceneEvent = CanvasReady_SceneEvent

type OffscreenCanvas = HTMLCanvasElement

type CanvasReady_SceneEvent = {
  kind: "CanvasReady",
  canvas: OffscreenCanvas,
}
