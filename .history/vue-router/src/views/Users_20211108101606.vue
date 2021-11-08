<template>
  <div>
    <v-layout
      row
      wrap
      pt-5
      text-xs-center
      style="max-width: 500px; margin: 0 auto"
    >
      <v-flex xs12>
        <h1>Users</h1>

        <p>유저를 검색해 주세요.</p>
      </v-flex>

      <v-flex xs12>
          <v-text-field label="Regular">
          </v-text-field>

          
           </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
  created() {
    console.log("router", this.$router);
    console.log("route", this.$route);
  },
};
</script>p