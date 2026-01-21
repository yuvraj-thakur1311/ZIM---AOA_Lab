import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { Badge } from "../components/ui/badge";
import { orders } from "../data/order";

export default function OrdersTable() {
  return (
    <div className="rounded-lg border bg-white dark:bg-black ">
      <Table>
        <TableHeader>
          <TableRow className="bg-black hover:bg-black mb-5">
            <TableHead className="text-white ">Order ID</TableHead>
            <TableHead className="text-white">Case Type</TableHead>
            <TableHead className="text-white">Shade</TableHead>
            <TableHead className="text-white">Tooth</TableHead>
            <TableHead className="text-white">Priority</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Order Date</TableHead>
            <TableHead className="text-white">Delivery</TableHead>
            <TableHead className=" text-white">Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.order_id}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <TableCell className="font-medium">{order.order_id}</TableCell>
              <TableCell className="text-center">{order.case_type}</TableCell>
              <TableCell>{order.shade?order.shade:"-"}</TableCell>
              <TableCell className="text-center">{order.tooth_numbers.length!==0?order.tooth_numbers.join(", "):"-"}</TableCell>
              <TableCell>
                <Badge variant="outline">{order.priority}</Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "In Production" ? "default" : "secondary"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(order.order_date).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(order.expected_delivery).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right font-medium">
                ₹{order.billing.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
