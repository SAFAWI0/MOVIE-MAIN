import { create } from "zustand";

export const useAppStore = create((set) => ({
  moreInf: [],
  isOpenModal: false,
  setMoreInf: (moreInf) => set({ moreInf }),
  setIsOpenModal: (isOpenModal) => set({ isOpenModal }),
}));
