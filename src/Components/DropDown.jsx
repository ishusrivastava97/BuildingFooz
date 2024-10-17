const DropDown = () => {
  return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-2xl font-bold mb-4">Hoverable Dropdown</h2>
      <p className="mb-8">Move the mouse over the button to open the dropdown menu.</p>

      <div className="relative inline-block text-left">
        <button className=" text-white px-4 py-2 rounded-md text-lg hover:bg-green-800">
          More
        </button>
        <div className="absolute hidden bg-gray-100 shadow-md rounded-md mt-2 w-48 hover:block">
          <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-gray-200 hover:text-black"
          >
            Link 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-gray-200 hover:text-black"
          >
            Link 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-gray-200 hover:text-black"
          >
            Link 3
          </a>
        </div>
      </div>
    </div>
  )
}
export default DropDown