<template>
    <v-app>
      <div class="imagem-container">
         <img src="../assets/haunter.jpg" alt="Sua Imagem" class="imagemcad">
      </div>
      <v-container>
        <v-card>
          <v-card-title class="headline">
            Cadastro
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register" ref="form">
              <v-text-field
                v-model="email"
                label="E-mail"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Senha"
                type="password"
                :rules="passwordRules"
              ></v-text-field>
              <div class="botoesdeloginecad">
              <v-btn color="purple" class="white--text" @click="register">Cadastre-se</v-btn>
              <v-btn color="red" class="white--text" @click="register">Tenho uma conta</v-btn>
              </div>
            </v-form>
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
    computed: {
      emailRules() {
        return [
          (v) => !!v || 'O e-mail é obrigatório',
          (v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
        ];
      },
      passwordRules() {
        return [
          (v) => !!v || 'A senha é obrigatória',
          (v) => v && v.length >= 8 || 'A senha deve ter pelo menos 8 caracteres',
        ];
      },
    },
    methods: {
      register() {  
        if (this.$refs.form.validate()) {
          const user = {email: this.email, password: this.password}
          this.$store.dispatch("register", user);
        }
      },
    },
  };
  </script>
<style>
.botoesdeloginecad{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 4px;
}
.imagemcad {
  width: 170px; /* Ajuste o tamanho da imagem conforme desejado */
  height: 200px;
  border-radius: 20%; /* Torna a imagem redonda */
}
.imagem-container {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 200px; 
    
}
.container {
  background-color: rgb(227, 157, 241); 
}
</style>