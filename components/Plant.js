import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"

const WATER_PLANT = gql`
  mutation waterPlant($plantId: ID, $date: Date) {
    waterPlant(plantId: $plantId, date: $date) {
      _id
      name
      waterFrequency
    }
  }
`

const Plant = ({ plant }) => {
  const [waterPlant] = useMutation(WATER_PLANT, {
    refetchQueries: ["getPlants"]
  })

  const daysUntilNextWater = getDaysUntilNextWater(plant)

  return (
    <article className="mt-4">
      <h3 className="text-xl font-medium">{plant.name}</h3>
      <p>{daysUntilNextWater} days until next water</p>
      <button
        onClick={() =>
          waterPlant({ variables: { plantId: plant._id, date: new Date() } })
        }
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Water! 💦
      </button>
    </article>
  )
}

const getDaysUntilNextWater = ({ lastWatered, waterFrequency }) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const msSinceLastWater = today.getTime() - lastWatered
  const daysSinceLastWater = msSinceLastWater / (1000 * 60 * 60 * 24)

  return Math.ceil(waterFrequency - daysSinceLastWater)
}

export default Plant
