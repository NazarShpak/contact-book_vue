<template>
  <div class="add-new-info-modal-window">
    <div class="block">
      <h3 class="add-new-info-modal-window__title">
        Додати нове поле
      </h3>

      <!-- Hide Add New Info Modal -->
      <span
          class="add-new-info-modal-window__btn-close"
          @click="hideAddNewInfoModalWindow"
      >
      </span>

      <input
          class="add-new-info-modal-window__input"
          type="text"
          name="contact-key"
          v-model="contactKey"
          placeholder="Назва"
          required
      >
      <input
          class="add-new-info-modal-window__input"
          :type="inputType"
          name="contact-value"
          v-model="contactValue"
          placeholder="Значення"
          required
      >

      <h4
          class="add-new-info-modal-window__subtitle"
      >
        Тип поля "значення"
      </h4>

      <!-- Select type for value input -->
      <div class="add-new-info-modal-window__check-block">
        <label class="add-new-info-modal-window__check">
          <input
              class="add-new-info-modal-window__checkbox"
              type="radio"
              name="check"
              value="text"
              v-model="inputType"
          >
          <span class="add-new-info-modal-window__checkbox-style"></span>
          текст
        </label>

        <label class="add-new-info-modal-window__check">
          <input
              class="add-new-info-modal-window__checkbox"
              type="radio"
              name="check"
              value="number"
              v-model="inputType"
          >
          <span class="add-new-info-modal-window__checkbox-style"></span>
          числа
        </label>
      </div>

      <!-- Add New Info-->
      <button
          class="add-new-info-modal-window__btn"
          @click="addNewInfo"
      >
        + Додати нове поле
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewInfoModalWindow",
  data() {
    return {
      inputType: 'text',
      contactKey: '',
      contactValue: '',
    }
  },
  props: {
    contactIndex: {
      type: Number
    }
  },
  computed: {
    contactData() {
      return {'contactKey': this.contactKey, 'contactValue': this.contactValue, 'contactIndex': this.contactIndex}
    },
  },
  methods: {
    addNewInfo() {
      this.$emit('makeContactCopy')
      this.$store.commit("addNewInfo", this.contactData)
      this.hideAddNewInfoModalWindow()
    },
    hideAddNewInfoModalWindow() {
      this.$emit('hideAddNewInfoModalWindow')
    },
  }
}
</script>

<style lang="scss" scoped>
.block {
  height: 300px;
}

.add-new-info-modal-window {
  height: 340px;
  width: 300px;
  background-color: #2a2727;
  position: relative;

  &__title {
    padding-top: 28px;
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 22px;
    color: #2a2727;
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
    right: 12px;
    top: 28px;
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

  &__subtitle {
    color: #333333;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  &__check-block {
    display: flex;
    justify-content: center;
  }

  &__check {
    text-align: left;
    position: relative;
    align-items: center;
    padding-left: 20px;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
  }

  &__check + &__check {
    margin-left: 25px;
  }

  &__checkbox {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  &__checkbox-style {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid #2a2727;
    border-radius: 50%;
    margin-left: -20px;
    top: 2px;
  }

  &__checkbox:checked + &__checkbox-style::before {
    content: "";
    height: 14px;
    width: 14px;
    background-color: #2a2727;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>