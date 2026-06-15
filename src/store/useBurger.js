import { create } from "zustand";

export const useBurger = create((set) => ({
  isBurger: false,
  handleBurger: () => set((state) => ({ isBurger: !state.isBurger })),
}));
