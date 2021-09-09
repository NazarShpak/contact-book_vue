<template>
  <div class="delete-contact-modal-window">
    <div class="delete-contact-modal-window__block">
      <h3 class="delete-contact-modal-window__title">
        Видалити контакт?
      </h3>
      <button
          class="delete-contact-modal-window__btn btn-yes"
          @click="deleteContact"
      >
        Так
      </button>
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
  name: "DeleteContactModalWindow.vue",
  props: {
    index: {
      type: Number
    }
  },
  methods: {
    deleteContact() {
      this.$store.commit("deleteContact", this.index)
      this.$emit('hideDeleteContactModalWindow')
    },
    hideDeleteContactModalWindow() {
      this.$emit('hideDeleteContactModalWindow')
    }
  }
}
</script>

<style lang="scss" scoped>
.delete-contact-modal-window {
  height: 340px;
  width: 300px;
  background-color: #2a2727;
  &__block {
    width: 300px;
    height: 120px;
    background-color: #ffffff;
    border-radius: 15px;
  }
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
    transform:scale(1.05);
    transition: all .5s;
  }
  &__btn +  &__btn {
    margin-left: 20px;
  }
}
.btn-yes:hover {
  background-color: #1f5902;
}
.btn-no:hover {
  background-color: #e50e0e;
}
</style>