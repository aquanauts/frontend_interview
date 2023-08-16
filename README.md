# Dashboard Coding Challenge

Your challenge is to show what you can do on a React application with some simple streaming data. We have set up a dashboard that is displaying some simple data, but we know you can make more of this.

This is intentionally open-ended. Show us the skills you want to share. If you like to make charts and graphs, do that. If you are a wizard with CSS, blow us away with your beautiful components. If you want to dig deep in the data, show us some cool math code. (Some ideas below).

## Getting Started

Clone this repo from github, and then set up your own working copy.

#### Build the application

_Prerequesite: Install [Node](https://nodejs.org/en) 18+. You should have `node` and `npm` available from your command-line._

```
npm install
```

### Run the application in dev mode

```
npm run dev
```

This will start a server on your localhost (console will show the URL).

You are given a dashboard with a few simple pre-built modules. You are free to use
these as a starting point. You should make your own dashboard modules,
and improve this codebase in any way you see fit.

When you are done working on it, you can share your clone with us on github, or if you prefer not to share publicly, you can zip it up (remove `node_modules` directory first) and send it back to your hiring manager.

## Project structure

The code is written primarily with TypeScript and React.

The app compiles with Vite, and uses Prettier for formatting and ESLint for linting.

The main CSS library is TailwindCSS. Feel free to use Tailwind in your modules, or add a different styling library if you prefer.

If you are using VSCode, we suggest installing the plugins for TypeScript, ESLint, Prettier, and Tailwind. If you do, the project is already configured to make use of these tools.

## Data

There are included hooks that simulate a stream of price data for a set of stocks.

`useStocks` is a hook that will return the list of stock symbols.

- `ABCD` is always given as the first one
- The rest of the list is randomly generated.

`useStockStream` is a hook that takes a stock symbol, and returns the most recent 100 samples. For each sample, you get:

```javascript
  {
   tick: number, // like a time stamp, but just [0, 1, 2, ...]
   value: number, // the price of the stock
  }
```
- You can replace 'tick' with an actual timestamp

The data returned from `useStockStream` will update every second, with a new value added to the end (and the oldest removed).

## Dashboard

You are given pre-built modules as examples.

- `ListStocks.tsx` simply presents a scrolling list of all the symbols
- `SingleStockModule.tsx` displays the current price for a given stock
  - The pre-built dashboard uses two of these to verify that the same data is streamed to both copies.
- `LastFiveValues.tsx` displays the most recent 5 ticks and values for a given stock.
- `EmptyModule.tsx` - Just a placeholder for filling the grid, or a starting point for new modules.

Each of the modules is built with `BaseModule.tsx` as a wrapper.

`Dashboard.tsx` is the top-level dashboard, and it is where the above modules are instantiated and sorted.

## Ideas

Again, this is open-ended, so you can design your own tasks (or your hiring manager may suggest some specific requests).

#### Layout Ideas
- Below is a generic view of a dashboard concept that is common here.  Grids updating with rows of data.  Drill down by individual name.
- You may want to adjust how the `useStockData` hook works (to provide independently updating events), and/or build additional data hooks that update for individual stocks.

<img src="image.png" alt="Dashboard concept" width="800"/>

#### Module ideas

- Chart data for a specific stock
  - Using your charting library of choice like `Visx`, `Victory`, `Nivo`, etc. (Feel free to make larger modules than the ones given).
- Build an alerting module when a stock moves outside of a given range.
- Add the ability add/remove modules from the UI.
- Build interactive modules (e.g., select 2 stocks from a list, and compare their prices.)

#### Data ideas

- Add some more interesting source data to the stream and display that.
- Build some utility functions or hooks that crunch the data in interesting ways and display the results in a new module.

#### Codebase ideas

- Add a testing library and build unit tests for any/all of the above
- Improve the state management
  - The `useStockStream` hook is built with a hacky workaround to avoid using a real state-management library. Add in `Redux` or `Recoil` or something else and build it better.
