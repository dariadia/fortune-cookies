export const getTimeInSeconds = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}): number => seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60

export const getHoursFromSeconds = (seconds: number): number =>
  Math.round(seconds / 60 / 60)

export const getTimeTillMidnight = (): number => {
  const midnight = new Date()
  midnight.setHours(24)
  midnight.setMinutes(0)
  midnight.setSeconds(0)
  midnight.setMilliseconds(0)
  return Math.round((midnight.getTime() - new Date().getTime()) / 1000)
}
