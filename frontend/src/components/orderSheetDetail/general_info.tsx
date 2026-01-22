import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Badge } from "../ui/badge";
interface iGeneralInfoProp {
  order_id:string;
  case_type:string;
  priority:string;
  status:string;
}

export default function GeneralInfo({order_id,case_type, status,priority}:iGeneralInfoProp){
    return(<Card>
  <CardHeader>
    <CardTitle>General Information:</CardTitle>
  </CardHeader>

  <CardContent className="grid grid-cols-2 gap-4 text-sm">
    <div>
      <p className="text-muted-foreground">Order ID:</p>
      <p className="font-medium">{order_id}</p>
    </div>

    <div>
      <p className="text-muted-foreground">Case Type:</p>
      <p className="font-medium">{case_type}</p>
    </div>

    <div>
      <p className="text-muted-foreground">Priority:</p>
      <Badge variant="outline">{priority}</Badge>
    </div>

    <div>
      <p className="text-muted-foreground">Status:</p>
      <Badge>{status}</Badge>
    </div>
  </CardContent>
</Card>
)}