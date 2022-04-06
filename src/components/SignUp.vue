<template>
     <form>
      <h1>SIGN UP</h1>
      <div class="container">
        <label for="uname"><strong>Username</strong></label>
        <input type="text" placeholder="Enter Username" v-model="username" required>
        <label for="mail"><strong>E-mail</strong></label>
        <input type="text" placeholder="Enter E-mail" v-model="email" required>
        <label for="psw"><strong>Password</strong></label>
        <input type="password" placeholder="Enter Password" v-model="password" required>
      </div>
      <button type="button" @click="submitForm()"><strong>SIGN UP</strong></button>
      <div class="container" style="background-color: #eee">
       
      </div>
    </form>
</template>

<script>
import { computed, ref } from 'vue'
import { useRouter } from "vue-router"
import { useStore } from 'vuex'

export default {
  name: 'Home',
  
  setup(){
    const username = ref('');
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const store = useStore();
    const router = useRouter();

    const submitForm = () => {
        store.commit('setParents',{
            'id' : email.value,
            'email' : email.value,
            'username' : username.value,
            'password' : password.value,
        });
        console.log(store.getters.getParents);
        router.push('/');

  };

  return {
      username,
      email,
      password,
      confirmPassword,
      submitForm,
      store,
  }
  }

  

}
</script>

<style scoped>
 form {
      border: 5px solid #f1f1f1;
      }
      input[type=text], input[type=password] {
      width: 100%;
      padding: 16px 8px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
      }
      .icon {
      font-size: 110px;
      display: flex;
      justify-content: center;
      color: #4286f4;
      }
      button {
      background-color: #4286f4;
      color: white;
      padding: 14px 0;
      margin: 10px 0;
      border: none;
      cursor: grab;
      width: 48%;
      }
      h1 {
      text-align:center;
      fone-size:18;
      }
      button:hover {
      opacity: 0.8;
      }
      .formcontainer {
      text-align: center;
      margin: 24px 50px 12px;
      }
      .container {
      padding: 16px 0;
      text-align:left;
      }
      span.psw {
      float: right;
      padding-top: 0;
      padding-right: 15px;
      }
      /* Change styles for span on extra small screens */
      @media screen and (max-width: 300px) {
      span.psw {
      display: block;
      float: none;
      }}
</style>


