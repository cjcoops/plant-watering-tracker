import Plant from "./Plant"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_PLANTS = gql`
  query getPlants {
    plants {
      _id
      name
      waterFrequency
      lastWatered
    }
  }
`

const PlantsList = () => {
  const { data, loading } = useQuery(GET_PLANTS)
  if (loading) return <section />
  if (!data.plants.length) return <section />

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-medium">My Plants</h2>
      {data.plants.map((plant, index) => (
        <Plant plant={plant} key={plant._id} index={index} />
      ))}
    </section>
  )
}

export default PlantsList
