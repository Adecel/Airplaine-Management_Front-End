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
          <b-button variant="primary" class="px-5" @click="addNewFlghtLiner"
            >Add flight line</b-button
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
        flghtLine: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewFlghtLiner() {
        axios
          .post("http://localhost:7000/api/flight-line/save", this.flghtLine)
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