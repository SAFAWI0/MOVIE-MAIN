import { create } from "zustand";

export const useAppStore = create((set) => ({
  moreInf: [],
  nameType: [],
  isOpenModal: false,
  setMoreInf: (moreInf) => set({ moreInf }),
  setNameType: (nameType) => set({ nameType }),
  setIsOpenModal: (isOpenModal) => set({ isOpenModal }),
}));
