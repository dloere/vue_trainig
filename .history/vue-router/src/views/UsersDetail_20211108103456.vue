<template>
    <div>
        <h1>Users Detail</h1>
        유저번호 : {{userId}}


        <v-btn >  </
    </div>



</template>

<script>
export default {
    computed:{
        userId() {
            return this.$route.params.id
        }
    }
}
</script>