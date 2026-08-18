import birth from './images/birth.avif'
import birthday from './images/birthday.jpg'
import cake1 from './images/cake1.jpg'
import cake2 from './images/cake2.jpg'
import cake3 from './images/cake3.jpg'
import cake4 from './images/cake4.jpg'
import cake5 from './images/cake5.webp'
import cake6 from './images/cake6.jpg'
import decor from './images/decor.webp'
import decor2 from './images/decor2.jpg'
import deliv from './images/deliv.jpg'
import deliv1 from './images/deliv1.jpg'
import flower from './images/flower.jpg'
import flower1 from './images/flower1.jpg'
import gift from './images/gift.jpg'
import gift1 from './images/gift1.jpg'
import gift2 from './images/gift2.jpg'
import logo from './images/logo.jpg'
import party from './images/party.webp'

const imageMap = {
  'birth.avif': birth,
  'birthday.jpg': birthday,
  'cake1.jpg': cake1,
  'cake2.jpg': cake2,
  'cake3.jpg': cake3,
  'cake4.jpg': cake4,
  'cake5.webp': cake5,
  'cake6.jpg': cake6,
  'decor.webp': decor,
  'decor2.jpg': decor2,
  'deliv.jpg': deliv,
  'deliv1.jpg': deliv1,
  'flower.jpg': flower,
  'flower1.jpg': flower1,
  'gift.jpg': gift,
  'gift1.jpg': gift1,
  'gift2.jpg': gift2,
  'logo.jpg': logo,
  'party.webp': party,
}

export const img = (name) => imageMap[name] || logo

export default imageMap
