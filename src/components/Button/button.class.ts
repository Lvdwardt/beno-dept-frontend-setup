import _Events from '@utils/scripts/events'

class Button {
  private element: HTMLElement
  private static instances = new Map<HTMLElement, Button>()
  private static eventListenersSetup = false

  constructor(element: HTMLElement) {
    this.element = element
    Button.instances.set(element, this)

    // Set up event listeners on first instance creation
    if (!Button.eventListenersSetup) {
      Button.setupEventListeners()
      Button.eventListenersSetup = true
    }
  }

  // Static method to initialize all buttons on the page
  static initAll(): void {
    this.createInstancesForNewElements()
  }

  private static setupEventListeners(): void {
    // Listen for button-specific events that might be triggered by data-onxx attributes
    _Events.$on('button::click', (event, data, currentTarget) => {
      const button = Button.instances.get(currentTarget as HTMLElement)
      if (button) {
        button.handleClick(event, data)
      }
    })
  }

  private static createInstancesForNewElements(): void {
    // Find all elements with data-on-click attributes
    const buttonElements = document.querySelectorAll('[data-on-click]')

    buttonElements.forEach(element => {
      if (element instanceof HTMLElement && !Button.instances.has(element)) {
        new Button(element)
      }
    })
  }

  private handleClick(event: CustomEvent, data: unknown): void {
    // Handle click event - this will be called when data-on-click triggers
    if (data === 'clicked') {
      alert('Old Button clicked!')
    } else if (data === 'react-clicked') {
      alert('React Button clicked!')
    }
    console.log('Button clicked:', data)
  }

  // Clean up method to remove instance when element is removed from DOM
  destroy(): void {
    Button.instances.delete(this.element)
  }
}

// The moduleInit system will handle initialization

export default Button
