export const plantsResolvers = {
  Query: {
    async plants() {
      console.log("getting plants")
      return [
        {
          _id: "2345",
          name: "Cactus",
          waterFrequency: 4
        }
      ]
    }
  }
}
