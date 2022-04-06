import { createStore } from 'vuex'

export default createStore({
  state: {
    parents:[],
    child:[{ "id": "1", "name": "muk", "age": 12 },{ "id": "2", "name": "vin", "age": 12 }],
    classA:[{ "id": "1", "name": "muk", "age": 12 },{ "id": "2", "name": "vin", "age": 12 }],
    classB:[{ "id": "1", "name": "muk", "age": 12 }],
    classC:[{ "id": "1", "name": "muk", "age": 12 }],
    classD:[{ "id": "1", "name": "muk", "age": 12 }],
    class:[
      { "id": "1", "name": "A", "description": 'random words', "seats": 0 },
      { "id": "2", "name": "B", "description": 'random words', "seats": 0 },
      { "id": "3", "name": "C", "description": 'random words', "seats": 0 },
      { "id": "4", "name": "D", "description": 'random words', "seats": 0 }
    ],
    isAuth: false,
  },
  mutations: {
    toggleIsAuth(state){
      state.isAuth = !state.isAuth;
    },
    setParents(state, payload){
      state.parents.push(payload);
    },
    setChild(state, payload){
      state.child.push(payload);
    },
    setChildInClassA(state, payload){
      console.log(payload);
      state.classA.push(state.child.find(({id}) => id === payload));
      state.class[(state.class.findIndex( (obj) => obj.name === 'A'))].seats = state.classA.length;
      console.log(state.classA);
      console.log(state.class[0]);
    },
    setChildInClassB(state, payload){
      console.log(payload);
      state.classA.push(state.child.find(({id}) => id === payload));
      state.class[(state.class.findIndex( (obj) => obj.name === 'B'))].seats = state.classB.length;
      console.log(state.classB);
      console.log(state.class[1]);
    },
    setChildInClassC(state, payload){
      console.log(payload);
      state.classC.push(state.child.find(({id}) => id === payload));
      state.class[(state.class.findIndex( (obj) => obj.name === 'C'))].seats = state.classC.length;
      console.log(state.classC);
      console.log(state.class[2]);
    },
    setChildInClassD(state, payload){
      console.log(payload);
      state.classD.push(state.child.find(({id}) => id === payload));
      state.class[(state.class.findIndex( (obj) => obj.name === 'D'))].seats = state.classD.length;
      console.log(state.classD);
      console.log(state.class[3]);
    },
    removeChild(state,payload){
      state.child.splice(state.child.findIndex(v => v.id === payload), 1);
      state.classA.splice(state.classA.findIndex(v => v.id === payload), 1);
      state.classB.splice(state.classB.findIndex(v => v.id === payload), 1);
      state.classC.splice(state.classC.findIndex(v => v.id === payload), 1);
      state.classD.splice(state.classD.findIndex(v => v.id === payload), 1);
    },
    removeChildFromClass(state,payload){
      console.log(payload);
      if(payload.className === 'A'){
        state.classA.splice(state.classA.findIndex(v => v.id === payload.id), 1);
        state.class[(state.class.findIndex( (obj) => obj.name === 'A'))].seats = state.classA.length;
      }
      if(payload.className === 'B'){
        state.classB.splice(state.classB.findIndex(v => v.id === payload.id), 1);
        state.class[(state.class.findIndex( (obj) => obj.name === 'B'))].seats = state.classB.length;
      }
      if(payload.className === 'C'){
        state.classC.splice(state.classC.findIndex(v => v.id === payload.id), 1);
        state.class[(state.class.findIndex( (obj) => obj.name === 'C'))].seats = state.classC.length;
      }
      if(payload.className === 'D'){
        state.classD.splice(state.classD.findIndex(v => v.id === payload.id), 1);
        state.class[(state.class.findIndex( (obj) => obj.name === 'D'))].seats = state.classD.length;
      }      
    }

  },
  actions: {
    setParentsAction(context, payload){
      context.commit('setParents', payload)
    },
    setChildAction(context, payload){
      context.commit('setChild', payload)
    }
  },
  getters: {
    getIsAuth(state){
      return state.isAuth;
    },
    getParents(state){
      return state.parents;
    },
    getChild(state){
      return state.child;
    },
    getClassA(state){
      return state.classA;
    },
    getClassB(state){
      return state.classB;
    },
    getClassC(state){
      return state.classC;
    },
    getClassD(state){
      return state.classD;
    }

  }
})
