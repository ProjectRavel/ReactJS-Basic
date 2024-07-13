export default function DataTable({ items }) {
  return (
    <div className="mt-12 bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-center text-3xl font-bold text-blue-500 mb-8">
          Cart Page
        </h1>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Cart Items:</h2>
          <div className="bg-white shadow-md overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-gray-300">
              <thead className="bg-gray-50">
                <tr className="bg-slate-300">
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
                        {(item.price * item.qty).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
