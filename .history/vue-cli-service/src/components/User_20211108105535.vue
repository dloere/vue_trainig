<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    {{helloToMixin}}

    {{test}}
    <p>{{getDateAndTime(createdAt)}}</p>
    <hr />
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
import {dateFormat} from "../mixins/dateFormat"

export default {
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      name: "뷰제이에스",
      address: "Seoul",
      phone: "1234-5678",
      hasDog: true,
      createdAt:null,
    };
  },
  computed:{
    helloToMixin() {
      return this.mixinData + '안녕하시오'
    },
    test(){
      let a = '가나다'
      a = 'abc'
      return a
    }
  },
  created(){
    console.log("user")
    this.createdAt = new Date()
  },
  methods: {
    parents(user){
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
    },
  },
  mixins: [
    dateFormat
  ]
};
</script>