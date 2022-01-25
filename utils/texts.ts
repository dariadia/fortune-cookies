export const truncateText = ({
  text,
  maxWords = 10,
}: {
  text: string
  maxWords?: number
}): string => `${text.split(' ').slice(0, maxWords).join(' ')}...`
