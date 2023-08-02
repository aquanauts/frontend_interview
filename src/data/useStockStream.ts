import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { singletonHook } from "react-singleton-hook";

const fakeData = () => {
  let init = Math.random() * 100 + 50; // Start 50-100
  let d = [{ value: init, tick: 0 }];
  let n = 0;

  while (n < 99) {
    d.push({
      value: toFixedValue(nextStep(d[n].value)),
      tick: n + 1,
    });
    n++;
  }

  return d;
};

const nextStep = (current: number): number => {
  // Random walk from current value up or down by a small amount
  return current + 0.05 * (Math.random() - 0.5);
};

export const toFixedValue = (n: number) => parseFloat(n.toFixed(2));

interface StockDatum {
  value: number;
  tick: number;
}

interface StockData {
  [name: string]: StockDatum[];
}

// Hacky global data store and singleton hook to fake a consistent streaming
// API without adding a whole state management library.
const stocks = Array(50)
  .fill("")
  .map(() => faker.string.alpha({ length: 4, casing: "upper" }));
const stockData: StockData = ["ABCD", ...stocks].reduce(
  (acc: StockData, stock: string) => {
    acc[stock] = fakeData();
    return acc;
  },
  {},
);

const useDataImpl = () => {
  const [data, setData] = useState(stockData);

  useEffect(() => {
    let loop = setInterval(() => {
      setData((prev) => {
        let d: StockData = {};
        Object.keys(prev).forEach((stock: string) => {
          const { tick, value } = prev[stock].at(-1) ?? { tick: 0, value: 50 };
          d[stock] = [
            ...prev[stock],
            {
              tick: tick + 1,
              value: toFixedValue(nextStep(value)),
            },
          ].slice(1);
        });
        return d;
      });
    }, 1000);

    return () => {
      if (loop) {
        clearInterval(loop);
      }
    };
  }, []);

  return data;
};

export const useData = singletonHook(stockData, useDataImpl);

export const useStocks = () => {
  const data = useData();

  return Object.keys(data);
};

export const useStockStream = (name: string) => {
  const allData = useData();

  return {
    name,
    data: allData[name],
  };
};
