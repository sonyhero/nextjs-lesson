import { CharacterStatusType } from '../../../assets/api/rick-and-morty-api'
import Image, { StaticImageData } from 'next/image'

type PropsType = {
  status: CharacterStatusType
  src: StaticImageData
}
export const Status = (props: PropsType) => {
  const { status, src } = props
  return <Image src={src} alt={`character ${status}`} width={20} height={20} />
}
