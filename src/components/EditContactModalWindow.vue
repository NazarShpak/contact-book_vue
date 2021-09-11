<template>
  <div class="edit-contact-modal-window">
    <div class="block">

      <h3 class="edit-contact-modal-window__title">
        Редагувати поле
      </h3>

      <!-- Hide Edit Modal -->
      <span
          class="edit-contact-modal-window__btn-close"
          @click="hideEditModalWindow"
      >
      </span>

      <div class="edit-contact-modal-window__input-blocks">

        <!-- For key edit -->
        <div class="edit-contact-modal-window__input-block">
          <input
              class="edit-contact-modal-window__input"
              type="text"
              name="contact-key"
              v-model="editKey"
          >

          <block-of-edit-buttons
              class="edit-contact-modal-window__btns"
              @cancelEdit="cancelEdit(editKey)"
          >
          </block-of-edit-buttons>
        </div>

        <!-- For value edit -->
        <div class="edit-contact-modal-window__input-block">
          <input
              class="edit-contact-modal-window__input"
              type="text"
              name="contact-value"
              v-model="editValue"
          >

          <block-of-edit-buttons
              class="edit-contact-modal-window__btns"
              @cancelEdit="cancelEdit(editValue)"
          >
          </block-of-edit-buttons>
        </div>
      </div>

      <!-- Save new values -->
      <button
          class="edit-contact-modal-window__btn-save"
          @click="saveNewContactValues"
      >
        Зберегти зміни
      </button>

    </div>
  </div>
</template>

<script>
import BlockOfEditButtons from "./BlockOfEditButtons";

export default {
  name: "EditContactModalWindow.vue",
  data() {
    return {
      showUndoFirst: true,
      showUndoSecond: true,
      copyContactKey: '',
      copyContactValue: '',
      editKey: '',
      editValue: '',
    }
  },
  components: {
    BlockOfEditButtons
  },
  props: {
    contact: {
      type: Object
    },
    contactKey: {
      type: String
    },
    contactValue: {
      type: String
    },
    contactIndex: {
      type: Number
    },
  },
  created() {
    this.editKey = this.contactKey.slice()
    this.editValue = this.contactValue.slice()
    this.copyContactKey = this.contactKey.slice()
    this.copyContactValue = this.contactValue.slice()
  },
  computed: {
    contactData() {
      return [this.editKey , this.editValue, this.contactIndex, this.contactKey]
    }
  },
  methods: {
    hideEditModalWindow() {
      this.$emit('hideEditModalWindow')
    },
    cancelEdit(e) {
      e === this.editKey ? this.editKey = this.copyContactKey : this.editValue = this.copyContactValue
    },
    saveNewContactValues() {
      this.$store.commit("editContactInfo", this.contactData)
      this.hideEditModalWindow()
      this.cleanInputs()
    },
    cleanInputs() {
      this.editKey = ''
      this.editValue =''
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  height: 220px;
}

.edit-contact-modal-window {
  height: 340px;
  width: 300px;
  background-color: #2a2727;
  position: relative;
  &__title {
    padding-top: 15px;
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: 22px;
    line-height: 22px;
    color: #2a2727;
  }
  &__input-blocks {
    text-align: left;
  }
  &__input-block {
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
  }
  &__input {
    background-color: #2a2727;
    border: none;
    border-radius: 15px;
    height: 25px;
    width: 240px;
    padding: 2px 10px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
    margin: 10px 8px 10px 10px;
  }
  &__btn-close {
    position: relative;
  }
  &__btn-close::before {
    cursor: pointer;
    position: absolute;
    content: "\f2ea";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #2a2727;
    font-size: 21px;
    line-height: 21px;
    right: -23px;
    top: -4px;
    transition: all .5s;
  }
  &__btn-close:hover::before {
    transform:scale(1.2);
    transition: all .5s;
    color: #e50e0e;
  }
  &__btn-close::before {
    content: "\f00d";
    left: 125px;
    top: -59px;
    color: #2a2727;
  }
  &__btn-close:hover::before {
    color: #e50e0e;
  }
  &__btn-save {
    cursor: pointer;
    margin-top: 19px;
    width: 250px;
    height: 30px;
    border-radius: 12px;
    border: none;
    background-color: #1f5902;
    color: #fff;
    transition: all .5s;
  }
  &__btn-save:hover {
    transform:scale(1.05);
    transition: all .5s;
  }
}
</style>