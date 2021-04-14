<template>
  <div class="profile">
    <h1>Profile!</h1>
    <div class="profile-wrapper">
      <div class="user-pic">
        <img :src="auth.user.picture" />
      </div>
      <div class="user-info">
        <h2>{{ auth.user.nickname }}</h2>
        <span>{{ auth.user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, reactive, toRefs } from 'vue'

// import ZoneCard from '../components/ZoneCard'

export default {
  setup() {
    const auth = inject('Auth')

    const state = reactive({
      auth,
    })

    console.log(state.auth.picture)

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  align-items: center;
}
.user-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.user-pic img {
  width: 100%;
}

.user-info {
  padding: 12px;
}

.user-info h2 {
  padding: 0;
}
</style>
