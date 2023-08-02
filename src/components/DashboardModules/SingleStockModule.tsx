import { useStockStream } from "../../data/useStockStream";
import { BaseModule } from "../BaseModule";

export function SingleStockModule({ name }: { name: string }) {
  const { data } = useStockStream(name);
  const value = data?.at(-1)?.value;

  if (!value) {
    return <div>Error: no data</div>;
  }

  return (
    <BaseModule>
      <div className="flex flex-col items-start w-96 h-48">
        <h1 className="text-2xl">{name}</h1>
        <h2 className="text-md font-bold">
          Latest:
          {value}
        </h2>
      </div>
    </BaseModule>
  );
}
