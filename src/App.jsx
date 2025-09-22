import ProductContainer from "./ProductContainer"

function App() {

  return (
    <div className="p-2">
      <h1 className="text-4xl text-amber-500 bg-violet-100 text-center">Product Catalogue</h1>
      <hr className="border-gray-300 my-1"/>
      <button className="border border-yellow-300 rounded-lg p-2">Filter Area</button>
      <hr className="border-gray-300 my-1"/>
      <ProductContainer />
    </div>
  )
}

export default App
