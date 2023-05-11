import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      // { id: 1, taskName: "job1" },
      // { id: 2, taskName: "job2" },
      // { id: 3, taskName: "job3" },
    ],
  },
  getters: {
    getTaskItem(state) {
      return state.tasks;
    },
  },
  mutations: {
    // setTaskName(state, newTaskName) {
    //   state.taskName = newTaskName;
    // },
    // setTaskId(state, newTaskId) {
    //   state.id = newTaskId;
    // },
    SET_TASK(state, newTask) {
      state.tasks.push(newTask);
      console.log(state.tasks);
    },
    REMOVE_TASK(state, removedTask) {
      state.tasks.splice(removedTask, 1);
    },
  },
  actions: {
    // handleSetTaskName(context, newTaskName) {
    //   context.commit("setTaskName", newTaskName);
    // },
    // handleSetTaskId(context, newTaskId) {
    //   context.commit("setTaskId", newTaskId);
    // },
    // handleSetTask(context, newTask) {
    //   context.commit("setTask", newTask);
    // },
    setTask(context, newTask) {
      context.commit('SET_TASK', newTask);
    }, 
    removeTask(context, removedTask) {
      context.commit('REMOVE_TASK', removedTask);
    }
  },
});
