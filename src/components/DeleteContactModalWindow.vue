<template>
  <div class="delete-contact-modal-window">
    <div class="block">

      <!-- Select the text depending on the call -->
      <h3
          class="delete-contact-modal-window__title"
      >
        {{ modal === "deleteContact" ? 'Видалити контакт?' : 'Видалити поле?' }}
      </h3>

      <!-- Delete a contact or its info -->
      <button
          class="delete-contact-modal-window__btn btn-yes"
          @click="deleteContactAndContactInfo"
      >
        Так
      </button>

      <!-- Hide Modal -->
      <button
          class="delete-contact-modal-window__btn btn-no"
          @click="hideDeleteContactModalWindow"
      >
        Ні
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteContactModalWindow",
  props: {
    index: {
      type: Number
    },
    contact: {
      type: Object
    },
    contactKey: {
      type: String
    },
    contactIndex: {
      type: Number
    },
    modal: {
      type: String
    }
  },
  computed: {
    contactData() {
      return {'contactKey': this.contactKey, 'contactIndex': this.contactIndex}
    }
  },
  methods: {
    deleteContactAndContactInfo() {
      if (this.modal === "deleteContact") {
        this.deleteContact(this.index)
        this.hideDeleteContactModalWindow()
      } else {
        if (Object.keys(this.contact).length === 1) {
          this.deleteContactInfo()
          this.deleteContact(this.contactIndex)
          this.$emit('goToAllContactsPage')
        } else {
          this.$emit('makeContactCopy')
          this.deleteContactInfo()
          this.hideDeleteContactModalWindow()
        }
      }
    },
    hideDeleteContactModalWindow() {
      this.$emit('hideDeleteContactModalWindow')
    },
    deleteContactInfo() {
      this.$store.commit("deleteContactInfo", this.contactData)
    },
    deleteContact(e) {
      this.$store.commit("deleteContact", e)
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  height: 120px;
}

.btn-yes:hover {
  background-color: #1f5902;
}

.btn-no:hover {
  background-color: #e50e0e;
}

.delete-contact-modal-window {
  height: 340px;
  width: 300px;
  background-color: #2a2727;

  &__title {
    padding-top: 15px;
    margin-bottom: 33px;
    font-size: 22px;
    line-height: 22px;
    color: #2a2727;
  }

  &__btn {
    cursor: pointer;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: #2a2727;
    color: #fff;
    transition: all .5s;
  }

  &__btn:hover {
    transform: scale(1.05);
    transition: all .5s;
  }

  &__btn + &__btn {
    margin-left: 20px;
  }
}

</style>