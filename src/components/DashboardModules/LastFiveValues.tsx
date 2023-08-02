import { useStockStream } from "../../data/useStockStream";
import { BaseModule } from "../BaseModule";

export function LastFiveValues({ name }: { name: string }) {
  const { data } = useStockStream(name);
  const recentData = data?.slice(-5);

  if (!recentData) {
    return <div>Error: no data</div>;
  }

  return (
    <BaseModule>
      <div className="flex flex-col items-start w-96 h-48">
        <h1 className="text-2xl">{name}</h1>
        <h2 className="text-md font-bold">
          {recentData.map((d) => (
            <div key={d.tick}>
              <span className="font-bold mr-8">{d.tick}</span>
              <span className="font-bold mr-8">{d.value}</span>
            </div>
          ))}
        </h2>
      </div>
    </BaseModule>
  );
}
