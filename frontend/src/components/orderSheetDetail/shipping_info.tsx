import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type iShipping = {
  address?: string;
  method?: string;
  note?: string;
};

export default function Shipping({ address, method, note }: iShipping) {
  return (
    <div className="space-y-4">
      {/* Shipping Info */}
      <Card
        className="
        border-l-4 border-l-gray-500
        bg-gray-300
        shadow-sm
      "
      >
        <CardHeader className="">
          <CardTitle
            className="
            text-sm font-semibold uppercase
            text-gray-700
          "
          >
            <div className="flex flex-1 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-5 w-5"
              >
                <path d="M32 160C32 124.7 60.7 96 96 96L384 96C419.3 96 448 124.7 448 160L448 192L498.7 192C515.7 192 532 198.7 544 210.7L589.3 256C601.3 268 608 284.3 608 301.3L608 448C608 483.3 579.3 512 544 512L540.7 512C530.3 548.9 496.3 576 456 576C415.7 576 381.8 548.9 371.3 512L268.7 512C258.3 548.9 224.3 576 184 576C143.7 576 109.8 548.9 99.3 512L96 512C60.7 512 32 483.3 32 448L32 160zM544 352L544 301.3L498.7 256L448 256L448 352L544 352zM224 488C224 465.9 206.1 448 184 448C161.9 448 144 465.9 144 488C144 510.1 161.9 528 184 528C206.1 528 224 510.1 224 488zM456 528C478.1 528 496 510.1 496 488C496 465.9 478.1 448 456 448C433.9 448 416 465.9 416 488C416 510.1 433.9 528 456 528z" />
              </svg>
              Shipping
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-sm">
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-1 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-4 w-4"
              >
                <path d="M432 96C387.8 96 352 131.8 352 176L352 424.2L54.8 513.4C37.9 518.4 28.3 536.3 33.4 553.2C38.5 570.1 56.3 579.7 73.2 574.7L388.7 480.1L432.4 480.1C432.2 482.7 432 485.4 432 488.1C432 536.7 471.4 576.1 520 576.1C568.6 576.1 608 536.7 608 488.1L608 96.1L432 96.1zM560 488C560 510.1 542.1 528 520 528C497.9 528 480 510.1 480 488C480 465.9 497.9 448 520 448C542.1 448 559.9 465.9 560 487.9L560 488zM83.9 213.5C50.1 223.8 31.1 259.6 41.4 293.4L69.5 385.2C79.8 419 115.6 438 149.4 427.7L241.2 399.6C275 389.3 294 353.5 283.7 319.7L255.6 227.9C245.3 194.1 209.5 175.1 175.7 185.4L83.9 213.5z" />
              </svg>
              <p className="font-medium text-gray-700">Method</p>
            </div>

            <p className="col-span-2 text-gray-900/80 ">{method || "—"}</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-1 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-4 w-4"
              >
                <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
              </svg>
              <p className="font-medium text-gray-700 dark:text-blue-300">
                Address
              </p>
            </div>
            <p className="col-span-2 text-gray-900/80  leading-relaxed">
              {address || "—"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Design Notes */}
      <Card
        className="
        border-l-4 border-l-gray-500
        bg-gray-300 
        shadow-sm
      "
      >
        <CardHeader className="pb-3">
          <CardTitle
            className="
            text-sm font-semibold uppercase
            text-gray-700 "
          >
            <div className="flex flex-1 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-5 w-5"
              >
                <path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z" />
              </svg>
              <p className="flex item-center"> Design Notes</p>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-sm text-gray-900/80 ">
          {note || "No design notes provided."}
        </CardContent>
      </Card>
    </div>
  );
}
