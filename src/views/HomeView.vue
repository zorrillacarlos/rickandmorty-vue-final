<template>
  <div>
    <h1>Rick and Morty</h1>
    <Cards :personajesProps="characters" />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Cards,
  },

  computed: {
    ...mapState(["characters"]),
  },

  created() {
    this.$store.dispatch("getCharacters");
  },
};
</script>

<style></style>
