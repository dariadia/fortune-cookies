import fortuneCookieWishes from '../fortune-cookie-wishes.json'
import { FortuneCookie } from 'types'

export default function fortuneCookieWishesHandler(
  req: { query: { id: any }; method: any },
  res: {
    status: (
      arg0: number,
    ) => {
      (): any
      new (): any
      json: {
        (arg1: FortuneCookie): void
        new (): any
      }
      end: { (arg2: string): void; new (): any }
    }
    setHeader: (arg0: string, arg1: string[]) => void
  },
): void {
  const {
    query: { id },
    method,
  } = req

  const fortuneCookieWish = fortuneCookieWishes.filter(
    item => item.id === id,
  )[0]

  switch (method) {
    case 'GET':
      res.status(200).json({ ...fortuneCookieWish })
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
