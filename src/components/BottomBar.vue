<template>

    <v-app-bar fixed bottom color="#808080">
            <v-text-field v-model="textInput" @keyup.enter="sendMessage()" solo hide-details :label="textInput"></v-text-field>
            <v-btn @click="sendMessage()" color="red">
              <v-icon>mdi-send</v-icon>
            </v-btn>
    </v-app-bar>
    
    </template>
    
    <script>
    export default {
        data() {
            return {
                textInput: '',
            };
        },
        methods: {
            sendMessage() {
                const message = {
                    nome: 'Eu',
                    text: this.textInput,
                };
                this.$emit('send-message', message);
                this.textInput = '';
            }
        },
    };
    </script>