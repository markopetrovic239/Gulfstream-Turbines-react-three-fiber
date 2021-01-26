import create from 'zustand'



export const useStore = create(set => ({
  speed: 1,
  depth:-100,
  num:1,
}))