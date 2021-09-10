<template>
  <div class="add-new-info-modal-window">
    <div class="add-new-info-modal-window__block">
      <h3 class="add-new-info-modal-window__title">
        Додати нове поле
      </h3>
      <span
          class="add-new-info-modal-window__btn-close"

      >
      </span>
      <input
          class="add-new-info-modal-window__input"
          type="text"
          name="contact-key"
          v-model="contactKey"
          placeholder = "Назва"
          required
      >
      <input
          class="add-new-info-modal-window__input"
          :type="inputType"
          name="contact-value"
          v-model="contactValue"
          placeholder = "Значення"
          required
      >

      <h4
          class="add-new-info-modal-window__subtitle"
      >
        Тип поля "значення"
      </h4>

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
  name: "AddNewInfoModalWindow.vue",
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
    getNewCouple() {
      return [this.contactKey, this.contactValue, this.contactIndex]
    },
  },
  methods: {
    addNewInfo() {
      this.$store.commit("addNewCInfo", this.getNewCouple)
      this.$emit('hideAddNewInfoModalWindow')
      this.contactKey = ''
      this.contactValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  outline:none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
::placeholder {
  color: #fff;
  font-size: 14px;
  line-height: 14px;
}
.add-new-info-modal-window {
  height: 340px;
  width: 300px;
  background-color: #2a2727;
  position: relative;
  &__block {
    width: 300px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 15px;
  }
  &__title {
    padding-top: 28px;
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 22px;
    color: #2a2727;
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
    transform:scale(1.05);
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