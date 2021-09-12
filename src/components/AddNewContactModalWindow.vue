<template>
  <div class="add-new-contact-modal-window">
    <div class="block">
      <h3 class="add-new-contact-modal-window__title">
        Додати новий контакт
      </h3>

      <!-- Hide Add Contact Modal -->
      <span
          class="add-new-contact-modal-window__btn-close"
          @click="hideAddContactModalWindow"
      >
      </span>

      <input
          class="add-new-contact-modal-window__input"
          type="text"
          name="contact-name"
          placeholder="Ім'я"
          v-model="name"
          required
      >
      <input
          class="add-new-contact-modal-window__input"
          type="number"
          name="contact-phone"
          placeholder="Номер телефону"
          v-model="phone"
          required
      >

      <!-- Add New Contact -->
      <button
          class="add-new-contact-modal-window__btn"
          :disabled='!isComplete'
          :class="!isComplete ? 'btn-disable' : ''"
          @click="addNewContact"
      >
        + Додати контакт
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewContactModalWindow",
  data() {
    return {
      name: '',
      phone: '',
    }
  },
  computed: {
    isComplete() {
      return this.name && this.phone
    },
    getNewContactData() {
      return {
        name: this.name,
        phone: this.phone
      }
    }
  },
  methods: {
    addNewContact() {
      this.$store.commit("addNewContact", this.getNewContactData)
      this.cleanInputs()
      this.$emit('hideAddContactModalWindow')
    },
    hideAddContactModalWindow() {
      this.cleanInputs()
      this.$emit('hideAddContactModalWindow')
    },
    cleanInputs() {
      this.name = ''
      this.phone = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  height: 225px;
}

.add-new-contact-modal-window {
  height: 340px;
  width: 300px;
  background-color: #2a2727;
  position: relative;
  z-index: 3;

  &__title {
    padding-top: 28px;
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 22px;
    color: #2a2727;
  }

  &__btn-close {
    position: absolute;
    top: 29px;
    right: 11px;
  }

  &__btn-close::before {
    cursor: pointer;
    position: absolute;
    content: "\f00d";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #2a2727;
    font-size: 20px;
    line-height: 20px;
    right: -2px;
    top: -2px;
    transition: all .5s;
  }

  &__btn-close:hover::before {
    transform: scale(1.1);
    transition: all .5s;
    color: #e50e0e;
  }

  &__input {
    background-color: #2a2727;
    border: none;
    border-radius: 15px;
    height: 25px;
    width: 250px;
    padding: 2px 10px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
  }

  &__input + &__input {
    margin-top: 15px;
  }

  &__btn {
    cursor: pointer;
    margin-top: 30px;
    width: 250px;
    height: 30px;
    border-radius: 12px;
    border: none;
    background-color: #1f5902;
    color: #fff;
    transition: all .5s;
  }

  &__btn:hover {
    transform: scale(1.05);
    transition: all .5s;
  }
}

.btn-disable {
  cursor: auto;
  background-color: #69a854;
}

.btn-disable:hover {
  transform: scale(1);
}
</style>