import { defineStore } from 'pinia'
import type { IMessage } from '../models/chat'

const messages: IMessage[] = []

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages
  }),
  getters: {},
  actions: {
    randomMessage(type:string, message:string = ''){
      
      // Get Local Storage     
      let historyMessages = localStorage.getItem('historyMessages')
      let history : IMessage[]
      if(historyMessages){
        history = JSON.parse(historyMessages)
        this.messages = history
        // console.log('history: ', this.messages);
      }  
      // End Get Local Storage
      
      let messages = [
        'Gustaría de encontrarme contigo',
        'Quiero verte',
        'Tus ojos reflejan la soledad',
        'Parecieras estar nervioso',
        'Aunque sea tarde, aún tengo tiempo',
        'La vida suele ser hermosa',
        '¿ Cómo podría ser de utilidad ?',
        '¿ Has visto las noticias en la TV ?',
        '¿ Puedes imaginar un mundo juntos ?',
        'Aquí ya es de noche',
      ]

      const randomIndex = Math.floor(Math.random() * 10);
      const id = Math.floor(Math.random() * 100);

      let obj:IMessage = {
        id: id,
        value: message.length ?  message : messages[randomIndex],
        type: type,
        date: 'today',
        user: 'user'
      }

      this.messages.push(obj)

      // Set LocalStorage
      localStorage.setItem('historyMessages', JSON.stringify(this.messages))
      
    }
  }
})
