<template>
  <h6 v-if="returnData">{{ returnData }}</h6>
  <form>
    <h1>Login Form</h1>
    <div class="formcontainer">
      <hr />
      <div class="container">
        <input
          type="text"
          placeholder="Enter email"
          name="uname"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          v-model="password"
          required
        />
      </div>
      <button type="button" @click="submitLogin()">Login</button>
      <div class="container" style="background-color: #eee"></div>
    </div>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const data = ref(null);
    const router = useRouter();
    const returnData = computed(() => {
      return data.value;
    });

    const submitLogin = () => {
      const data = store.getters.getParents;
      const result = data.find(
        (obj) => obj.email === email.value && obj.password === password.value
      );
      if (result) {
        console.log("login Successful");
        store.commit('toggleIsAuth');
        router.push("/dashBoard");
      }
    };

    return {
      email,
      password,
      submitLogin,
      store,
      data,
      returnData,
      router,
    };
  },
};
</script>

<style>
h1 {
  padding: 10px 0;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
}
p {
  font-size: 12px;
}
hr {
  color: #a9a9a9;
  opacity: 0.3;
}
.main-block {
  max-width: 340px;
  min-height: 460px;
  padding: 10px 0;
  margin: auto;
  border-radius: 5px;
  border: solid 1px #ccc;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  background: #ebebeb;
}
form {
  margin: 0 30px;
}
.account-type,
.gender {
  margin: 15px 0;
}
input[type="radio"] {
  display: none;
}
label#icon {
  margin: 0;
  border-radius: 5px 0 0 5px;
}
label.radio {
  position: relative;
  display: inline-block;
  padding-top: 4px;
  margin-right: 20px;
  text-indent: 30px;
  overflow: visible;
  cursor: pointer;
}

input[type="text"],
input[type="password"] {
  width: calc(100% - 57px);
  height: 36px;
  margin: 13px 0 0 -5px;
  padding-left: 10px;
  border-radius: 0 5px 5px 0;
  border: solid 1px #cbc9c9;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  background: #fff;
}
input[type="password"] {
  margin-bottom: 15px;
}

.btn-block {
  margin-top: 10px;
  text-align: center;
}
/* button {
       width: calc(100% - 57px);
      padding: 10px 0;
      margin: 10px auto;
      border-radius: 5px; 
      border: none;
      background: #1c87c9; 
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      } */
button {
  background-color: #4286f4;
  color: white;
  padding: 14px 0;
  margin: 10px 0;
  border: none;
  cursor: grab;
  width: 48%;
}
button:hover {
  background: #26a9e0;
}
</style>