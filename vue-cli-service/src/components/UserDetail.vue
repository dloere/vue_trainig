<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원정보를 확인합니다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>이름:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ name }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>주소:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ address }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>전화번호:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ phone }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>반려견유무:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ hasDog }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>수정일자:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ getDateAndTime(editedDate) }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { eventBus } from "../main";
import {dateFormat} from "../mixins/dateFormat"

export default {
  props: ["name", "address", "phone", "hasDog"],
  data() {
    return {
      editedDate: null,
    };
  },
  computed: {
    hasDogKr() {
      return this.hasDog === true ? "있음" : "없음";
    },
  },
  created() {
    console.log("userDetal")
    eventBus.$on("userWasEdited", (date) => {
      this.editedDate = date;
    });
  },
  methods: {
    
  },
  mixins: [
      dateFormat
  ]
};
</script>