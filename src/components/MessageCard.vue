<template>
    <v-card
      :class="messageProp.nome !== 'Eu' ? 'teal' : 'red'"
      outlined
      class="ma-3 accent-1"
    >
      <v-card-subtitle class="font-weight-bold">{{ messageProp.nome }}</v-card-subtitle>
  
      <v-card-text>
        <div>{{ messageProp.text }}</div>
        <div class="d-flex justify-end">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="#FF0070" v-bind="attrs" v-on="on">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Editar Comentário</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Legal first name*" required v-model="novoTexto"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text @click="editMessage">
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn @click="deleteMessage" icon color="#808080">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
      data(){
          return{
              dialog: false,
              novoTexto: ""
          }
      },
      props: {
          messageProp: {
              type: Object,
              required: true
          },
          editar: Function
      },
      methods: {
          editMessage() {
              this.editar(this.messageProp.id, this.novoTexto)
              this.dialog = false
          },
          deleteMessage(){
              this.$emit("delete", this.messageProp.id)
          }
      }
  };
  </script>