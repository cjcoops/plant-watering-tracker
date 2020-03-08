import Plant from "./Plant"

// query {
//     plants {
//       _id
//       name
//       waterFrequency
//     }
//   }

const PlantsList = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-medium">My Plants</h2>
      <Plant />
      <Plant />
      <Plant />
    </section>
  )
}

export default PlantsList
