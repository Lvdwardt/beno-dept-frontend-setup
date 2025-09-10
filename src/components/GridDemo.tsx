import { cn } from '../utils/cn'

export default function GridDemo({ className = '' }) {
  return (
    <div className={cn('main-grid bg-tahiti-100/50', className)}>
      {/* Header Section - Full Width */}
      <header className="full-width-section bg-tahiti-100 subgrid py-16">
        <div className="content-section">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Grid System Demo</h1>
          <p className="text-lg text-gray-700">
            Showcasing the main-grid system with full-width sections, content sections, subgrids,
            and regular Tailwind grid layouts.
          </p>
        </div>
      </header>

      {/* Main Grid System Demo */}
      <section className="content-section py-12">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Main Grid System</h2>

        {/* Content Section Example */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Content Section</h3>
          <div className="bg-tahiti-200 rounded-lg p-6">
            <p className="text-gray-700">
              This content is constrained within the main-grid content area with proper padding and
              max-width.
            </p>
          </div>
        </div>

        {/* Subgrid Example */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Subgrid Layout (12 columns)</h3>
          <div className="content-grid gap-4">
            <div className="bg-tahiti-300 col-span-4 rounded-lg p-4">
              <h4 className="mb-2 font-semibold">col-span-4 (1-4)</h4>
              <p className="text-sm">This spans 4 columns of the 12-column grid.</p>
            </div>
            <div className="bg-tahiti-400 col-span-4 rounded-lg p-4">
              <h4 className="mb-2 font-semibold">col-span-4 (5-8)</h4>
              <p className="text-sm">This also spans 4 columns.</p>
            </div>
            <div className="bg-tahiti-500 col-span-4 rounded-lg p-4 text-white">
              <h4 className="mb-2 font-semibold">col-span-4 (9-12)</h4>
              <p className="text-sm">This completes the row with 4 columns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Section Example */}
      <section className="full-width-section bg-gray-100 py-12">
        <div className="content-section">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Full Width Section</h2>
          <p className="mb-8 text-lg text-gray-700">
            This section spans the full width of the viewport while maintaining proper content
            constraints.
          </p>

          {/* Full width content grid */}
          <div className="content-grid gap-6">
            <div className="col-span-3 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold">Feature 1</h3>
              <p className="text-sm text-gray-600">
                Full width section with constrained content grid.
              </p>
            </div>
            <div className="col-span-3 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold">Feature 2</h3>
              <p className="text-sm text-gray-600">
                Each item spans 3 columns of the 12-column grid.
              </p>
            </div>
            <div className="col-span-3 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold">Feature 3</h3>
              <p className="text-sm text-gray-600">Responsive and flexible layout system.</p>
            </div>
            <div className="col-span-3 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold">Feature 4</h3>
              <p className="text-sm text-gray-600">Perfect for showcasing multiple features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Tailwind Grid Examples */}
      <section className="content-section py-12">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Regular Tailwind Grid</h2>

        {/* Basic Grid */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Basic Grid (grid-cols-3)</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg border border-blue-300 bg-gradient-to-br from-blue-100 to-blue-200 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-blue-800">Item 1</h4>
              <p className="text-sm text-blue-700">Basic 3-column grid layout.</p>
            </div>
            <div className="rounded-lg border border-blue-400 bg-gradient-to-br from-blue-200 to-blue-300 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-blue-800">Item 2</h4>
              <p className="text-sm text-blue-700">Equal width columns.</p>
            </div>
            <div className="rounded-lg border border-blue-500 bg-gradient-to-br from-blue-300 to-blue-400 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-black">Item 3</h4>
              <p className="text-sm text-blue-100">Responsive by default.</p>
            </div>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Responsive Grid</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-emerald-300 bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-emerald-800">📱 Mobile</h4>
              <p className="text-sm text-emerald-700">1 column on mobile</p>
            </div>
            <div className="rounded-lg border border-emerald-400 bg-gradient-to-br from-emerald-200 to-emerald-300 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-emerald-800">📱 Tablet</h4>
              <p className="text-sm text-emerald-700">2 columns on medium screens</p>
            </div>
            <div className="rounded-lg border border-emerald-500 bg-gradient-to-br from-emerald-300 to-emerald-400 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-black">💻 Desktop</h4>
              <p className="text-sm text-emerald-100">4 columns on large screens</p>
            </div>
            <div className="rounded-lg border border-emerald-600 bg-gradient-to-br from-emerald-400 to-emerald-500 p-4 text-black shadow-sm">
              <h4 className="mb-2 font-semibold">🔄 Responsive</h4>
              <p className="text-sm text-emerald-100">Adapts to screen size</p>
            </div>
          </div>
        </div>

        {/* Grid with Spanning */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Grid with Column Spanning</h3>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2 rounded-lg border border-violet-300 bg-gradient-to-br from-violet-100 to-violet-200 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-violet-800">Span 2</h4>
              <p className="text-sm text-violet-700">Spans 2 columns</p>
            </div>
            <div className="col-span-4 rounded-lg border border-violet-400 bg-gradient-to-br from-violet-200 to-violet-300 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-violet-800">Span 4</h4>
              <p className="text-sm text-violet-700">Spans 4 columns</p>
            </div>
            <div className="col-span-3 rounded-lg border border-violet-500 bg-gradient-to-br from-violet-300 to-violet-400 p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-black">Span 3</h4>
              <p className="text-sm text-violet-100">Spans 3 columns</p>
            </div>
            <div className="col-span-3 rounded-lg border border-violet-600 bg-gradient-to-br from-violet-400 to-violet-500 p-4 text-black shadow-sm">
              <h4 className="mb-2 font-semibold">Span 3</h4>
              <p className="text-sm text-violet-100">Also spans 3 columns</p>
            </div>
          </div>
        </div>

        {/* Grid with Gaps */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Grid with Different Gaps</h3>
          <div className="mb-4 grid grid-cols-4 gap-2">
            <div className="rounded border border-rose-300 bg-gradient-to-r from-rose-100 to-rose-200 p-2 text-xs">
              gap-2
            </div>
            <div className="rounded border border-rose-300 bg-gradient-to-r from-rose-100 to-rose-200 p-2 text-xs">
              gap-2
            </div>
            <div className="rounded border border-rose-300 bg-gradient-to-r from-rose-100 to-rose-200 p-2 text-xs">
              gap-2
            </div>
            <div className="rounded border border-rose-300 bg-gradient-to-r from-rose-100 to-rose-200 p-2 text-xs">
              gap-2
            </div>
          </div>
          <div className="mb-4 grid grid-cols-4 gap-4">
            <div className="rounded border border-rose-400 bg-gradient-to-r from-rose-200 to-rose-300 p-2 text-xs">
              gap-4
            </div>
            <div className="rounded border border-rose-400 bg-gradient-to-r from-rose-200 to-rose-300 p-2 text-xs">
              gap-4
            </div>
            <div className="rounded border border-rose-400 bg-gradient-to-r from-rose-200 to-rose-300 p-2 text-xs">
              gap-4
            </div>
            <div className="rounded border border-rose-400 bg-gradient-to-r from-rose-200 to-rose-300 p-2 text-xs">
              gap-4
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="rounded border border-rose-500 bg-gradient-to-r from-rose-300 to-rose-400 p-2 text-xs text-black">
              gap-8
            </div>
            <div className="rounded border border-rose-500 bg-gradient-to-r from-rose-300 to-rose-400 p-2 text-xs text-black">
              gap-8
            </div>
            <div className="rounded border border-rose-500 bg-gradient-to-r from-rose-300 to-rose-400 p-2 text-xs text-black">
              gap-8
            </div>
            <div className="rounded border border-rose-500 bg-gradient-to-r from-rose-300 to-rose-400 p-2 text-xs text-black">
              gap-8
            </div>
          </div>
        </div>

        {/* Grid Areas */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Grid Areas Layout Example</h3>
          <div className="grid h-64 grid-cols-4 grid-rows-3 gap-4">
            <div className="col-span-4 flex items-center justify-center rounded-lg border border-amber-300 bg-gradient-to-r from-amber-100 to-amber-200 p-4 shadow-sm">
              <span className="font-semibold text-amber-800">🏠 Header (col-span-4)</span>
            </div>
            <div className="col-span-1 flex items-center justify-center rounded-lg border border-amber-400 bg-gradient-to-b from-amber-200 to-amber-300 p-4 shadow-sm">
              <span className="text-sm font-semibold text-amber-800">📋 Sidebar</span>
            </div>
            <div className="col-span-2 flex items-center justify-center rounded-lg border border-amber-500 bg-gradient-to-b from-amber-300 to-amber-400 p-4 shadow-sm">
              <span className="font-semibold text-black">📄 Main Content</span>
            </div>
            <div className="col-span-1 flex items-center justify-center rounded-lg border border-amber-600 bg-gradient-to-b from-amber-400 to-amber-500 p-4 text-black shadow-sm">
              <span className="text-sm font-semibold">ℹ️ Aside</span>
            </div>
            <div className="col-span-4 flex items-center justify-center rounded-lg border border-amber-700 bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-black shadow-sm">
              <span className="font-semibold">🦶 Footer (col-span-4)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
