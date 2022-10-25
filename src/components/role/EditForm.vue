<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Role Details </h4>
        </b-row>
       
        <b-col cols="6">
          <b-form-group id="description" label="description" label-for="description">
            <b-form-input
              id="description"
              type="text"
              placeholder="description"
              v-model="role.description"
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
              v-model="role.name"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="update"
            >Update </b-button
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
          .get(`http://localhost:7000/role/read/${this.customerId}`)
          .then((response) => {
            this.plane = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      update() {
        axios
          .put(
            `http://localhost:7000/role/update/${this.customerId}`,
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