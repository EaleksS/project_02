import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useStore = {
  start: number;
  setStart: (number: number) => void;
  end: number;
  setEnd: (number: number) => void;
  paginate: number[];
  setPaginate: (number: number) => void;
  selectType: string;
  setSelectType: (type: string) => void;
  active: number;
  setActive: (number: number) => void;
};

export const useStore = create(
  devtools<useStore>(
    (set, get) => ({
      start: 0,
      setStart: (number) => {
        set({ start: number });
      },
      end: 6,
      setEnd: (number) => {
        set({ end: number });
      },
      paginate: [1],
      setPaginate: (number) => {
        set({ paginate: [...get().paginate, number] });
      },
      selectType: "rolls",
      setSelectType: (type) => {
        set({ selectType: type });
      },
      active: 1,
      setActive: (number) => {
        set({ active: number });
      },
    })
    // { name: "catalog" }
  )
);
