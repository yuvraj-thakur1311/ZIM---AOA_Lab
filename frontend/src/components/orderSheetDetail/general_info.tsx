import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

interface iGeneralInfoProp {
  order_id: string;
  case_type: string;
  priority: string;
  status: string;
}

export default function GeneralInfo({
  order_id,
  case_type,
  status,
  priority,
}: iGeneralInfoProp) {

  const statusColor =
    status === "In Production"
      ? "bg-green-500/90 text-white"
      : status === "Pending"
      ? "bg-amber-400 text-amber-900"
      : "bg-slate-500/80 text-white";

  const priorityColor =
    priority === "High"
      ? "bg-red-500/90 text-white"
      : priority === "Medium"
      ? "bg-amber-400 text-amber-900"
      : "bg-slate-300 text-slate-900";

  return (
    <Card
      className="
        border-l-4 border-l-slate-400
        bg-slate-50/50 dark:bg-slate-950/30
        shadow-sm
      "
    >
      <CardHeader className="pb-3">
        <CardTitle
          className="
            text-sm font-semibold uppercase
            text-slate-700 dark:text-slate-300
          "
        >
          General Information
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">

        <div>
          <p className="font-medium text-slate-600 dark:text-slate-400">
            Order ID
          </p>
          <p className="text-slate-900 dark:text-slate-200">
            {order_id}
          </p>
        </div>

        <div>
          <p className="font-medium text-slate-600 dark:text-slate-400">
            Case Type
          </p>
          <p className="text-slate-900 dark:text-slate-200">
            {case_type}
          </p>
        </div>

        <div>
          <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
            Priority
          </p>
          <Badge className={priorityColor}>
            {priority}
          </Badge>
        </div>

        <div>
          <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
            Status
          </p>
          <Badge className={statusColor}>
            {status}
          </Badge>
        </div>

      </CardContent>
    </Card>
  );
}
