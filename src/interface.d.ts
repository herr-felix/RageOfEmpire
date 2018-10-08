
interface GameUIEvent_WorldClick {
  kind: "world_click"
  posX: number
  posY: number
}

interface GameUIEvent_WorldReady {
  kind: "world_ready",
  context: WebGLRenderingContext
}

interface GameUIEvent_Action {
  kind: "action"
  action_id: GameActionID
}

type GameUIEvent = GameUIEvent_WorldClick | GameUIEvent_WorldReady

type GameActionID = "some_action"


type GameStateEvent = GameEventRessource 

interface GameEventRessource {
  kind: "ressource"
  ressource: "wood" | "food" | "gold" | "stone"
  value: number
}
