<template>
  <div class="container my-4">
    <div class="row d-flex justify-content-center">
      <div
        class="card col-2 m-4 p-0"
        style="width: 25%"
        v-for="item in personajesProps"
        :key="item.id"
      >
        <img :src="item.image" class="card-img-top w-100" :alt="item.name" />
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">
            {{item.location.name}}
          </p>
          <span class="btn btn-primary">{{item.status}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    personajesProps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
