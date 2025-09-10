import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export type ButtonVariantProps = VariantProps<typeof button>

const button = tv({
  base: 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      primary: 'bg-tahiti-700 text-white hover:bg-tahiti-600 focus:ring-tahiti-700',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus:ring-gray-500',
    },
    size: {
      small: 'px-4 py-2 text-sm',
      large: 'px-8 py-4 text-lg',
      default: 'px-6 py-3 text-base',
    },
    hasIcon: {
      true: 'gap-2',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    hasIcon: false,
  },
})

export interface ButtonProps {
  label: string
  variant?: ButtonVariantProps['variant']
  size?: ButtonVariantProps['size']
  element?: 'button' | 'a'
  type?: 'button' | 'submit' | 'reset'
  url?: string
  icon?: string
  hook?: string
  controls?: string
  className?: string
  attr?: string
  [key: string]: unknown // Allow any additional props
}

export default function Button(props: ButtonProps) {
  const {
    label,
    variant,
    size,
    element = 'button',
    type = 'button',
    url,
    icon,
    hook,
    controls,
    className = '',
    attr,
    ...restProps
  } = props

  // Parse additional attributes from attr prop
  const additionalAttrs = attr
    ? (() => {
        try {
          return JSON.parse(attr)
        } catch (error) {
          console.warn('Invalid JSON in attr prop:', attr, error)
          return {}
        }
      })()
    : {}

  // Common props - merge all props dynamically
  const commonProps = {
    className: button({
      variant,
      size,
      hasIcon: !!icon,
      className: className as string,
    }),
    'data-hook': hook ? `js-hook-${hook}` : undefined,
    'aria-controls': controls,
    ...additionalAttrs,
    ...restProps, // This includes all data-* attributes and any other props
  }

  // Button content component
  const ButtonContent = () => (
    <>
      <span className="button__label">{label}</span>
      {icon && (
        <span className="button__icon">
          {/* Icon would be rendered here - you can use an icon library or SVG */}
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </>
  )

  // Render as button or anchor
  if (element === 'a' && url) {
    return (
      <a href={url} {...commonProps}>
        <ButtonContent />
      </a>
    )
  }

  return (
    <button type={type} {...commonProps}>
      <ButtonContent />
    </button>
  )
}
