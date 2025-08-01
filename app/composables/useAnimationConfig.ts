import { useReducedMotion, type Variant } from '@vueuse/motion'

/**
 * Simplified global animation configuration
 * Respects user motion preferences automatically
 */
export const useAnimationConfig = () => {
  const prefersReducedMotion = useReducedMotion()

  // Motion-safe animation helper
  const motionSafe = (animation: Variant): Variant => {
    return prefersReducedMotion.value ? { opacity: 1 } : animation
  }

  return {
    // Core animations
    fade: {
      initial: motionSafe({ opacity: 0 }),
      visibleOnce: motionSafe({ opacity: 1 })
    },

    slideUp: {
      initial: motionSafe({ opacity: 0, y: 30 }),
      visibleOnce: motionSafe({ opacity: 1, y: 0 })
    },

    scale: {
      initial: motionSafe({ opacity: 0, scale: 0.9 }),
      visibleOnce: motionSafe({ opacity: 1, scale: 1 })
    },

    scaleDown: {
      initial: motionSafe({ opacity: 0, scale: 2 }),
      visibleOnce: motionSafe({ opacity: 1, scale: 1 })
    },

    delayed: (animation: Variant, delay: number) => motionSafe({
      ...animation,
      transition: { delay }
    }),
  }
}
