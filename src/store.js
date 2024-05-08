import { create } from "zustand";

export const useAppStore = create((set) => ({
  imagePath: [],
  setImagePath: (imagePath) => set({ imagePath }),
}));
