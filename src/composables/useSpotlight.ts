import { computed, Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

export const useSpotlight = (x: Ref<number>, y: Ref<number>, logo?: Ref<HTMLElement | undefined>) => {
  const { width, height } = useWindowSize()
  
  const dx = computed(() => Math.abs(x.value - width.value / 2))
  const dy = computed(() => Math.abs(y.value - height.value / 2))
  const distance = computed(() =>
    Math.sqrt(dx.value * dx.value + dy.value * dy.value)
  )
  
  const size = computed(() => Math.max(300 - distance.value / 3, 150))
  
  const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1))
  
  const logoGradient = computed(() => {
    let rect = logo?.value?.getBoundingClientRect()
    const xPos = x.value - (rect?.left ?? 0)
    const yPos = y.value - (rect?.top ?? 0)
  
    return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`
  })
  
  return {
    size,
    opacity,
    logoGradient,
  }
}
