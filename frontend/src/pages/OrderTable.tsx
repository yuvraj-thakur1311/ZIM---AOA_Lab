import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { Badge } from "../components/ui/badge";
import { orders } from "../data/order"

export default function OrdersTable() {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Case Type</TableHead>
            <TableHead>Shade</TableHead>
            <TableHead>Tooth</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Delivery</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.order_id}>
              <TableCell className="font-medium">
                {order.order_id}
              </TableCell>

              <TableCell>{order.case_type}</TableCell>
              <TableCell>{order.shade}</TableCell>

              <TableCell>
                {order.tooth_numbers.join(", ")}
              </TableCell>

              <TableCell>
                <Badge variant="outline">{order.priority}</Badge>
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    order.status === "In Production"
                      ? "default"
                      : "secondary"
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
