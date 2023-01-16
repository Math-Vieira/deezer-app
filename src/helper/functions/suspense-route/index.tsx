import { Suspense } from 'react'
import LoadingScreen from '../../components/LoadingScreen'

const SuspenseRoute = (screen: JSX.Element): JSX.Element => {
  return <Suspense fallback={<LoadingScreen />}>{screen}</Suspense>
}

export default SuspenseRoute
