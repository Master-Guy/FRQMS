import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Welcome from '../components/Welcome'

export async function getStaticProps() {
    const apiURL = '' + process.env.API_URL + 'queue/'
    console.log('apiURL: ' + apiURL)
    return {
        props: {
            apiURL,
        },
    }
}

function QMS(props) {
    const router = useRouter()
    return (
        <Layout route={router.query} subComponents={[<Welcome key="c1" />]} />
    )
}

export default QMS
