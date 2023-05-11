<template>
  <button class="api-btn" id="testAPI" @click="getEntries()" type="primary">
    {{ $t("btn-info") }}
  </button>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    getEntries() {
      axios
        .get("https://api.publicapis.org/entries?Category=Animals")
        .then(function (response) {
          console.log(response.data.entries);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
