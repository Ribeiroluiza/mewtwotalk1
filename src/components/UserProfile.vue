<template>
    <v-main>
      <div class="user-profile-container">
        <div class="user-info" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
          <v-avatar size="240" :id="usuario.id">
            <img :src="getFoto(usuario.id)" :alt="`Foto do usuário ${usuario.nome}`">
          </v-avatar>
          <h2>{{ usuario.nome }}</h2>
          <p>{{ usuario.email }}</p>
          <div class="icons">
            <v-icon color="green">mdi-check-circle</v-icon>
            <v-icon color="green">mdi-account-check</v-icon>
          </div>
        </div>
        <router-link
          :to="'/user/' + usuario.id"
          class="user-item"
          :class="{ 'selected': usuarioSelecionado === usuario.id }"
        >
        </router-link>
        <router-link to="/" class="back-button centered-button">
          <v-btn color="red">Voltar à lista de usuários</v-btn>
        </router-link>

        <router-link :to="`/chat/${usuario.id}`" class="back-button button">
          <v-btn color="blue">Ir para o chat</v-btn>
        </router-link>
        <v-text-field
          label="Descrição"
          v-model="descricao"
          class="description-field"
        ></v-text-field>
      </div>
    </v-main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usuario: {}
      };
    },
    created() {
      const userId = this.$route.params.id;
  
      if (userId === "1") {
        this.usuario = {
          nome: "Yuuto Kunihiro",
          email: "kunihiroyuuto@email.com",
          id: userId 
        };
      } else if (userId === "2") {
        this.usuario = {
          nome: "GrijazZ",
          email: "ÉogrijazZfelas.com",
          id: userId // Adicione o ID do usuário
        };
      } else if (userId === "3") {
        this.usuario = {
          nome: "YoGusta",
          email: "gugaoboysempre.com",
          id: userId // Adicione o ID do usuário
        };
      }
    },
    methods: {
      getFoto(userId) {
        return require(`@/assets/${userId}.jpg`); // Use require para carregar a imagem
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para o contêiner da tela de perfil do usuário */
  .user-profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    text-align: center;
    color: rgb(68, 66, 65);
    background-color: #f6f464; /* Cor de fundo azul claro, você pode ajustar a cor conforme necessário */
  }
  /* Estilos para o botão de voltar */
  .back-button.centered-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: red;
  }
  .back-button.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: blue;
  }

  </style>