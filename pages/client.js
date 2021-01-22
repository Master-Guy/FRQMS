import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import CreateRequest from '../components/CreateRequest'

export async function getStaticProps() {
    const apiURL = '' + process.env.API_URL + 'queue/'
    let queueData = await (await fetch(apiURL)).json()
    return {
        props: {
            queueData,
        },
    }
}

function QMS(props) {
    const router = useRouter()
    return (
        <Layout route={router.query} subComponents={[<CreateRequest key="c1" queueData={props.queueData} />]} />
    )
}

export default QMS
