import { PropsWithChildren } from "react";

interface BaseModuleProps {}

export function BaseModule({ children }: PropsWithChildren<BaseModuleProps>) {
  return (
    <div
      className={`m-4 bg-white dark:bg-slate-800 rounded-md p-4 flex drop-shadow-xl text-slate-900 dark:text-white`}
    >
      {children}
    </div>
  );
}
