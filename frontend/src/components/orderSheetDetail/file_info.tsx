import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

interface iFile {
  id: string;
  file_name: string; // contains image URL
  file_type: string; // "scans" | "photos"
  order_id: string;
}

type FileInfoProp = {
  files?: iFile[];
};

export default function File_info({ files }: FileInfoProp) {
  const [preview, setPreview] = useState<string | null>(null);

  const scans = files?.filter((f) => f.file_type === "scans") || [];
  const photos = files?.filter((f) => f.file_type === "photos") || [];

  return (
    <>
      <Card
        className="shadow-sm border-l-4 border-l-gray-500 bg-gray-300
        "
      >
        <CardHeader className="pb-2">
          <CardTitle
            className=" text-sm font-semibold uppercase
            text-gray-800 dark:text-gray-400"
          >
            <div className="flex flex-1 gap-2 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-5 w-5"
              >
                <path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z" />
              </svg>
              <p>Files</p>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-sm ">
          {/* Scans */}
          <div>
            <div className="flex flex-1 gap-2 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-5 w-5"
              >
                <path d="M128 128C128 92.7 156.7 64 192 64L405.5 64C422.5 64 438.8 70.7 450.8 82.7L493.3 125.2C505.3 137.2 512 153.5 512 170.5L512 208L128 208L128 128zM64 320C64 284.7 92.7 256 128 256L512 256C547.3 256 576 284.7 576 320L576 416C576 433.7 561.7 448 544 448L512 448L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 448L96 448C78.3 448 64 433.7 64 416L64 320zM192 480L192 512L448 512L448 416L192 416L192 480zM520 336C520 322.7 509.3 312 496 312C482.7 312 472 322.7 472 336C472 349.3 482.7 360 496 360C509.3 360 520 349.3 520 336z" />
              </svg>
              <p className=" font-medium text-gray-800">Scans</p>
            </div>
            {scans.length ? (
              <ul className="list-disc pl-4 space-y-1 text-gray-800 ml-5">
                {scans.map((file) => (
                  <li key={file.id}>{file.file_name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-gray-800-foreground">
                No scans uploaded
              </p>
            )}
          </div>

          <Separator />

          {/* Photos */}
          <div>
            <div className="flex flex-1 gap-2 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-5 w-5"
              >
                <path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM288 416L352 416C396.2 416 432 451.8 432 496C432 504.8 424.8 512 416 512L224 512C215.2 512 208 504.8 208 496C208 451.8 243.8 416 288 416zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM280 128L360 128C373.3 128 384 138.7 384 152C384 165.3 373.3 176 360 176L280 176C266.7 176 256 165.3 256 152C256 138.7 266.7 128 280 128z" />
              </svg>
              <p className="font-medium text-gray-700">Photos</p>
            </div>
            {photos.length ? (
              <div className="grid grid-cols-3 gap-3 ml-5">
                {photos.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => setPreview(file.file_name)}
                    className="group text-left"
                  >
                    <div className="aspect-square rounded border overflow-hidden bg-muted">
                      <img
                        src={file.file_name}
                        alt="preview"
                        className="h-full w-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <p className="mt-1 text-xs truncate text-muted-foreground">
                      {file.file_name.split("/").pop()}
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-foreground">No photos uploaded</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Image Popup */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setPreview(null)}
        >
          <div className="max-w-3xl max-h-[80vh] p-2 bg-background rounded shadow">
            <img
              src={preview}
              alt="Full Preview"
              className="max-h-[75vh] w-auto rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
