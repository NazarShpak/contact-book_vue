<template>
  <div class="edit-contact-modal-window">
    <div class="block">

      <h3 class="edit-contact-modal-window__title">
        Редагувати поле
      </h3>
      <span
          class="edit-contact-modal-window__btn-close"
          @click="hideEditModalWindow"
      >
      </span>

      <div class="edit-contact-modal-window__input-block">
        <input
            class="edit-contact-modal-window__input"
            type="text"
            name="contact-key"
            v-model="editKey"
            @click="addCopyContactValue"
        >
        <span
            v-if="showUndoFirst"
            class="edit-contact-modal-window__btn-undo"
            @click="hideBtnUndoFirst"
            data-title="Відмінити редагування"
        >
        </span>
        <span
            v-else
            class="edit-contact-modal-window__btns"
        >
          <span
              class="edit-contact-modal-window__btn-yes"
              @click="cancelEditFirst"
          >
          </span>
          <span
              class="edit-contact-modal-window__btn-no"
              @click="showBtnUndoFirst"
          >
          </span>
        </span>

        <input
            class="edit-contact-modal-window__input"
            type="text"
            name="contact-value"
            v-model="editValue"
            @click="addCopyContactValue"
        >
        <span
            v-if="showUndoSecond"
            class="edit-contact-modal-window__btn-undo"
            @click="hideBtnUndoSecond"
            data-title="Відмінити редагування"
        >
        </span>
        <span
            v-else
            class="edit-contact-modal-window__btns"
        >
          <span
              class="edit-contact-modal-window__btn-yes"
              @click="cancelEditSecond"
          >
          </span>
          <span
              class="edit-contact-modal-window__btn-no"
              @click="showBtnUndoSecond"
          >
          </span>
        </span>
      </div>

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
export default {
  name: "EditContactModalWindow.vue",
  data() {
    return {
      showUndoFirst: true,
      showUndoSecond: true,
      // inputType: "text",
      copyContactKey: '',
      copyContactValue: '',
      editKey: '',
      editValue: '',
    }
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
  mounted() {
    this.editKey = this.contactKey.slice()
    this.editValue = this.contactValue.slice()
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
    hideBtnUndoFirst() {
      this.showUndoFirst = false
    },
    showBtnUndoFirst() {
      this.showUndoFirst = true
    },
    cancelEditFirst() {
      this.showBtnUndoFirst()
      this.editKey = this.copyContactKey
    },
    hideBtnUndoSecond() {
      this.showUndoSecond = false
    },
    showBtnUndoSecond() {
      this.showUndoSecond = true
    },
    cancelEditSecond() {
      this.editValue = this.copyContactValue
      this.showBtnUndoSecond()
    },
    addCopyContactValue() {
      this.copyContactKey = this.contactKey.slice()
      this.copyContactValue = this.contactValue.slice()
    },
    saveNewContactValues() {
      this.$store.commit("editContactInfo", this.contactData)
      this.$emit('hideEditModalWindow')
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
  &__input-block {
    text-align: left;
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
    margin: 10px;
  }
  &__btn-undo,
  &__btn-yes,
  &__btn-no,
  &__btn-close {
    position: relative;
  }
  &__btn-undo::after,
  &__btn-yes::after,
  &__btn-no::after,
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
  &__btn-undo:hover::before {
    content: attr(data-title);
    position: absolute;
    right: -34px;
    bottom: 23px;
    z-index: 1;
    background: rgba(86, 95, 121, 0.6);
    color: #fff;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 10px;
    padding: 2px;
    border: 1px solid rgba(86, 95, 121, 0.6);
  }
  &__btn-undo:hover::after,
  &__btn-yes:hover::after,
  &__btn-no:hover::after,
  &__btn-close:hover::before {
    transform:scale(1.2);
    transition: all .5s;
    color: #e50e0e;
  }
  &__btn-yes::after {
    content: "\f058";
    right: -15px;
    top: -4px;
  }
  &__btn-no::after {
    content: "\f057";
    right: -37px;
    top: -4px;
  }
  &__btn-yes:hover::after {
    color: #1f5902;
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