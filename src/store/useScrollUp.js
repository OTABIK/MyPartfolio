import { create } from "zustand";

const useScrollUp = create((set) => ({
  isVisible: false,

  showButton: () => set({ isVisible: true }),
  hideButton: () => set({ isVisible: false }),
}));

export default useScrollUp;
