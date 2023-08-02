import { useStocks } from "../../data/useStockStream";
import { BaseModule } from "../BaseModule";

export function ListStocks() {
  const stocks = useStocks();

  return (
    <BaseModule>
      <div className="flex flex-col items-start w-96 h-48 overflow-y-auto">
        <h2 className="text-md font-bold">
          {stocks.map((stock) => (
            <div key={stock}>{stock}</div>
          ))}
        </h2>
      </div>
    </BaseModule>
  );
}
