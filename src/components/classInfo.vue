<template>
  <h1>Classes INfo</h1>
  <div v-if="dataClassA && dataClassA.length > 0">
    <p>Class A</p>
    <table style="width: 100%">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>action</th>
      </tr>
      <tr v-for="child in dataClassA" :key="child.id">
        <td>{{ child.id }}</td>
        <td>{{ child.name }}</td>
        <td>{{ child.age }}</td>
        <td><button @click="deleteChild(child.id, 'A')">Delete</button></td>
      </tr>
    </table>
  </div>

  <div v-if="dataClassB && dataClassB.length > 0">
    <p>Class B</p>
    <table style="width: 100%">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>action</th>
      </tr>
      <tr v-for="child in dataClassC" :key="child.id">
        <td>{{ child.id }}</td>
        <td>{{ child.name }}</td>
        <td>{{ child.age }}</td>
        <td><button @click="deleteChild(child.id, 'B')">Delete</button></td>
      </tr>
    </table>
  </div>

  <div v-if="dataClassC && dataClassC.length > 0">
    <p>Class C</p>
    <table style="width: 100%">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>action</th>
      </tr>
      <tr v-for="child in dataClassC" :key="child.id">
        <td>{{ child.id }}</td>
        <td>{{ child.name }}</td>
        <td>{{ child.age }}</td>
        <td><button @click="deleteChild(child.id, 'C')">Delete</button></td>
      </tr>
    </table>
  </div>

  <div v-if="dataClassD && dataClassD.length > 0">
    <p>Class D</p>
    <table style="width: 100%">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>action</th>
      </tr>
      <tr v-for="child in dataClassD" :key="child.id">
        <td>{{ child.id }}</td>
        <td>{{ child.name }}</td>
        <td>{{ child.age }}</td>
        <td><button @click="deleteChild(child.id, 'D')">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const dataClassA = ref(null);
    const dataClassB = ref(null);
    const dataClassC = ref(null);
    const dataClassD = ref(null);

    const deleteChild = (id, className) => {
      store.commit("removeChildFromClass", { id: id, className: className });
      dataClassA.value = store.getters.getClassA;
      dataClassB.value = store.getters.getClassB;
      dataClassC.value = store.getters.getClassC;
      dataClassD.value = store.getters.getClassD;
    };

    onMounted(() => {
      dataClassA.value = store.getters.getClassA;
      dataClassB.value = store.getters.getClassB;
      dataClassC.value = store.getters.getClassC;
      dataClassD.value = store.getters.getClassD;
    });

    return {
      dataClassA,
      dataClassB,
      dataClassC,
      dataClassD,
      deleteChild,
    };
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
