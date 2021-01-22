import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Welcome from '../components/Welcome'

function QMS(props) {
    const router = useRouter()
    return (
        <Layout route={router.query} subComponents={[<Welcome key="c1" />]} />
    )
}

export default QMS
