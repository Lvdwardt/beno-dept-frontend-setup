import OldButton from '../Button/OldSetupButton'
import { button, Button as ReactButton } from '../Button/ReactSetupButton'

export default function ButtonDemo() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12" js-hook-module-button-demo>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">Button Component Demo</h1>

        <div className="space-y-12">
          {/* Variants Section */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Variants Comparison</h2>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-gray-700">
                Old Setup Button (with tailwind-variants)
              </h3>
              <div className="flex flex-wrap gap-4">
                <OldButton label="Primary Button" variant="primary" />
                <OldButton label="Secondary Button" variant="secondary" />
                <OldButton label="Ghost Button" variant="ghost" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-700">
                React Setup Button (tailwind-variants)
              </h3>
              <div className="flex flex-wrap gap-4">
                <ReactButton variant="primary">Primary Button</ReactButton>
                <ReactButton variant="secondary">Secondary Button</ReactButton>
                <ReactButton variant="outline">Outline Button</ReactButton>
                <ReactButton variant="ghost">Ghost Button</ReactButton>
              </div>
            </div>
          </section>

          {/* Sizes Section */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Sizes Comparison</h2>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-gray-700">Old Setup Button</h3>
              <div className="flex flex-wrap items-center gap-4">
                <OldButton label="Small Button" variant="primary" size="small" />
                <OldButton label="Default Button" variant="primary" />
                <OldButton label="Large Button" variant="primary" size="large" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-700">React Setup Button</h3>
              <div className="flex flex-wrap items-center gap-4">
                <ReactButton variant="primary" size="sm">
                  Small Button
                </ReactButton>
                <ReactButton variant="primary" size="md">
                  Default Button
                </ReactButton>
                <ReactButton variant="primary" size="lg">
                  Large Button
                </ReactButton>
              </div>
            </div>
          </section>

          {/* With Icons Section */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">With Icons</h2>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-gray-700">
                Old Setup Button (Built-in Icon Support)
              </h3>
              <div className="flex flex-wrap gap-4">
                <OldButton label="Primary with Icon" variant="primary" icon="arrow-right" />
                <OldButton label="Secondary with Icon" variant="secondary" icon="arrow-right" />
                <OldButton label="Ghost with Icon" variant="ghost" icon="arrow-right" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-700">
                React Setup Button (Custom Icon Implementation)
              </h3>
              <div className="flex flex-wrap gap-4">
                <ReactButton variant="primary" className="gap-2">
                  Primary with Icon
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ReactButton>
                <ReactButton variant="secondary" className="gap-2">
                  Secondary with Icon
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ReactButton>
                <ReactButton variant="ghost" className="gap-2">
                  Ghost with Icon
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ReactButton>
              </div>
            </div>
          </section>

          {/* Link Buttons Section */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Link Buttons</h2>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-gray-700">
                Old Setup Button (Built-in Link Support)
              </h3>
              <div className="flex flex-wrap gap-4">
                <OldButton
                  label="External Link"
                  variant="primary"
                  element="a"
                  url="https://deptagency.com"
                  target="_blank"
                />
                <OldButton label="Internal Link" variant="primary" element="a" url="/about" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-700">
                React Setup Button (Custom Link Implementation)
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://deptagency.com"
                  target="_blank"
                  className={button({ variant: 'primary' })}>
                  External Link
                </a>
                <a href="/about" className={button({ variant: 'primary' })}>
                  Internal Link
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Interactive Buttons</h2>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-gray-700">Old Setup Button</h3>
              <div className="flex flex-wrap gap-4">
                <OldButton label="Click Me!" variant="primary" data-on-click="alert" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-700">React Setup Button</h3>
              <div className="flex flex-wrap gap-4">
                <ReactButton variant="primary" data-on-click="alert" type="button">
                  Click Me!
                </ReactButton>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
