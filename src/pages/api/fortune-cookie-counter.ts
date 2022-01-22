import fortuneCookieWishes from './fortune-cookie-wishes.json'

export default function handler(
  // eslint-disable-next-line
  // @ts-ignore
  req: any,
  res: {
    status: (
      arg0: number,
    ) => { (): any; new (): any; json: { (arg1: number): void; new (): any } }
  },
): void {
  res.status(200).json(fortuneCookieWishes.length)
}
