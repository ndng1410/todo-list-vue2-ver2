<template>
  <button class="api-btn" id="testAPI" @click="getEntries()" type="primary">
    {{ $t("btn-info") }}
  </button>
</template>

<script>
import axios from "axios";
import { EventBus } from "../main";
import store from "@/assets/store/store";

export default {
  // data() {
  //   tasks: []
  // },
  methods: {
    getEntries() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
          console.log(response.data.length);
          var arrayAPI = response.data;
          for (var i = 0; i < response.data.length; i++) {
            // var thisTask = {};
            // thisTask.id = arrayAPI[i].id;
            // thisTask.title = arrayAPI[i].title;
            EventBus.$emit("addNewTaskItem", {
              taskName: arrayAPI[i].title,
              id: arrayAPI[i].id,
            });
          }
          store.dispatch("setCurrentID", response.data.length);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
