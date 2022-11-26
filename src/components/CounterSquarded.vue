<template>
    <div class="counter-squard">
        ({{ $store.state.count }})
        <sup>2</sup> =
        {{ $store.getters.countSquard }}
    </div>
</template>
<script>
export default {

}
</script>
<style >

</style>