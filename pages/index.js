import Layout from "../components/Layout"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { withApollo } from "../lib/apollo"
import PlantsList from "../components/PlantsList"
import PlantForm from "../components/PlantForm"

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)
  if (loading) return <section />

  return (
    <Layout>
      <h1 className="text-5xl text-center font-bold">Plant Water Tracker</h1>
      {/* <p>{data.sayHello}</p> */}
      <PlantForm />
      <PlantsList />
    </Layout>
  )
}

export default withApollo(Home)
