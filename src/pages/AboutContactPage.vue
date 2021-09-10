<template>
  <div class="about-contact-page">
    <div class="container">
      <h1
          class="about-contact-page__title title"
      >
        Книга контактів
      </h1>
      <div class="about-contact-page__contact">
        <h3 class="about-contact-page__contact-title">
          Детальна інформація <br> про контакт "{{contactName}}"
        </h3>
        <div class="about-contact-page__contact-block">
          <div
              class="about-contact-page__contact-info"
              v-for="(key, index) in Object.keys(contact)"
              :key="index"
          >
            <span
                class="contact-key"
            >
              {{key}}:
            </span> <br>
            <span
                class="contact-value"
              >
              {{contact[key]}}
            </span>
            <span
                class="contact-edit"
                @click="showEditContactModalWindow(key)"
            >
            </span>
            <span
                class="contact-delete"
                @click="showDeleteContactModalWindow(key)"
            >
            </span>
          </div>
        </div>

        <!-- Delete Contact Modal Window -->

        <delete-contact-modal-window
            class="modal-window"
            v-if="showDeleteModal"
            :contact="contact"
            :contactKey="contactKey"
            :contactIndex="contactIndex"
            :modal="modal"
            @hideDeleteContactModalWindow="hideDeleteContactModalWindow"
            @goToAllContactsPage="goToAllContactsPage"
        >
        </delete-contact-modal-window>

        <!-- Edit Contact Modal Window-->

        <edit-contact-modal-window
            class="modal-window"
            v-if="showEditModal"
            :contact="contact"
            :contactKey="contactKey"
            :contactValue="contactValue"
            :contactIndex="contactIndex"
            @hideEditModalWindow="hideEditModalWindow"
        >
        </edit-contact-modal-window>

        <!-- Add New Info Modal Window -->

        <add-new-info-modal-window
            class="modal-window"
            v-if="showAddInfoModal"
            :contactIndex="contactIndex"
            @hideAddNewInfoModalWindow="hideAddNewInfoModalWindow"
        >
        </add-new-info-modal-window>

        <button
            class="about-contact-page__contact-btn-add"
            @click="showAddNewInfoModalWindow"
        >
          + Додати поле
        </button>

      </div>

      <button
          class="about-contact-page__btn"
          @click="goToAllContactsPage"
      >
         Вернутись до списку контактів
      </button>

    </div>
  </div>
</template>

<script>
import DeleteContactModalWindow from "../components/DeleteContactModalWindow.vue";
import AddNewInfoModalWindow from "../components/AddNewInfoModalWindow.vue";
import EditContactModalWindow from "../components/EditContactModalWindow.vue";

export default {
  name: "AboutContactPage.vue",
  data() {
    return {
      contact: '',
      contactKey: '',
      contactValue: '',
      showDeleteModal: false,
      showAddInfoModal: false,
      showEditModal: false,
      modal: "deleteContactInfo",
    }
  },
  components: {
    DeleteContactModalWindow,
    AddNewInfoModalWindow,
    EditContactModalWindow
  },
  created() {
    this.contact = this.contacts.find(contact => contact.name == this.$route.params.contactName)
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
    contactIndex() {
      return this.contacts.findIndex(contact => contact === this.contact)
    },
    contactName() {
      return this.contact.name
    },
  },
  methods: {
    showDeleteContactModalWindow(key) {
      this.showDeleteModal = true
      this.contactKey = key
    },
    hideDeleteContactModalWindow() {
      this.showDeleteModal = false
    },
    showEditContactModalWindow( key) {
      this.showEditModal = true
      this.contactKey = key
      this.contactValue = this.contact[key]
    },
    hideEditModalWindow() {
      this.showEditModal = false
    },
    showAddNewInfoModalWindow() {
      this.showAddInfoModal = true
    },
    hideAddNewInfoModalWindow() {
      this.showAddInfoModal = false
    },
    goToAllContactsPage() {
      this.$router.push ({name: 'all-contacts'})
    },
  }
}
</script>

<style lang="scss" scoped>
.modal-window {
  position: absolute;
  top: 0;
  left: 0;
}
.contact {
  &-key {
    display: inline-block;
    text-align: left;
    height: 20px;
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  &-value {
    display: inline-block;
    text-align: left;
    height: 20px;
    font-size: 18px;
    line-height: 18px;
    font-style: oblique;
  }
  &-edit,
  &-delete {
    position: absolute;
    top: 0;
    right: 0;
  }
  &-edit::before,
  &-delete::before{
    cursor: pointer;
    position: absolute;
    content: "\f4ff";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #2a2727;
    font-size: 13px;
    line-height: 13px;
    right: 40px;
    top: 3px;
    transition: all .5s;
  }
  &-edit:hover::before,
  &-delete:hover::before{
    transform:scale(1.2);
    transition: all .5s;
  }
  &-delete::before {
    content: "\f503";
    right: 20px;
    top: 3px;
  }
}
.about-contact-page {
  text-align: center;
  &__contact {
    background-color: #fff;
    height: 340px;
    width: 300px;
    margin: 20px auto 20px;
    border-radius: 14px;
    position: relative;
  }
  &__contact-title {
    padding-top: 5px;
  }
  &__contact-block {
    height: 200px;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
  &__contact-info {
    margin-left: 5px;
    margin-bottom: 8px;
    text-align: left;
    width: 278px;
    position: relative;
  }
  &__contact-btn-add {
    cursor: pointer;
    width: 150px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #1f5902;
    color: #fff;
    font-size: 18px;
    transition: all .5s;
  }
  &__btn {
    cursor: pointer;
    width: 300px;
    height: 40px;
    border-radius: 15px;
    border: 4px solid #fff;
    background-color: #1f5902;
    color: #fff;
    font-size: 18px;
    transition: all .4s;
  }
  &__btn:hover,
  &__contact-btn-add:hover {
    transform:scale(1.03);
    transition: all .4s;
  }
}
</style>