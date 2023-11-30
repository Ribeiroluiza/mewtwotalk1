<template>
    <v-main>
      <div class="user-list-container">
        <v-list-item v-for="usuario in listaUsuarios" :key="usuario.id"  class="user-item" @click="goToperfil(usuario.id)" :class="{ 'selected': usuarioSelecionado === usuario.id }">
          <v-list-item-avatar>
            <img :src="usuario.avatar"/>
          </v-list-item-avatar>
          <router-link :to="{ name: 'UserProfile', params: { id: usuario.id } }" class="user-item">
            <!-- Conteúdo da lista de usuário, como o ícone e o nome do usuário -->
          </router-link>
          <v-list-item-content>
            <v-list-item-title>{{ usuario.nome }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <button @click="signOut">logout</button>
    </v-main>
  </template>
  
  <script>
  import { usuarios } from '../data';
  
  export default {
    data() {
      return {
        listaUsuarios: 
          usuarios,
        usuarioSelecionado: null
      };
    },
    methods: {
      goToChat(usuario) {
        this.usuarioSelecionado = usuario.id;
        this.$router.push(`/chat/${usuario.id}`);
      },
      goToperfil(id){
        this.$router.push(`/user/${id}`)
      },
      signOut(){
        this.$store.dispatch('logout')
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para o contêiner da lista de usuários */
  .user-list-container {
    background-color: rgb(219, 155, 236); /* Cor de fundo do contêiner */
    padding: 10px;
    border-radius: 5px; /* Borda arredondada do contêiner */
  }
  
  /* Estilos para o elemento da lista de usuários */
  .user-item {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #777575; /* Cor do texto */
    padding: 10px 0; /* Espaçamento acima e abaixo do item */
    border-bottom: 1px solid #ccc; /* Linha divisória abaixo de cada item */
    cursor: pointer;
  }
  
  /* Estilos para o item selecionado */
  .selected {
    background-color: #007BFF; /* Cor de destaque de fundo */
    color: #e6e4e4; /* Cor do texto no item selecionado */
  }
  
  /* Estilos para o ícone de perfil */
  .v-list-item-avatar {
    margin-right: 10px; 
    font-size: 24px; 
  }
  </style>
