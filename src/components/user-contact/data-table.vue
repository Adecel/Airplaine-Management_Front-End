<template>

<layout-default>
    <div>
        <!-- <HeaderBar/> -->
      <b-row>
        <b-alert v-model="showSuccessAlert" variant="success" dismissible>
          {{ alertMessage }}
        </b-alert>
      </b-row>
      <b-row>
        <overview
          :totalCustomers="numberOfCustomers"
          :activeCustomers="activeCustomers"
        ></overview>
      </b-row>
      <b-row class="mt-3">
        <b-card>
          <b-row align-h="between">
            <b-col cols="6">
              <h3>{{ tableHeader }}</h3>
            </b-col>
            <b-col cols="2">
              <b-row>
                <b-col>
                
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-table
              striped
              hover
              :items="items"
              :fields="fields"
              class="text-center"
            >
              <template #cell(contact_name)="data">
                {{
                  `${data.item.name} ${data.item.model}`
                }}
              </template>
              <template #cell(customer_status)="data">
                <b-icon-bookmark-check-fill
                  variant="success"
                  v-if="data.item.customer_status === ''"
                ></b-icon-bookmark-check-fill>
                <b-icon-bookmark-x-fill
                  variant="danger"
                  v-else
                ></b-icon-bookmark-x-fill>
              </template>
              <template #cell(actions)="data">
                <b-row>
                  <b-col cols="7">
                    <b-icon-pencil-square
                      class="action-item"
                      variant="primary"
                      @click="getRowData(data.item.id)"
                    ></b-icon-pencil-square>
                  </b-col>
                <b-col cols="1">
                    <b-icon-trash-fill
                      class="action-item"
                      variant="danger"
                      @click="showDeleteModal(data.item.id)"
                    ></b-icon-trash-fill>
                  </b-col>
                </b-row>
              </template>
            </b-table>
          </b-row>
        </b-card>
      </b-row>
  
      <!-- Modal for adding new customers -->
     
  
    
      <!-- Delete Customer Modal -->
      <b-modal
        ref="delete-customer-modal"
        size="md"
        hide-footer
        title="Confirm Deletion"
      >
        <delete-modal
          @closeDeleteModal="closeDeleteModal"
          @reloadDataTable="getCustomerData"
          @showDeleteAlert="showDeleteSuccessModal"
          :customerId="customerId"
        ></delete-modal>
      </b-modal>
    </div></layout-default>
  </template>
 
  <script>
  import axios from "axios";
  import Overview from "./Overview.vue";
  import DeleteModal from "./DeleteModal.vue";
  import LayoutDefault from "@/layouts/LayoutDefault.vue";

  
  export default {
    components: {
      Overview,
      DeleteModal,
      LayoutDefault
    
    },
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
  
        fields: [
          {
            key: "id",
            label: "ID",
            sortable: false,
          },
          {
            key: "user.name.firstName",
            label: "FirstName",
            sortable: false,
          },
          {
            key: "user.name.middleName",
            label: "Middle Name",
            sortable: false,
          },
          {
            key: "user.name.lastName",
            label: "Last Name",
            sortable: false,
          },  {
            key: "user.gender.gender",
            label: "Gender",
            sortable: false,
          },
          {
            key: "contactType.email",
            label: "Email",
            sortable: false,
          },
          {
            key: "contactType.phoneNumber",
            label: "Phone Number",
            sortable: false,
          },
          
          "actions",
        ],
        items: [],
        numberOfCustomers: 0,
        activeCustomers: 0,
        activeCustomersData: [],
        customerId: 0,
        companySearchTerm: "",
        tableHeader: "",
        showSuccessAlert: false,
        alertMessage: "",
      };
    },
    mounted() {
      this.getCustomerData();
    },
    methods: {
      showCreateModal() {
        this.$refs["create-customer-modal"].show();
      },
      closeCreateModal() {
        this.$refs["create-customer-modal"].hide();
      },
      getCustomerData() {
        axios
          .get("http://localhost:7000/api/user-contact/findAll")
          .then((response) => {
            this.tableHeader = "Total ";
            this.items = response.data;
            this.numberOfCustomers = response.data.length;
          
          })
          .catch((error) => {
            console.log(error);
          });
      },
    
      closeEditModal() {
        this.$refs["edit-customer-modal"].hide();
      },
      setFilterTotalIsActive() {
        this.tableHeader = "Total ";
        this.getCustomerData();
      },
      setFilterActiveIsActive() {
        this.tableHeader = "Active ";
        this.items = this.activeCustomersData;
      },
      showAlertCreate() {
        this.showSuccessAlert = true;
        this.alertMessage = "plane was created successfully!";
      },
      showAlertUpdate() {
        this.showSuccessAlert = true;
        this.alertMessage = "plane  was updated successfully";
      },
      showDeleteModal(id) {
        this.$refs["delete-customer-modal"].show();
        this.customerId = id;
      },
      closeDeleteModal() {
        this.$refs["delete-customer-modal"].hide();
      },
      showDeleteSuccessModal() {
        this.showSuccessAlert = true;
        this.alertMessage = "plane was deleted successfully!";
      },
    },
  };
  </script>
  
  <style>
  .action-item:hover {
    cursor: pointer;
  }
  </style>