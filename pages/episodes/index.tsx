import { API } from '../../assets/api/api'
import { EpisodeType, ResponseAppType } from '../../assets/api/rick-and-morty-api'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import { Card } from '../../components/Card/Card'
import { getBaseLayout } from '../../components/Layout/BaseLayout/BaseLayout'

export const getServerSideProps = async () => {
  const episodes = await API.rickAndMorty.getEpisodes()

  if (!episodes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      episodes,
    },
  }
}

type PropsType = {
  episodes: ResponseAppType<EpisodeType>
}

const Episodes = (props: PropsType) => {
  const { episodes } = props

  const episodesList = episodes.results.map((e) => <Card key={e.id} name={e.name} />)
  return <PageWrapper>{episodesList}</PageWrapper>
}
Episodes.getLayout = getBaseLayout
export default Episodes
