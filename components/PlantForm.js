import { useState } from "react"

const PlantForm = () => {
  const [name, setName] = useState("")
  const [waterFrequency, setWaterFrequency] = useState(5)

  const handleSubmit = event => {
    console.log(name, waterFrequency)
    event.preventDefault()
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-medium">Add a new plant</h2>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="w-64">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Plant Name
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            id="name"
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="water-frequency"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Water Frequency
          </label>
          <div className="inline-block relative w-64">
            <select
              value={waterFrequency}
              onChange={e => setWaterFrequency(e.target.value)}
              id="water-frequency"
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Button
          </button>
          <button
            type="reset"
            className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}

export default PlantForm
