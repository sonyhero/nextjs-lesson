import { API } from '../../assets/api/api'
import { CharacterType, ResponseAppType } from '../../assets/api/rick-and-morty-api'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import { CharacterCard } from '../../components/Card/CharacterCard/CharacterCard'
import { getBaseLayout } from '../../components/Layout/BaseLayout/BaseLayout'

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters()
  return {
    props: {
      characters,
    },
  }
}

type PropsType = {
  characters: ResponseAppType<CharacterType>
}

const Characters = (props: PropsType) => {
  const { characters } = props

  const charactersList = characters.results.map((c) => <CharacterCard key={c.id} character={c} />)
  return <PageWrapper>{charactersList}</PageWrapper>
}
Characters.getLayout = getBaseLayout
export default Characters
