import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
    priority === "HIGH"
      ? "bg-red-500/90 text-white"
      : priority === "STANDARD"
        ? "bg-amber-400 text-amber-900"
        : "bg-slate-300 text-slate-900";
  console.log("g");

  return (
    <Card
      className="
        border-l-4 border-l-slate-400
         bg-gray-300
        shadow-sm
      "
    >
      <CardHeader className="pb-3 ">
        <CardTitle
          className="
            text-sm font-semibold uppercase
            text-slate-700 dark:text-slate-300
          "
        >
          <div className="flex flex-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-5 w-5"
            >
              <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z" />
            </svg>
            <p>General Information</p>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
        <div>
          <div className="flex flex-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 640 640"
            >
              <path d="M278.7 64.7C296 68.4 307 85.4 303.3 102.7L284.2 192L410.7 192L432.7 89.3C436.4 72 453.4 61 470.7 64.7C488 68.4 499 85.4 495.3 102.7L476.2 192L544 192C561.7 192 576 206.3 576 224C576 241.7 561.7 256 544 256L462.4 256L435 384L502.8 384C520.5 384 534.8 398.3 534.8 416C534.8 433.7 520.5 448 502.8 448L421.2 448L399.2 550.7C395.5 568 378.5 579 361.2 575.3C343.9 571.6 332.9 554.6 336.6 537.3L355.7 448L229.2 448L207.2 550.7C203.5 568 186.5 579 169.2 575.3C151.9 571.6 140.9 554.6 144.6 537.3L163.8 448L96 448C78.3 448 64 433.7 64 416C64 398.3 78.3 384 96 384L177.6 384L205 256L137.2 256C119.5 256 105.2 241.7 105.2 224C105.2 206.3 119.5 192 137.2 192L218.8 192L240.8 89.3C244.4 72 261.4 61 278.7 64.7zM270.4 256L243 384L369.5 384L396.9 256L270.4 256z" />
            </svg>
            <p className="font-medium text-slate-600 dark:text-slate-400">
              Order ID
            </p>
          </div>
          <p className="text-slate-900 dark:text-slate-200">{order_id}</p>
        </div>

        <div>
          <div className="flex flex-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 640 640"
            >
              <path d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z" />
            </svg>
            <p className="font-medium text-slate-600 dark:text-slate-400">
              Case Type
            </p>
          </div>
          <p className="text-slate-900 dark:text-slate-200">{case_type}</p>
        </div>
        <div>
          <div className="flex flex-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-4 w-4"
            >
              <path d="M197.8 100.3C208.7 107.9 211.3 122.9 203.7 133.7L147.7 213.7C143.6 219.5 137.2 223.2 130.1 223.8C123 224.4 116 222 111 217L71 177C61.7 167.6 61.7 152.4 71 143C80.3 133.6 95.6 133.7 105 143L124.8 162.8L164.4 106.2C172 95.3 187 92.7 197.8 100.3zM197.8 260.3C208.7 267.9 211.3 282.9 203.7 293.7L147.7 373.7C143.6 379.5 137.2 383.2 130.1 383.8C123 384.4 116 382 111 377L71 337C61.6 327.6 61.6 312.4 71 303.1C80.4 293.8 95.6 293.7 104.9 303.1L124.7 322.9L164.3 266.3C171.9 255.4 186.9 252.8 197.7 260.4zM288 160C288 142.3 302.3 128 320 128L544 128C561.7 128 576 142.3 576 160C576 177.7 561.7 192 544 192L320 192C302.3 192 288 177.7 288 160zM288 320C288 302.3 302.3 288 320 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L320 352C302.3 352 288 337.7 288 320zM224 480C224 462.3 238.3 448 256 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L256 512C238.3 512 224 497.7 224 480zM128 440C150.1 440 168 457.9 168 480C168 502.1 150.1 520 128 520C105.9 520 88 502.1 88 480C88 457.9 105.9 440 128 440z" />
            </svg>
            <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
              Priority
            </p>
          </div>
          <Badge className={priorityColor}>{priority}</Badge>
        </div>

        <div>
          <div className="flex flex-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-4 w-4"
            >
              <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z" />
            </svg>
            <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
              Status
            </p>
          </div>
          <Badge className={statusColor}>{status}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
