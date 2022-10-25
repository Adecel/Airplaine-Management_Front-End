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
          <b-button variant="primary" class="px-5" @click="addNewCustomer"
            >Add Plane</b-button
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
    data() {
      return {
        plane: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewCustomer() {
        axios
          .post("http://localhost:7000/plane/save", this.plane)
          .then((response) => {
            console.log(response.data);
            this.$emit("closeCreateModal");
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