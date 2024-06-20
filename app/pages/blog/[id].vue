<template>
    <div>
        <h3>Blog</h3>
        <p>Post id is {{ route.params.id }} </p>

    </div>
</template>

<script setup>
const route = useRoute()
console.log(route)

</script>
