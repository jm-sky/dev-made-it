import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/80',
        primary: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/80',
        destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-12 rounded-md px-8 py-3 has-[>svg]:px-4',
        icon: 'size-9',
      },
      vibe: {
        primary: 'text-shadow-sm dark:text-shadow-none font-semibold relative overflow-hidden shadow-2xl duration-300 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-200 before:ease-out hover:text-primary hover:shadow-primary-800/50 dark:hover:shadow-primary-300/50 hover:before:h-56 hover:before:w-56 hover:before:blur-md hover:scale-110 hover:ring',
        outline: 'duration-200 hover:outline-2 hover:bg-white outline-primary-500 outline-offset-4 hover:ring hover:ring-primary hover:scale-105 hover:text-primary hover:shadow-2xl hover:shadow-primary-800/50 dark:hover:shadow-primary-300/50',
        underline: 'rounded-b-none relative before:absolute before:bottom-0 before:rounded-md before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:text-primary hover:bg-transparent dark:hover:bg-transparent',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
