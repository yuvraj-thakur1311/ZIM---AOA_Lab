import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
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

  const scans = files?.filter(f => f.file_type === "scans") || [];
  const photos = files?.filter(f => f.file_type === "photos") || [];

  return (
    <>
      <Card className="shadow-sm border-l-4 border-l-black
       ">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold uppercase text-muted-foreground">
            Files
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-sm">

          {/* Scans */}
          <div>
            <p className="mb-1 font-medium">Scans</p>
            {scans.length ? (
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                {scans.map(file => (
                  <li key={file.id}>{file.file_name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-muted-foreground">No scans uploaded</p>
            )}
          </div>

          <Separator />

          {/* Photos */}
          <div>
            <p className="mb-2 font-medium">Photos</p>
            {photos.length ? (
              <div className="grid grid-cols-3 gap-3">
                {photos.map(file => (
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
              <p className="text-xs text-muted-foreground">No photos uploaded</p>
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
