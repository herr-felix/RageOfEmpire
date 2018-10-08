import Model from "./model"

export default class View {

  private wood_display: RessourceBox
  private food_display: RessourceBox
  private gold_display: RessourceBox
  private stone_display: RessourceBox

  private world_display: HTMLCanvasElement

  private bare_height = 30
  private dashboard_height = 200

  private push_event: (e: GameUIEvent) => void

  constructor(event_callback: (e: GameUIEvent) => void) {
    this.push_event = event_callback
    this.initComponents()
    this.initEvents()
  }

  private initComponents() {
    const root = document.body 
    root.style.margin = "0"
    root.style.padding = "0"
    root.appendChild(this.initBare())
    root.appendChild(this.initCanvas())
  }

  private initEvents() {
    this.world_display.onclick = (e: MouseEvent) => {
      this.push_event({
        kind: "world_click",
        posX: e.offsetX / this.world_display.clientWidth,
        posY: e.offsetY / this.world_display.clientHeight
      })
    }
  }
  
  private initBare(): Element {
    const bare = document.createElement("div")
    bare.style.backgroundColor = "#663300"
    bare.style.position = "absolute"
    bare.style.top = "0"
    bare.style.left = "0"
    bare.style.right = "0"
    bare.style.boxSizing = "border-box"
    bare.style.height = this.bare_height.toString() + "px"
    bare.style.color = "white"
    bare.style.fontFamily = "sans-serif"
    bare.style.paddingTop = "3px"
    bare.style.backgroundImage = "url('assets/ui/bare.jpg')"
    bare.style.backgroundSize = "contain"

    this.wood_display = new RessourceBox(bare, "Buches")
    this.food_display = new RessourceBox(bare, "Steaks")
    this.gold_display = new RessourceBox(bare, "Bidoux")
    this.stone_display = new RessourceBox(bare, "Cailloux")

    return bare
  }

  private initCanvas(): Element {
    this.world_display = document.createElement("canvas") as HTMLCanvasElement
    this.world_display.style.backgroundColor = "black"
    this.world_display.style.position = "absolute" 
    this.world_display.style.top = this.bare_height.toString() + "px"
    
    this.world_display.height = window.innerHeight - this.bare_height - this.dashboard_height
    this.world_display.width = window.innerWidth

    const context = this.world_display.getContext('webgl', { antialias: false });
    this.push_event({kind: "world_ready", context: context }) 

    return this.world_display
  }

  Render(model: Model) {
    this.wood_display.SetValue(model.woodCount)
    this.food_display.SetValue(model.foodCount)
    this.gold_display.SetValue(model.goldCount)
    this.stone_display.SetValue(model.stoneCount)
  }

}

class RessourceBox {
  private _text: Element

  constructor(parent: Element, txt: string) {
    const box = document.createElement("div")
    box.style.display = "inline-block"
    box.style.height = "1em"
    box.style.padding = "4px"
    box.style.width = "120px"
    box.style.textAlign = "right"
    box.style.backgroundColor = "black"
    box.style.marginLeft = "3px"

    this._text = document.createElement("span")

    const label = document.createElement("span")
    label.style.textAlign = "right"
    label.style.cssFloat = "left"
    label.textContent = txt
    
    box.appendChild(label)
    box.appendChild(this._text)
    parent.appendChild(box)
  }

  SetValue(value: number) {
    this._text.textContent = value.toString()
  }

}
