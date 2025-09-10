import { cn } from '../../utils/cn'

export default function Counter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 p-4 text-center',
        className,
      )}
      js-hook-module-counter>
      <h2 className="mr-auto text-2xl font-bold text-gray-900">Counter Demo</h2>
      <div className="flex items-center justify-center gap-4 p-4">
        <button
          className="rounded-lg px-6 py-3 text-xl font-bold text-white transition-colors"
          data-on-click="counter::decrement">
          -
        </button>
        <span className="min-w-[80px] text-4xl font-bold text-slate-800" data-counter-display>
          0
        </span>
        <button
          className="rounded-lg px-6 py-3 text-xl font-bold text-white transition-colors"
          data-on-click="counter::increment">
          +
        </button>
      </div>

      <span className="pb-4 text-start text-sm text-black">
        This counter uses the data-on-click syntax for event handling. The buttons work through a
        custom event system that automatically binds click events to data attributes. The counter
        logic is loaded asynchronously and only included in the bundle when this component is used,
        enabling code splitting.
      </span>
    </div>
  )
}
