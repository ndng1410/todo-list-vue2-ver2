<template>
  <div id="todo-list">
    <form @submit.prevent="addNewTask">
      <div class="card-box">
        <div class="card-box-wrapper">
          <span class="card-box-title">{{ $t("task") }}</span>
          <input
            type="text"
            v-model="input"
            :placeholder="$t('task-suggest')"
            id="new-task"
          />
        </div>
        <div class="card-box-btn">
          <button>
            <span class="material-symbols-outlined"> add </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import CardTask from "./CardTask.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
// import { mapActions } from "vuex";
// import store from "../assets/store/store.js";
import { EventBus } from "../main";

export default {
  name: "task-itemlist",
  components: {
    // 'card-task': CardTask,
  },
  // computed nhận value từ store, task() có value = data tasks trong store
  computed: {
    ...mapState(["tasks", "currentID"]),
    ...mapGetters(["getTaskItem", "getCurrentId"]),
  },
  data() {
    return {
      input: "",
      nextTodoId: null,
    };
  },
  methods: {
    addNewTask() {
      // if (this.input.trim(" ") == "") {
      //   console.log("error");
      // } else {
      //   console.log(this.nextTodoId);
      //   this.$store.dispatch("setTask", {
      //     taskName: this.input,
      //     id: this.nextTodoId,
      //   });
      //   this.nextTodoId++;
      //   this.input = "";
      // }
      this.nextTodoId = this.$store.getters.getCurrentId + 1;
      console.log(this.$store.getters.getCurrentId);
      EventBus.$emit("addNewTaskItem", {
        taskName: this.input,
        id: this.nextTodoId,
      });
      this.$store.state.currentID++;
      this.input = "";
    },

    // ...mapActions({
    //   setTask: "setTask",
    // }),
    // removeTask(target) {
    //   this.$store.state.tasks.splice(target, 1);
    //   console.log(target);
    // },
  },
};
</script>

<style></style>
