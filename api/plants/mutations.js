import Plants from "./plants"

export const plantsMutations = {
  Mutation: {
    async addPlant(_, { plant }) {
      try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return await Plants.create({ ...plant, lastWatered: today })
      } catch (error) {
        console.log(error)
      }
    },
    async waterPlant(_, { plantId, date }) {
      try {
        date.setHours(0, 0, 0, 0)
        return await Plants.findOneAndUpdate(
          {
            _id: plantId
          },
          {
            lastWatered: date
          }
        )
      } catch (error) {
        console.log(error)
      }
    }
  }
}
