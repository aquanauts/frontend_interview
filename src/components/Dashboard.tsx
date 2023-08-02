import {
  EmptyModule,
  LastFiveValues,
  ListStocks,
  SingleStockModule,
} from "./DashboardModules";

export function Dashboard() {
  return (
    <>
      <div className="text-4xl font-bold my-6">Dashboard</div>
      <div className="flex flex-wrap">
        <ListStocks />
        <LastFiveValues name="ABCD" />
        <SingleStockModule name="ABCD" />
        <EmptyModule />
        <SingleStockModule name="ABCD" />
      </div>
    </>
  );
}
