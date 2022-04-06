<template>
  <div id="nav">
    <router-link to="/Dashboard" v-if="islogin">Dashboard</router-link> |
    <router-link to="/"  v-if="!islogin">Sign In</router-link> |
    <router-link to="/signUp">Sign Up</router-link> |
    <router-link to="/classInfo"  v-if="islogin">Class Info</router-link>
  </div>
  <router-view/>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const isAuth = ref(false);
    const store = useStore();

    const islogin = computed(()=>{
      return store.getters.getIsAuth;
    });
    
    onMounted(() => {
      isAuth.value = store.getters.getIsAuth;
    });

    return {
      store,
      isAuth,
      islogin,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
