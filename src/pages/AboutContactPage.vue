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
            >
            </span>
            <span
                class="contact-delete"
                @click="showDeteleContactModalWindow(key)"
            >
            </span>
          </div>
        </div>

        <delete-contact-modal-window
            class="modal-window"
            v-show="showDeleteModal"
            :contact="contact"
            :contactKey="contactKey"
            :contactIndex="contactIndex"
            :modal="modal"
            @hideDeleteContactModalWindow="hideDeleteContactModalWindow"
            @goToAllContactsPage="goToAllContactsPage"
        >
        </delete-contact-modal-window>

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

export default {
  name: "AboutContactPage.vue",
  data() {
    return {
      contact: '',
      contactKey: '',
      showDeleteModal: false,
      modal: "deleteContactInfo",
    }
  },
  components: {
    DeleteContactModalWindow
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
    }
  },
  methods: {
    showDeteleContactModalWindow(key) {
      this.showDeleteModal = true
      this.contactKey = key
    },
    hideDeleteContactModalWindow() {
      this.showDeleteModal = false
    },
    goToAllContactsPage() {
      this.$router.push ({name: 'all-contacts'})
    }
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
    height: 230px;
    overflow: hidden;
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
    transition: all .5s;
  }
  &__btn:hover {
    transform:scale(1.05);
    transition: all .5s;
  }
  &__contact-info {
    margin-left: 13px;
    margin-bottom: 8px;
    text-align: left;
    width: 300px;
    position: relative;
  }
}
</style>