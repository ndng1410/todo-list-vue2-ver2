<template>
  <div>
    <div v-for="(task, index) in tasks" :key="task.id" id="todo-list">
      <div class="card-box">
        <div class="card-box-wrapper">
          <input
            class="disabled-input"
            disabled
            :placeholder="task.taskName"
            type="text"
            v-model="input"
          />
        </div>
        <div class="card-box-btn">
          <button @click="onDelete(index)" class="btn-delete">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "../assets/store/store.js";
import { mapState } from "vuex";

export default {
  props: {
    taskName: String,
    index: Number,
  },
  data() {
    return {
      input: "",
    };
  },
  computed: mapState({
    tasks: (state) => state.tasks,
  }),
  methods: {
    onDelete(index) {
      this.$store.dispatch("removeTask", index);
      console.log(index);
    },
  },
};
</script>

<style></style>
