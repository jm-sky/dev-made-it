export const useVersion = () => {
  const version = (import.meta.env.VITE_VERSION ?? '1.0.0') as string
  const buildDateRaw = import.meta.env.VITE_BUILD_DATE as string | undefined

  const buildDateDate = buildDateRaw ? new Date(buildDateRaw) : undefined
  
  // Format date consistently: YYYY-MM-DD HH:mm:ss
  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }
  
  const buildDate = buildDateDate ? formatDate(buildDateDate) : 'some time ago'

  return {
    version,
    buildDate,
  }
}
