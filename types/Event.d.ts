export interface EventTarget {
  id?: string
  parentNode?: { id: string }
  name?: { value: string }
}

export interface Event {
  preventDefault: () => void
  target: EventTarget
}
