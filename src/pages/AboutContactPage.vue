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
          Детальна інформація <br> про контакт
        </h3>
        <div class="about-contact-page__contact-block">

          <!-- Display list of contact info -->
          <div
              class="about-contact-page__contact-info"
              v-for="(key, index) in Object.keys(contact)"
              :key="index"
          >
            <span
                class="about-contact-page__contact-key"
            >
              {{ key }}:
            </span> <br>
            <span
                class="about-contact-page__contact-value"
            >
              {{ contact[key] }}
            </span>

            <!-- Show Edit Modal -->
            <span
                class="about-contact-page__contact-edit"
                @click="showEditContactModalWindow(key)"
            >
            </span>

            <!-- Show Delete Modal -->
            <span
                class="about-contact-page__contact-delete"
                @click="showDeleteContactModalWindow(key)"
            >
            </span>
          </div>
        </div>

        <!-- Delete Contact -->
        <delete-contact-modal-window
            class="modal-window"
            v-if="showDeleteModal"
            :contact="contact"
            :contactKey="contactKey"
            :contactIndex="contactIndex"
            :modal="modal"
            @hideDeleteContactModalWindow="showDeleteModal = false"
            @goToAllContactsPage="goToAllContactsPage"
            @makeContactCopy="makeContactCopy"
        >
        </delete-contact-modal-window>

        <!-- Edit Contact -->
        <edit-contact-modal-window
            class="modal-window"
            v-if="showEditModal"
            :contact="contact"
            :contactKey="contactKey"
            :contactValue="contactValue"
            :contactIndex="contactIndex"
            @hideEditModalWindow="showEditModal = false"
            @makeContactCopy="makeContactCopy"
        >
        </edit-contact-modal-window>

        <!-- Add New Info -->
        <add-new-info-modal-window
            class="modal-window"
            v-if="showAddInfoModal"
            :contactIndex="contactIndex"
            @hideAddNewInfoModalWindow="showAddInfoModal = false"
            @makeContactCopy="makeContactCopy"
        >
        </add-new-info-modal-window>

        <div class="about-contact-page__contact-btns">

          <!-- Rollback last change -->
          <button
              class="about-contact-page__contact-btn-cancel"
              @click="rollbackContact"
              data-title="Скасувати останню дію"
              :disabled='!contactCopy'
              :class="!contactCopy ? 'btn-disable' : ''"
          >
          </button>

          <!-- Show Add New Info Modal -->
          <button
              class="about-contact-page__contact-btn-add"
              @click="showAddNewInfoModalWindow"
              data-title="Додати нове поле"
          >
          </button>

        </div>
      </div>

      <!-- Go to All Contacts Page -->
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
import DeleteContactModalWindow from "../components/DeleteContactModalWindow";
import AddNewInfoModalWindow from "../components/AddNewInfoModalWindow.vue";
import EditContactModalWindow from "../components/EditContactModalWindow.vue";

import extend from 'extend'

export default {
  name: "AboutContactPage",
  data() {
    return {
      contactKey: '',
      contactValue: '',
      showDeleteModal: false,
      showAddInfoModal: false,
      showEditModal: false,
      modal: "deleteContactInfo",
      contactCopy: null,
    }
  },
  components: {
    DeleteContactModalWindow,
    AddNewInfoModalWindow,
    EditContactModalWindow,
  },
  computed: {
    contact() {
      return this.contacts[this.contactIndex]
    },
    contacts() {
      return this.$store.state.contacts
    },
    contactIndex() {
      return this.$route.params.contactIndex
    },
    contactData() {
      return {'contactCopy': this.contactCopy, 'contactIndex': this.contactIndex}
    }
  },
  methods: {
    makeContactCopy() {
      this.contactCopy = extend(true, {}, this.contact)
    },
    rollbackContact() {
      this.$store.commit("rollbackContact", this.contactData)
      this.contactCopy = null
    },
    showDeleteContactModalWindow(key) {
      this.showDeleteModal = true
      this.contactKey = key
    },
    showEditContactModalWindow(key) {
      this.showEditModal = true
      this.contactKey = key
      this.contactValue = this.contact[key]
    },
    showAddNewInfoModalWindow() {
      this.showAddInfoModal = true
    },
    goToAllContactsPage() {
      this.$router.push({name: 'all-contacts'})
    },
  }
}
</script>

<style lang="scss" scoped>
.modal-window {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
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

    &-title {
      padding-top: 5px;
    }

    &-block {
      height: 200px;
      overflow-y: scroll;
      margin-bottom: 20px;
    }

    &-info {
      margin-left: 5px;
      margin-bottom: 8px;
      text-align: left;
      width: 278px;
      position: relative;
    }

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
    &-delete::before,
    &-btn-add::before,
    &-btn-cancel::before {
      cursor: pointer;
      position: absolute;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      color: #2a2727;
      font-size: 13px;
      line-height: 13px;
      transition: all .5s;
    }

    &-edit:hover::before,
    &-delete:hover::before {
      transform: scale(1.2);
      transition: all .5s;
    }

    &-edit::before {
      content: "\f4ff";
      right: 40px;
      top: 3px;
    }

    &-delete::before {
      content: "\f503";
      right: 20px;
      top: 3px;
    }

    &-btns {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-btn-add,
    &-btn-cancel {
      position: relative;
      cursor: pointer;
      height: 35px;
      transition: all .5s;
      width: 120px;
      border: 3px solid #2a2727;
      border-radius: 15px;
      box-sizing: border-box;
    }

    &-btn-add {
      margin-left: 20px;
      background-color: #1f5902;
    }

    &-btn-cancel {
      background-color: #e50e0e;
    }

    &-btn-cancel::before,
    &-btn-add::before {
      right: 45px;
      top: 8px;
      font-size: 28px;
      color: #2a2727;
    }

    &-btn-cancel::before {
      content: "\f359";
    }

    &-btn-add::before {
      content: "\f055";
    }

    &-btn-cancel:hover::after,
    &-btn-add:hover::after {
      content: attr(data-title);
      position: absolute;
      right: 0;
      left: 0;
      bottom: 40px;
      z-index: 1;
      background: #5e5a5a;
      color: #fff;
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 10px;
      padding: 2px;
      border: 1px solid #2a2727;
    }
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
  &__contact-btn-add:hover,
  &__contact-btn-cancel:hover {
    transform: scale(1.03);
    transition: all .4s;
  }
}

.btn-disable {
  cursor: auto;
  background-color: #706464;
}

.btn-disable::before {
  cursor: auto;
}

.btn-disable:hover {
  transform: scale(1);
}
</style>