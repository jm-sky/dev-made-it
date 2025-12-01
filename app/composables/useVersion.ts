export const useVersion = () => {
  const version = (import.meta.env.VITE_VERSION ?? '1.0.0') as string
  const buildDateRaw = import.meta.env.VITE_BUILD_DATE as string | undefined

  const buildDateDate = buildDateRaw ? new Date(buildDateRaw) : undefined
  const buildDate = buildDateDate ? `${buildDateDate.toLocaleDateString()} ${buildDateDate.toLocaleTimeString()}` : 'some time ago'

  return {
    version,
    buildDate,
  }
}
