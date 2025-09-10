import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export type ButtonVariantProps = VariantProps<typeof button>

export const button = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-tahiti-700 text-white hover:bg-tahiti-600 focus-visible:ring-tahiti-700',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500',
      outline:
        'border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
    },
    size: {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends preact.JSX.ButtonHTMLAttributes {
  /**
   * The variant of the button
   * to determine the styling of the button
   */
  variant?: ButtonVariantProps['variant']
  /**
   * The size of the button
   */
  size?: ButtonVariantProps['size']
}

/**
 * A customizable button component built with tailwind-variants.
 * Provides consistent styling and behavior across the application.
 */
export const Button = ({ className, variant, size, children, ...buttonProps }: ButtonProps) => {
  return (
    <button className={button({ variant, size, className: className as string })} {...buttonProps}>
      {children}
    </button>
  )
}

export const test = () => {
  return (
    <Button variant="primary" size="md">
      Test
    </Button>
  )
}
