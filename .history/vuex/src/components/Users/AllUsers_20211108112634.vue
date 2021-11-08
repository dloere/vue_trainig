<template>
  <div>
    <h1>All Users</h1>
    <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in allUsers"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'

  export default {
    data() {
      return {
        allUsers:[
          {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:''},
          {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:''},
          {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:''}
        ]
      }
    },
    mounted() {
      EventBus.$on('signUp', users => {
        this.allUsers.push(users)
      })
    }
  }
</script>
