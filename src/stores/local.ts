import { defineStore } from 'pinia'

export const useLocalStore = defineStore('local', {
  state: () => ({
    name: 'AI Chat G',
    bgMain: 'bg-slate-100',
    bgButton: 'bg-slate-900'
  }),
  getters: {},
  actions: {
    changeBg() {
      this.bgMain = (this.bgMain == 'bg-slate-100' ? 'bg-yellow-200' : 'bg-slate-100')
      this.bgButton = (this.bgButton == 'bg-slate-900' ? 'bg-green-600' : 'bg-slate-900')
    }
  }
})
