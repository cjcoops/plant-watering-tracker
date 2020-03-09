const Plant = ({ plant }) => {
  return (
    <article className="mt-4">
      <h3 className="text-xl font-medium">{plant.name}</h3>
      <p>3 days until next water</p>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Water! 💦
      </button>
    </article>
  )
}

export default Plant
