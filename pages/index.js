import Layout from "../components/Layout"
import { withApollo } from "../lib/apollo"
import PlantsList from "../components/PlantsList"
import PlantForm from "../components/PlantForm"
import WateringCan from "../public/can.svg"

const Home = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-5xl  font-bold">Plant Water Tracker</h1>
        <WateringCan className="h-16 ml-6" />
      </div>
      <PlantForm />
      <PlantsList />
    </Layout>
  )
}

export default withApollo(Home)
