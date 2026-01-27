import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

type iShipping = {
  address?: string;
  method?: string;
  note?: string;
};

export default function Shipping({ address, method, note }: iShipping) {
  return (
    <div className="space-y-4">

      {/* Shipping Info */}
      <Card className="
        border-l-4 border-l-blue-500
        bg-blue-50/40 dark:bg-blue-950/20
        shadow-sm
      ">
        <CardHeader className="pb-3">
          <CardTitle className="
            text-sm font-semibold uppercase
            text-blue-700 dark:text-blue-400
          ">
            Shipping
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-sm">
          <div className="grid grid-cols-3 gap-2">
            <p className="font-medium text-blue-700 dark:text-blue-300">
              Method
            </p>
            <p className="col-span-2 text-blue-900/80 dark:text-blue-200">
              {method || "—"}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <p className="font-medium text-blue-700 dark:text-blue-300">
              Address
            </p>
            <p className="col-span-2 text-blue-900/80 dark:text-blue-200 leading-relaxed">
              {address || "—"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Design Notes */}
      <Card className="
        border-l-4 border-l-purple-500
        bg-purple-50/40 dark:bg-purple-950/20
        shadow-sm
      ">
        <CardHeader className="pb-3">
          <CardTitle className="
            text-sm font-semibold uppercase
            text-purple-700 dark:text-purple-400
          ">
            Design Notes
          </CardTitle>
        </CardHeader>

        <CardContent className="text-sm text-purple-900/80 dark:text-purple-200 leading-relaxed">
          {note || "No design notes provided."}
        </CardContent>
      </Card>

    </div>
  );
}
