import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import CreateRequest from '../components/CreateRequest'

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
        <Layout route={router.query} subComponents={[<CreateRequest key="c1" apiURL={props.apiURL} />]} />
    )
}

export default QMS
