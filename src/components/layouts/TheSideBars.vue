<template>
  <div id="app">
    <div id="view" :class="[{'collapsed' : collapsed}]">
      <!-- <router-view/> -->
    </div>
    <sidebar-menu
      class="sidebar bg-danger"
      :menu="menu"
      :collapsed="collapsed"
      @item-click="onItemClick"
      @collapse="onCollapse"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: true,
          // title: "Getting Started" <i class="fa-thin fa-paper-plane"></i>
        },
        {
          href: "/flight-line",
          title: "light line",
          icon: "fa fa-list-ul"
        },
        {
          href: "/plane",
          title: "plane",
          icon: "fa fa-plane"
        },
        {
          href: "/contact",
          title: "contact",
          icon: "fa fa-address-book"
        },
        {
          href: "/user",
          title: "User",
          icon: "fa fa-user",
       
        }
      
        ,
        {
          href: "/flight",
          title: "Filght",
          icon: "fa fa-list-ul"       
        },
        {
          href: "/user-contat",
          title: "Contact",
          icon: "fa fa-list-ul"       
        },
        {
          href: "/user-role",
          title: "User Role",
          icon: "fa fa-list-ul"       
        },
        {
          href: "/role",
          title: "Role",
          icon: "fa fa-list-ul"       
        },
        {
          href: "/tiket",
          title: "Tiket",
          icon: "fa fa-list-ul"       
        },
        {
          href: "/line",
          title: "Tiket",
          icon: "fa fa-list-ul"       
        },
        {
          href: "/hostess",
          title: "Hostess",
          icon: "fa fa-list-ul"       
        },
        {
          href: "/flight-pilot",
          title: "Pilot",
          icon: "fa fa-list-ul"       
        },

        
      ],
      collapsed: true
    };
  },
  methods: {
    onItemClick(e, i) {
      console.log("onItemClick");
    },
    onCollapse(c) {
      console.log("onCollapse");
      this.collapsed = c;
    }
  }
};
</script>

<style>
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 50px;
}

.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome";
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome";
}
</style>