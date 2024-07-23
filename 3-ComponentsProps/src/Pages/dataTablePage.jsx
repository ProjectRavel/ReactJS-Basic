
export default function DataTable({ items, total }) {
  const removeItemLocalStorage = (e) => {
    e.preventDefault();
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <div className="mt-12 ">
      <div className="container mx-auto p-8">
        <h1 className="text-center text-3xl font-bold text-blue-500 mb-8">
          Cart Page
        </h1>
        <div className="max-w-4xl mx-auto">
          {items.length > 0 ? (
            <>
              <h2 className="text-lg font-semibold mb-4">Cart Items:</h2>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Item
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-300">
                      {items.map((item) => (
                        <tr key={item.name}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.qty}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              ${item.price * item.qty}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                      <tr>
                        <td
                          className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                          colSpan={2}
                        >
                          Total
                        </td>
                        <td className="px-6 py-3 text-left font-medium text-gray-700 uppercase">
                          ${parseFloat(total).toFixed(2)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="mt-5 text-center">
                <form onSubmit={removeItemLocalStorage}>
                  <button
                    type="submit"
                    className="bg-red-600 px-4 py-2 rounded-full text-white font-medium hover:bg-red-700 transition duration-300"
                  >
                    Remove all
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-lg font-semibold text-gray-500">
                Your Cart is empty.
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
