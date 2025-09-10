import _Events from '@utils/scripts/events'

class CounterLogic {
  private count: number = 0
  private displayElement: HTMLElement | null = null

  constructor(element: HTMLElement) {
    this.displayElement = element.querySelector('[data-counter-display]')
    this.setupEventListeners()
  }

  private setupEventListeners() {
    // Listen for counter events
    _Events.$on('counter::increment', () => {
      this.increment()
    })

    _Events.$on('counter::decrement', () => {
      this.decrement()
    })
  }

  private increment() {
    this.count++
    this.updateDisplay()
  }

  private decrement() {
    this.count--
    this.updateDisplay()
  }

  private updateDisplay() {
    if (this.displayElement) {
      this.displayElement.textContent = this.count.toString()
    }
  }
}

export default CounterLogic
