import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

type iBillingPrope = {
  price?: string;
};

export default function Billing_info({ price }: iBillingPrope) {
  return (
    <Card
      className="
        border-l-4 border-l-emerald-500
        bg-emerald-50/40 dark:bg-emerald-950/20
        shadow-sm
      "
    >
      <CardHeader className="pb-3">
        <CardTitle
          className="
            text-sm font-semibold uppercase
            text-emerald-700 dark:text-emerald-400
          "
        >
          💳 Billing
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-6 text-sm">
        {/* Payment Status */}
        <div className="space-y-1">
          <p className="font-medium text-emerald-700 dark:text-emerald-300">
            Payment Status
          </p>
          <Badge
            className="
              bg-amber-400/90 text-amber-900
              hover:bg-amber-400
            "
          >
            Pending
          </Badge>
        </div>

        {/* Amount */}
        <div className="space-y-1">
          <p className="font-medium text-emerald-700 dark:text-emerald-300">
            Amount
          </p>
          <p className="text-emerald-900/80 dark:text-emerald-200 text-base font-semibold">
            ₹{price || "—"} <span className="text-sm font-normal">INR</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
