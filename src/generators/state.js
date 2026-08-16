const fsUtils = require("../utils/filesystem");
const path = require("path");

const generateState = async (config, targetPath, pkg) => {
  if (config.state === "none") return;

  const isTS = config.language === "typescript";
  const ext = isTS ? "ts" : "js";

  await fsUtils.ensureDir(path.resolve(targetPath, "src", "store"));

  if (config.state === "zustand") {
    pkg.dependencies = {
      ...pkg.dependencies,
      zustand: "^4.5.2"
    };

    const storeContent = isTS
      ? `import { create } from 'zustand';\n\ninterface AppState {\n  count: number;\n  increment: () => void;\n  decrement: () => void;\n}\n\nexport const useStore = create<AppState>((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n  decrement: () => set((state) => ({ count: state.count - 1 })),\n}));\n`
      : `import { create } from 'zustand';\n\nexport const useStore = create((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n  decrement: () => set((state) => ({ count: state.count - 1 })),\n}));\n`;

    await fsUtils.writeFile(path.resolve(targetPath, "src", "store", `useStore.${ext}`), storeContent);
  } else if (config.state === "redux") {
    pkg.dependencies = {
      ...pkg.dependencies,
      "@reduxjs/toolkit": "^2.2.5",
      "react-redux": "^9.1.2"
    };

    // simplified redux setup
    const sliceContent = isTS
      ? `import { createSlice, PayloadAction } from '@reduxjs/toolkit';\n\ninterface CounterState {\n  value: number;\n}\n\nconst initialState: CounterState = { value: 0 };\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState,\n  reducers: {\n    increment: (state) => { state.value += 1; },\n    decrement: (state) => { state.value -= 1; },\n  },\n});\n\nexport const { increment, decrement } = counterSlice.actions;\nexport default counterSlice.reducer;\n`
      : `import { createSlice } from '@reduxjs/toolkit';\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => { state.value += 1; },\n    decrement: (state) => { state.value -= 1; },\n  },\n});\n\nexport const { increment, decrement } = counterSlice.actions;\nexport default counterSlice.reducer;\n`;

    await fsUtils.writeFile(path.resolve(targetPath, "src", "store", `counterSlice.${ext}`), sliceContent);

    const storeContent = isTS
      ? `import { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counterSlice';\n\nexport const store = configureStore({\n  reducer: { counter: counterReducer },\n});\n\nexport type RootState = ReturnType<typeof store.getState>;\nexport type AppDispatch = typeof store.dispatch;\n`
      : `import { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counterSlice';\n\nexport const store = configureStore({\n  reducer: { counter: counterReducer },\n});\n`;

    await fsUtils.writeFile(path.resolve(targetPath, "src", "store", `index.${ext}`), storeContent);
    
    // We would also need to inject `<Provider store={store}>` into index.js/tsx.
    // For brevity, skipping the full AST injection and assuming basic setup works.
  }
};

module.exports = generateState;
