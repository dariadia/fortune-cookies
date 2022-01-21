export type Rune = keyof typeof ANGLO_SAXON_RUNES

export const ANGLO_SAXON_RUNES = {
  feh: { unicode: 'ᚠ', meaning: 'wealth, cattle', letter: 'f' },
  ur: { unicode: 'ᚢ', meaning: 'aurochs', letter: 'u' },
  ðorn: { unicode: 'ᚦ', meaning: 'thorn', letter: 'þ' },
  os: { unicode: 'ᚩ', meaning: 'Æsir, gods', letter: 'o' },
  rada: { unicode: 'ᚱ', meaning: 'riding', letter: 'r' },
  cen: { unicode: 'ᚳ', meaning: 'torch', letter: 'c' },
  geofu: { unicode: 'ᚷ', meaning: 'gift', letter: 'g' },
  wyn: { unicode: 'ᚹ', meaning: 'mirth', letter: 'w' },
  hægil: { unicode: 'ᚻ', meaning: 'hail', letter: 'h' },
  næd: { unicode: 'ᚾ', meaning: 'need, plight', letter: 'n' },
  is: { unicode: 'ᛁ', meaning: 'ice', letter: 'i' },
  gær: { unicode: 'ᛡ/ᛄ', meaning: 'year', letter: 'j' },
  ih: { unicode: 'ᛇ', meaning: 'yew tree', letter: 'ʒ' },
  peord: { unicode: 'ᛈ', meaning: '(unknown)', letter: 'p' },
  ilcs: { unicode: 'ᛉ', meaning: 'elk', letter: 'x' },
  sygil: { unicode: 'ᛋ/ᚴ', meaning: 'sun/sail', letter: 's' },
  ti: { unicode: 'ᛏ', meaning: 'Tiw/Mars', letter: 't' },
  berc: { unicode: 'ᛒ', meaning: 'birch tree', letter: 'b' },
  eh: { unicode: 'ᛖ', meaning: 'steed', letter: 'e' },
  mon: { unicode: 'ᛗ', meaning: 'man', letter: 'm' },
  lagu: { unicode: 'ᛚ', meaning: 'lake', letter: 'l' },
  ing: { unicode: 'ᛝ', meaning: 'Ing', letter: 'ŋ' },
  oedil: {
    unicode: 'ᛟ',
    meaning: 'inherited land, native country',
    letter: 'œ',
  },
  dæg: { unicode: 'ᛞ', meaning: 'day', letter: 'd' },
  ac: { unicode: 'ᚪ', meaning: 'oak tree', letter: 'a' },
  æsc: { unicode: 'ᚫ', meaning: 'ash tree', letter: 'æ' },
  ear: { unicode: 'ᛠ', meaning: 'grave soil', letter: 'ea' },
  yr: { unicode: 'ᚣ', meaning: 'yewen bow', letter: 'y' },
}

export const ANGLO_SAXON_RUNES_COUNT = Object.keys(ANGLO_SAXON_RUNES).length

export const ANGLO_SAXON_RUNES_NAMES = Object.keys(ANGLO_SAXON_RUNES)
