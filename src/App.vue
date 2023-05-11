<template>
  <div id="app">
    <div class="header">
      <h1>{{ $t('heading') }}</h1>
      <change-lang></change-lang>
      <get-api></get-api>
    </div>
    <card-add></card-add>
    <!-- <input v-model="taskName" />
    <button @click="setTaskName">thay doi task</button>
    <h1>{{ getTaskName }}</h1>
    <h2>{{ getTaskid }}</h2>
    <button @click="gettasklist">123124</button> -->
    <card-task></card-task>
  </div>
</template>

<script>
import "./assets/style/global.css";
import CardAddVue from "./components/CardAdd.vue";
import CardTaskVue from "./components/CardTask.vue";
import { EventBus } from "./main";
import ChangeLangVue from './components/ChangeLang.vue';
import GetAPIVue from './components/GetAPI.vue';
// import { mapState } from 'vuex';
// import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    "card-add": CardAddVue,
    "card-task": CardTaskVue,
    "change-lang": ChangeLangVue,
    "get-api": GetAPIVue,
  },
  mounted() {
    EventBus.$on("addNewTaskItem", (object) => this.onReceive(object));
  },
  // receiver() {
  //   EventBus.$on('addNewTaskItem', text => this.onReceive(text));
  // },
  methods: {
    onReceive(object) {
      if (object.taskName.trim(" ") == "") {
        console.log("error");
        alert(this.$t('warning'));
      } else {
        // console.log(object.taskName);
        this.$store.dispatch("setTask", {
          taskName: object.taskName,
          id: object.id,
        });
      }
    },
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
  margin-top: 60px;
}
</style>
