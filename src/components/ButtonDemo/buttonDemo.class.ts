import _Events from '@utils/scripts/events'

class ButtonDemoLogic {
  constructor() {
    this.setupEventListeners()
  }

  private setupEventListeners() {
    _Events.$on('alert', () => {
      alert(`Button clicked!`)
    })
  }
}

export default ButtonDemoLogic
