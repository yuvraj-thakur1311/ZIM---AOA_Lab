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
} from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
// import { orders } from "../data/order";
import { BsThreeDotsVertical } from "react-icons/bs";
import GeneralInfo from "../components/orderSheetDetail/general_info";
import Requirments_info from "../components/orderSheetDetail/requirements_info";
import File_info from "../components/orderSheetDetail/file_info";
import Billing_info from "../components/orderSheetDetail/billing_info";
import Shipping from "../components/orderSheetDetail/shipping_info";
import { useEffect, useState } from "react";

export interface iOrders {
  order_id: string;
  clinic_id: string;
  doctor_id: string;
  patient_id: string;
  case_type: string;
  shade: string;
  tooth_numbers: string[];
  priority: string;
  status: string;
  order_date: string;
  expected_delivery: string;
  design_notes: string;
}

export interface OrderFile {
  id: string;
  order_id: string;
  file_type: string;
  file_name: string;
}

export interface OrderMaterial {
  id: number;
  order_id: string;
  material_key: string;
  material_value: string;
}

export interface OrderBilling {
  order_id: string;
  payment_status: string;
  price: string;
  currency: string;
}

export interface OrderShipping {
  order_id: string;
  method: string;
  address: string;
  tracking_number: string;
}

export interface iOrderDetail {
  order: iOrders;
  files: OrderFile[];
  materials: OrderMaterial[];
  billing: OrderBilling;
  shipping: OrderShipping;
}

export default function OrdersTable() {
  const [orders, setOrders] = useState<iOrders[]>([]);
  const [ordersDetail, setOrdersDetail] = useState<iOrderDetail | null>(null);

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const responce = await fetch("http://localhost:3000/orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!responce.ok) {
          throw new Error(`HTTP error! Status: ${responce.status}`);
        }
        const data = await responce.json();
        setOrders(data.data);
        console.log(data.data);

        return data.data;
      } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
      }
    };
    getOrderList();
  }, []);
  const hendatOrderDetailAction = (orderId: string) => {
    const getOrderList = async () => {
      try {
        const responce = await fetch(
          `http://localhost:3000/orders/orderInfo?order_id=${orderId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (!responce.ok) {
          throw new Error(`HTTP error! Status: ${responce.status}`);
        }
        const data = await responce.json();
        setOrdersDetail(data.data);
        console.log(data.data);

        return data.data;
      } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
      }
    };
    getOrderList();
  };
  return (
    <div className="bg-white dark:bg-black  border rounded-xl overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-300 overflow-hidden">
          <TableRow className="">
            <TableHead className="text-black ">Order ID</TableHead>
            <TableHead className="text-black">Case Type</TableHead>
            <TableHead className="text-black ">Priority</TableHead>
            <TableHead className="text-black ">Status</TableHead>
            <TableHead className="text-black ">Order Date</TableHead>
            <TableHead className="text-black ">Delivery</TableHead>
            <TableHead className="text-black">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center">
          {orders.map((order) => (
            <Sheet key={order.order_id}>
              <TableRow className="">
                <TableCell className="font-medium text-left">
                  {order.order_id}
                </TableCell>
                <TableCell className="text-left">{order.case_type}</TableCell>

                <TableCell className="text-left">
                  <Badge variant="outline" className="bg-gray-300">
                    {order.priority.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell className="text-left">
                  <Badge
                    variant={
                      order.status === "In Production" ? "default" : "secondary"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-left">
                  {new Date(order.order_date).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-left">
                  {new Date(order?.expected_delivery).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-left">
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-gray-200"
                      onClick={() => hendatOrderDetailAction(order.order_id)}
                    >
                      <BsThreeDotsVertical />
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="right"
                    className="
    w-[85vw] sm:w-[65vw] lg:w-[42vw]
    bg-white dark:bg-neutral-950
    border-l
    p-0
    overflow-hidden
  "
                  >
                    {/* Header */}
                    <div className="sticky top-0 z-10 bg-white dark:bg-neutral-950 border-b px-6">
                      <SheetHeader className="  ">
                        <SheetTitle className="text-lg font-semibold ">
                          Order Details
                        </SheetTitle>
                        <SheetDescription className="text-sm text-muted-foreground">
                          Order ID: {order.order_id}
                        </SheetDescription>
                      </SheetHeader>
                    </div>

                    {/* Content */}
                    <div className="px-6  space-y-6 overflow-y-auto h-[calc(100vh-80px)] ">
                      <section className="space-y-3">
                        <GeneralInfo
                          order_id={order.order_id}
                          case_type={order.case_type}
                          priority={order.priority.toUpperCase()}
                          status={order.status}
                        />
                      </section>

                      <section className="space-y-3">
                        <Requirments_info
                          materials={ordersDetail?.materials}
                          shade={ordersDetail?.order.shade}
                          tooth_numbers={ordersDetail?.order.tooth_numbers}
                        />
                      </section>

                      <section className="space-y-3">
                        <File_info files={ordersDetail?.files} />
                      </section>

                      <section className="space-y-3">
                        <Billing_info price={ordersDetail?.billing?.price} />
                      </section>

                      <section className="space-y-3">
                        <Shipping
                          address={ordersDetail?.shipping.address}
                          method={ordersDetail?.shipping.method}
                          note={ordersDetail?.order.design_notes}
                        />
                      </section>
                    </div>
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
