import Layout from "../components/Layout"
import { withApollo } from "../lib/apollo"
import PlantsList from "../components/PlantsList"
import PlantForm from "../components/PlantForm"

const Home = () => {
  return (
    <Layout>
      <h1 className="text-5xl text-center font-bold">Plant Water Tracker</h1>
      <PlantForm />
      <PlantsList />
    </Layout>
  )
}

export default withApollo(Home)
