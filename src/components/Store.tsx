import create from 'zustand'



export const useStore = create(set => ({
  station: "single",
  speed: 1,
  depth:-100,
  num:1,
}))