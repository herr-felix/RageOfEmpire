
interface UIState {
  woodCount: number;
  foodCount: number;
  goldCount: number;
  stoneCount: number;
}

interface IUIController {
  clickAction: (actionId: GameActionID) => void
  clickWorld: (posX: number, posY: number) => void
}

