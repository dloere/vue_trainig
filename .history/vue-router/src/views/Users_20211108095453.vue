<template>
    <div>
        <h1>Users </h1>
        {{userId}}

    </div>
</template>

<script>
export default {
    computed : {
        userId() {
            return this.#route.params()
        }
    }
}
</script>p