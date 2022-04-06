<template>
  <h1>Dashboard</h1>
  <button @click="addChild = !addChild">
    {{ addChild ? "Go Back" : "Add Child" }}
  </button>

  <div v-if="addChild">
    <form>
      <div class="container">
        <label for="mail"><strong>ID</strong></label>
        <input type="text" placeholder="Enter id" v-model="id" required />

        <label for="uname"><strong>Name</strong></label>
        <input type="text" placeholder="Enter Name" v-model="name" required />

        <label for="psw"><strong>Age</strong></label>
        <input type="number" placeholder="Enter Age" v-model="age" required />
      </div>
      <button type="button" @click="submitForm()">
        <strong>Submit</strong>
      </button>
      <div class="container" style="background-color: #eee"></div>
    </form>
  </div>
  <div v-else>
    <table style="width: 100%" v-if="childData && childData.length > 0">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>action</th>
      </tr>
      <tr v-for="child in childData" :key="child.id">
        <td>{{ child.id }}</td>
        <td>{{ child.name }}</td>
        <td>{{ child.age }}</td>
        <td><button @click="deleteChild(child.id)">Delete</button></td>
        <td><button @click="addClass(child.id)">Add Class</button></td>
      </tr>
    </table>
  </div>

  <div v-if="showClassSelection">
    <label style="padding-left: 15px">
        <input type="checkbox"  checked="" v-model="classA" name="remember">  class A
    </label>
    <label style="padding-left: 15px">
        <input type="checkbox"  checked="" v-model="classB" name="remember">  class B
    </label>
    <label style="padding-left: 15px">
        <input type="checkbox"  checked="" v-model="classC" name="remember">  class C
    </label>
    <label style="padding-left: 15px">
        <input type="checkbox"  checked="" v-model="classD" name="remember">  class D
    </label>
    <button type="button" @click="submitClass()">
        <strong>Submit Class</strong>
    </button>
  </div>
</template>

<script>

import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {

  setup() {
    const addChild = ref(false);
    const name = ref("");
    const id = ref("");
    const age = ref("");
    const store = useStore();
    const childData = ref(null);
    const currentChild = ref(null);
    const showClassSelection = ref(false);

    const classA = ref(false);
    const classB = ref(false);
    const classC = ref(false);
    const classD = ref(false);

    const submitForm = () => {
      store.commit("setChild", {
        id: id.value,
        name: name.value,
        age: age.value,
      });
      addChild.value = false;
      console.log(store.getters.getChild);
    };

    const deleteChild = (id) => {
      console.log(id);
      store.commit("removeChild", id);
      childData.value = store.getters.getChild;
    };

    const addClass = (id) => {
      currentChild.value = id;
      showClassSelection.value = true;
    }

    const submitClass = () => {
      console.log(currentChild.value);
      console.log(classA.value);
      console.log(classB.value);
      console.log(classC.value);
      console.log(classD.value);
      if(classA.value){
        store.commit('setChildInClassA', currentChild.value);
      }
      if(classB.value){
        store.commit('setChildInClassB', currentChild.value);
      }
      if(classC.value){
        store.commit('setChildInClassC', currentChild.value);
      }
      if(classD.value){
        store.commit('setChildInClassD', currentChild.value);
      }
    }

    onMounted(() => {
      childData.value = store.getters.getChild;
    });

    return {
      id,
      store,
      childData,
      addChild,
      name,
      age,
      submitForm,
      deleteChild,
      currentChild,
      addClass,
      showClassSelection,
      classA,
      classB,
      classC,
      classD,
      submitClass,
    };
  },
};
</script>

<style scoped>
form {
  border: 5px solid #f1f1f1;
}
input[type="text"],
input[type="number"] {
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
  text-align: center;
  fone-size: 18;
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
  text-align: left;
}
span.psw {
  float: right;
  padding-top: 0;
  padding-right: 15px;
}
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}

table,
th,
td {
  border: 1px solid black;
}
</style>

