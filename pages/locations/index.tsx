import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { LocationType, ResponseAppType } from '../../assets/api/rick-and-morty-api'
import { Card } from '../../components/Card/Card'
import { getBaseLayout } from '../../components/Layout/BaseLayout/BaseLayout'

const getLocations = () => {
  return fetch('https://rickandmortyapi.com/api/location', {
    method: 'GET',
  }).then((res) => res.json())
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(['locations'], getLocations)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Locations = () => {
  const { data: locations } = useQuery<ResponseAppType<LocationType>>(['locations'], getLocations)
  if (!locations) return null

  const locationsList = locations.results.map((l) => <Card key={l.id} name={l.name} />)
  return <PageWrapper>{locationsList}</PageWrapper>
}
Locations.getLayout = getBaseLayout
export default Locations
