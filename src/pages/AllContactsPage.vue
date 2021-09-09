<template>
  <div class="all-contacts-page">
    <div class="container">

      <h1
          class="all-contacts-page__title"
      >
        Книга контактів
      </h1>

      <div class="all-contacts-page__contacts">

        <h2 class="all-contacts-page__contacts-title">
          Всі контакти:
        </h2>

        <div
            class="all-contacts-page__contact"
            v-for="(contact, index) in contacts"
            :key="index"
        >
          <div
              class="all-contacts-page__contact-info"
          >
            {{contact.name}}
          </div>
          <div
              class="all-contacts-page__contact-btn"
              @click="showDeteleContactModalWindow(index)"
          >
          </div>
        </div>

        <!-- Delete Contact Modal Window -->

        <delete-contact-modal-window
            class="modal-window"
            v-show="showDeleteModal"
            :index="indexOfDeleteContact"
            @hideDeleteContactModalWindow="hideDeleteContactModalWindow"
        >
        </delete-contact-modal-window>

        <!-- Add New Contact Modal Window -->

        <add-contact-modal-window
            class="modal-window"
            v-show="showAddModal"
            @hideAddContactModalWindow="hideAddContactModalWindow"
        >
        </add-contact-modal-window>
      </div>

      <button
          class="all-contacts-page__btn"
          @click="showAddContactModalWindow"
          :disabled = 'showAddModal'
          :class = "showAddModal ? 'all-contacts-page__btn-disable' : ''"
      >
        + Додати новий контакт
      </button>
    </div>
  </div>
</template>

<script>
import DeleteContactModalWindow from "../components/DeleteContactModalWindow.vue";
import AddContactModalWindow from "../components/AddContactModalWindow.vue";

export default {
  name: "AllContactsPage.vue",
  components: {
    DeleteContactModalWindow,
    AddContactModalWindow
  },
  data() {
    return {
      showDeleteModal: false,
      showAddModal: false,
      indexOfDeleteContact: null,
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
  },
  methods: {
    test() {
      console.log(this.contacts)
    },
    showDeteleContactModalWindow(index) {
      this.showDeleteModal = true
      this.indexOfDeleteContact = index
    },
    hideDeleteContactModalWindow() {
      this.showDeleteModal = false
    },
    showAddContactModalWindow() {
      this.showAddModal = true
    },
    hideAddContactModalWindow() {
      this.showAddModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  background-color: #2a2727;
  width: 400px;
  height: 500px;
  border-radius: 15px;
}
.modal-window {
  position: absolute;
  top: 0;
  left: 0;
}
.all-contacts-page {
  text-align: center;
  &__title {
    color: #fff;
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
    padding-top: 15px;
    margin-bottom: 15px;
  }
  &__contacts {
    background-color: #fff;
    height: 340px;
    width: 300px;
    margin: 0 auto 20px;
    border-radius: 14px;
    position: relative;
  }
  &__contacts-title {
    text-align: left;
    color: #2a2727;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 5px;
    margin: 0;
  }
  &__contact {
    margin: 4px auto;
    height: 20px;
    width: 280px;
    border: 2px solid #2a2727;
    text-align: left;
    overflow: hidden;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
  &__contact-info {
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
    width: 240px;
    cursor: pointer;
    transition: all .5s;
  }
  &__contact-info:hover {
    transform: scale(1.04);
    transition: all .5s;
  }
  &__contact-btn {
    position: relative;
    transition: all .5s;
  }
  &__contact-btn:hover::after {
    transform:scale(1.06);
    transition: all .5s;
    color: #e50e0e;
  }
  &__contact-btn::after {
    cursor: pointer;
    position: absolute;
    content: "\f2ed";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #2a2727;
    font-size: 15px;
    line-height: 20px;
    top: -10px;
    left: -22px;
  }
  &__btn {
    cursor: pointer;
    width: 300px;
    height: 40px;
    border-radius: 15px;
    border: 4px solid #fff;
    background-color: #1f5902;
    color: #fff;
    font-size: 20px;
    transition: all .5s;
  }
  &__btn:hover {
    transform:scale(1.05);
    transition: all .5s;
  }
  &__btn-disable {
    cursor: auto;
    background-color: #69a854;
  }
  &__btn-disable:hover {
    transform:scale(1);
  }
}
</style>