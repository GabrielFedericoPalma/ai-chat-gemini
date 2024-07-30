import { defineStore } from 'pinia'

import type { IFriend } from '../models/profiles'

export const useSearchFriendStore = defineStore('searchFriend', {
  state: () => {
    return {
      // for initially empty lists
      friend: [{
        id: 'S214',
        created: '10/04/2015',
        lastLogin: 'today',
        isActive: true,
        firstName: 'Sophie',
        lastName: 'McAllister',
        age: '22',
        location: 'Chicago',
        description: 'Gemini AI Chat developed with Gemini, Firebase, Vue.js, Typescript, Tailwind and Vitest. Click start to chat with Sophie.',
        photo: '/img/friend_original.jpg',
        status: 'ONLINE'
      }] as IFriend[],
    }
  },
  getters: {},
  actions: {}
})
