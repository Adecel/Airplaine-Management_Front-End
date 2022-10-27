<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Flght Line Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="description " label="description" label-for="description ">
            <b-form-input
              id="description"
              type="text"
              placeholder="description "
              v-model="flghtLine.description"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="departure" label="departure" label-for="departure">
            <b-form-input
              id="departure"
              type="text"
              placeholder="departure"
              v-model="flghtLine.departure"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
  
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="update"
            >Update Flght Line</b-button
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
        flghtLine: {},
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
          .get(`http://localhost:7000/api/flight-line/read/${this.customerId}`)
          .then((response) => {
            this.flghtLine = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      update() {
        axios
          .put(
            `http://localhost:7000/api/flight-line/update/${this.customerId}`,
            this.flghtLine
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