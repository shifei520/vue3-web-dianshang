<template>
  <div>
    <p>{{ $store.state.username }}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    console.log(store.getters.newName)
  }
}
</script>
