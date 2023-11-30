<template>
  <v-app>
    <div class="imagem-container">
      <img src="../assets/togepi.jpg" alt="Sua Imagem" class="imagemcad" />
    </div>
    <v-container>
      <v-card class="login-card">
        <v-card-title class="headline">Login</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" label="E-mail"></v-text-field>
            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
            ></v-text-field>
          </v-form>
          <v-divider class="mt-4"></v-divider>
          <v-btn class="mt-4" color="primary" @click="login">Login</v-btn>
          <v-divider class="mt-4"></v-divider>
          <v-btn class="mt-4" color="purple">
            <v-icon left>mdi-google</v-icon>Entrar com o Google
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const user = { email: this.email, password: this.password };
      this.$store.dispatch("login", user);
    },
  },
};
</script>

<style>
.login-card {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.mt-2 {
  margin-top: 16px;
  margin-left: 10px;
}

.mt-4 {
  margin-top: 32px;
}

/* A classe "red" define a cor vermelha para o botão de login com o Google */
.red {
  background-color: #db4437;
  color: #fff;
}

.red:hover {
  background-color: #c53929;
}
.imagemcad {
  width: 450px; /* Ajuste o tamanho da imagem conforme desejado */
  height: 250px;
  border-radius: 0%; /* Torna a imagem redonda */
}
.imagem-container {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 200px;
  background-color: rgb(248, 224, 146);
}
.container {
  background-color: rgb(248, 224, 146);
}
</style>
