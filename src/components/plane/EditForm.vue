<template>
    <b-form class="mt-3">
        <b-row>
        <b-row>
          <h4 class="text-secondary">Plane Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="Capacity " label="Capacity " label-for="Capacity ">
            <b-form-input
              id="Capacity"
              type="text"
              placeholder="Capacity "
              v-model="plane.capacity"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="model" label="model" label-for="model">
            <b-form-input
              id="model"
              type="text"
              placeholder="model"
              v-model="plane.model"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="6">
          <b-form-group id="name" label="Name" label-for="Name">
            <b-form-input
              id="Name"
              type="Name"
              placeholder="Name"
              v-model="plane.name"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="updateCustomer"
            >Update Plane</b-button
          >
        </b-col>
        <b-col>
          <b-button variant="warning" @click="triggerClose">Close</b-button>
        </b-col>
      </b-row>
    </b-form>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "CreateCustomerModal",
    props: {
      customerId: Number,
    },
    data() {
      return {
        plane: {},
      };
    },
    mounted() {
      this.getCusomterByID();
      //.log(this.getCusomterByID())
    },
    methods: {
      triggerClose() {
        this.$emit("closeEditModal");
      },
      getCusomterByID() {
        axios
          .get(`http://localhost:7000/api/plane/read/${this.customerId}`)
          .then((response) => {
            this.plane = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      updateCustomer() {
        axios
          .put(
            `http://localhost:7000/api/plane/update/${this.customerId}`,
            this.plane
          )
          .then((response) => {
            console.log(response.data);
            this.$emit("closeEditModal");
            this.$emit("reloadDataTable");
            this.$emit("showSuccessAlert");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>