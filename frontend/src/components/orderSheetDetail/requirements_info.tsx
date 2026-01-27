import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface iMaterial {
  id: number;
  order_id: string;
  material_key: string;
  material_value: string;
}

interface iRequirInfoProp {
  shade?: string;
  tooth_numbers?: string[];
  materials?: iMaterial[];
}

export default function Requirments_info({
  shade,
  tooth_numbers,
  materials,
}: iRequirInfoProp) {

  const substructure = materials?.find(
    (m) => m.material_key === "substructure"
  )?.material_value;

  const finish = materials?.find(
    (m) => m.material_key === "finish"
  )?.material_value;

  const number_of_stages = materials?.find(
    (m) => m.material_key === "number_of_stages"
  )?.material_value;

  const material = materials?.find(
    (m) => m.material_key === "material"
  )?.material_value;

  return (
    <Card
      className="
        border-l-4 border-l-indigo-500
        bg-indigo-50/40 dark:bg-indigo-950/20
        shadow-sm
      "
    >
      <CardHeader className="pb-3">
        <CardTitle
          className="
            text-sm font-semibold uppercase
            text-indigo-700 dark:text-indigo-400
          "
        >
          Case Requirements
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">

        {shade && (
          <div>
            <p className="font-medium text-indigo-700 dark:text-indigo-300">
              Shade
            </p>
            <p className="text-indigo-900/80 dark:text-indigo-200">
              {shade}
            </p>
          </div>
        )}

        {tooth_numbers?.length ? (
          <div>
            <p className="font-medium text-indigo-700 dark:text-indigo-300">
              Tooth Numbers
            </p>
            <p className="text-indigo-900/80 dark:text-indigo-200">
              {tooth_numbers.join(", ")}
            </p>
          </div>
        ) : null}

        {substructure && (
          <div>
            <p className="font-medium text-indigo-700 dark:text-indigo-300">
              Substructure
            </p>
            <p className="text-indigo-900/80 dark:text-indigo-200">
              {substructure}
            </p>
          </div>
        )}

        {finish && (
          <div>
            <p className="font-medium text-indigo-700 dark:text-indigo-300">
              Finish
            </p>
            <p className="text-indigo-900/80 dark:text-indigo-200">
              {finish}
            </p>
          </div>
        )}

        {number_of_stages && (
          <div>
            <p className="font-medium text-indigo-700 dark:text-indigo-300">
              Number of Stages
            </p>
            <p className="text-indigo-900/80 dark:text-indigo-200">
              {number_of_stages}
            </p>
          </div>
        )}

        {material && (
          <div>
            <p className="font-medium text-indigo-700 dark:text-indigo-300">
              Material
            </p>
            <p className="text-indigo-900/80 dark:text-indigo-200">
              {material}
            </p>
          </div>
        )}

      </CardContent>
    </Card>
  );
}
