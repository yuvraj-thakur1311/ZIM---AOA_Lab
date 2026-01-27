import OrdersTable from "./OrderTable";

export default function Orders() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Order List</h2>

      <div className="rounded-xl border-2 border-gray-100 overflow-hidden bg-background">
        <OrdersTable />
      </div>
    </div>
  );
}

