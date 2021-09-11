<template>
  <div class="all-contacts-page">
    <div class="container">

      <h1 class="all-contacts-page__title title">
        Книга контактів
      </h1>

      <!-- Add a new class when opening one of the modals -->
      <div
          class="all-contacts-page__contacts"
          :class="showDeleteModal || showAddModal ? 'all-contacts-page__contacts-hidden' : ''"
      >
        <h2 class="all-contacts-page__contacts-title">
          Всі контакти:
        </h2>

        <!-- Display list of contacts -->
        <div
            class="all-contacts-page__contact"
            v-for="(contact, index) in contacts"
            :key="index"
        >
          <router-link
              class="all-contacts-page__contact-info"
              :to = "{ name: 'about-contact', params: {contactName: contact.name, contactIndex: index}}"
          >
            {{ contact.name  ? contact.name :  contact.phone ? contact.phone : `Контакт № ${index + 1}` }}
          </router-link>

          <div
              class="all-contacts-page__contact-btn"
              @click="showDeleteContactModalWindow(index)"
          >
          </div>
        </div>

        <!-- Delete Contact -->
        <delete-contact-modal-window
            class="modal-window"
            v-show="showDeleteModal"
            :index="indexOfDeleteContact"
            :modal="modal"
            @hideDeleteContactModalWindow="showDeleteModal = false"
        >
        </delete-contact-modal-window>

        <!-- Add New Contact -->
        <add-new-contact-modal-window
            class="modal-window"
            v-show="showAddModal"
            @hideAddContactModalWindow="showAddModal = false"
        >
        </add-new-contact-modal-window>
      </div>

      <!-- Show Add Contact Modal -->
      <button
          class="all-contacts-page__btn"
          @click="showAddModal = true"
          :disabled='showAddModal'
          :class="showAddModal ? 'all-contacts-page__btn-disable' : ''"
      >
        + Додати новий контакт
      </button>
    </div>
  </div>
</template>

<script>
import DeleteContactModalWindow from "../components/DeleteContactModalWindow";
import AddNewContactModalWindow from "../components/AddNewContactModalWindow";

export default {
  name: "AllContactsPage.vue",
  components: {
    DeleteContactModalWindow,
    AddNewContactModalWindow
  },
  data() {
    return {
      showDeleteModal: false,
      showAddModal: false,
      indexOfDeleteContact: null,
      modal: "deleteContact"
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
  },
  methods: {
    showDeleteContactModalWindow(index) {
      this.indexOfDeleteContact = index
      this.showDeleteModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.modal-window {
  position: absolute;
  top: 65px;
  left: 50px;
}

.all-contacts-page {
  text-align: center;
  &__contacts {
    background-color: #fff;
    height: 340px;
    width: 300px;
    margin: 0 auto 20px;
    overflow-y: scroll;
  }
  &__contacts-hidden {
    overflow: hidden;
  }
  &__contacts-title {
    text-align: left;
    color: #2a2727;
    padding: 10px 0 10px 15px;
    margin: 0;
  }
  &__contact {
    margin: 4px auto;
    height: 20px;
    width: 275px;
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
    color: #2a2727;
    text-decoration: none;
    overflow: hidden;
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