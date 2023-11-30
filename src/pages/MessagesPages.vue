<template>
    <v-main>
        <v-app-bar color="#A020F0">
          <v-btn icon @click="toggleMenu" color="white">
            <v-icon style="color:white">mdi-menu</v-icon>
          </v-btn>
          <div class="d-flex align-center justify-center" style="flex-grow: 1;">
            <v-toolbar-title style="margin-right: 150px;">Publicações</v-toolbar-title>
          </div>
          <v-btn @click="deletarAllMessages()" icon color="#4B0082">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-app-bar>
        <v-card v-for="(message, index) in messages" :key="index" :class="message.nome !== 'Eu' ? 'blue' : 'purple'" outlined class="ma-2">
          <message-card :messageProp="message" :editar="editmessage" @delete="deletarMessage"/>
        </v-card>
        <!-- rodapé -->
        <BottomBar @send-message="addMessage($event)"/>
      </v-main>
  </template>
  
  <script>
  import MessageCard from '@/components/MessageCard.vue'
  import BottomBar from '@/components/BottomBar.vue'
  
  export default {
    components: {
      MessageCard,
      BottomBar
    },
    data() {
      return {
        messages: [
          {
            id: 1,
            nome: 'Yuuto Kunihiro',
            text: 'Meu pokemon favorito é o Swampert pois além do mudkip ser o pokemon mais fofo do mundo, ele evolui pro monstro mais destruidor de Hoenn!!!'
          },
          {
            id: 2,
            nome: 'GrijazZ',
            text: 'O Blastoise, pokemon concha de água é o mais forte da primeira trindade, mas voces não estão preparados para essa conversa'
          },
          {
            id: 3,
            nome: 'Yogusta',
            text: 'Que mané tipo água mrm, o bagui é tipo fogo!'
          },
        ],
      }
    },
    methods: {
      addMessage(e) {
        const message = {
          id: Math.random(),
          nome: e.nome,
          text: e.text
        }
       this.messages.push(message)
      },
      deletarAllMessages(){
        this.messages = []
      },
      deletarMessage(id){
        this.messages=this.messages.filter(message=> message.id !== id)
      },
      editmessage(id, novoTexto){
        const message = this.messages.find((message) => message.id === id);
        message.text = novoTexto
      }
    }
    }
  </script>
  
  <style>
 
  </style>