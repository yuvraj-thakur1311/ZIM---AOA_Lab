import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge";
import { orders } from "../data/order";
import { BsThreeDotsVertical } from "react-icons/bs";
import GeneralInfo from "../components/orderSheetDetail/general_info"
export default function OrdersTable() {
  return (
    <div className="rounded-lg border bg-white dark:bg-black ">
      <Table>
        <TableHeader  className="border-b border-gray-400">
          <TableRow className="bg-black hover:bg-black mb-5">
            <TableHead className="text-white ">Order ID</TableHead>
            <TableHead className="text-white text-white border-l-1 border-gray-400">Case Type</TableHead>
            <TableHead className="text-white border-l-1 border-gray-400">Priority</TableHead>
            <TableHead className="text-white border-l-1 border-gray-400">Status</TableHead>
            <TableHead className="text-white border-l-1 border-gray-400">Order Date</TableHead>
            <TableHead className="text-white border-l-1 border-gray-400">Delivery</TableHead>
            <TableHead className=" text-white border-l-1 border-gray-400">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <Sheet>
            <TableRow
              key={order.order_id}
              className="hover:bg-gray-200 transition-colors"
            >
              <TableCell className="font-medium">{order.order_id}</TableCell>
              <TableCell className="text-left">{order.case_type}</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-gray-300">{order.priority}</Badge>
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
              <TableCell>
                <SheetTrigger>
                  <Button variant="outline" className="bg-gray-200">
                  
                    <BsThreeDotsVertical />
                  
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[80vw] sm:w-[60vw] lg:w-[40vw] overflow-y-auto "> 
                  <SheetHeader>
                  Oreder Detail/{order.order_id}
                  <GeneralInfo order_id={order.order_id} case_type={order.case_type} priority={order.priority} status={order.status}></GeneralInfo>
                  </SheetHeader>
                  </SheetContent>
              </TableCell>
            </TableRow>
            </Sheet>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}