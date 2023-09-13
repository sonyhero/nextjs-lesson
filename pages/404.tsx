import { PageWrapper } from '../components/PageWrapper/PageWrapper'
import { getBaseLayout } from '../components/Layout/BaseLayout/BaseLayout'

const NotFound = () => {
  return <PageWrapper>404 not found</PageWrapper>
}
NotFound.getLayout = getBaseLayout
export default NotFound
