<template>
  <div class="block-of-edit-buttons">

    <!-- Show edit buttons -->

    <!-- Hide Undo button-->
    <span
        v-if="showUndoBtn"
        class="block-of-edit-buttons__btn-undo"
        @click="blockOfEditButtons"
        data-title="Відмінити редагування"
        v-show="this.copyContactKey !== this.editKey || this.copyContactValue !== this.editValue"
    >
    </span>
    <span
        v-else
        class="block-of-edit-buttons_btns"
    >

      <!-- Cancel Edit -->
      <span
          class="block-of-edit-buttons__btn-yes"
          @click="cancelEdit"
      >
      </span>

      <!-- Show Undo button -->
      <span
          class="block-of-edit-buttons__btn-no"
          @click="showBtnUndo"
      >
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "BlockOfEditButtons",
  data() {
    return {
      showUndoBtn: true,
    }
  },
  props: {
    copyContactKey: {
      type: String
    },
    copyContactValue: {
      type: String
    },
    editKey: {
      type: String
    },
    editValue: {
      type: String
    },
  },
  methods: {
    cancelEdit() {
      this.showBtnUndo()
      this.$emit('cancelEdit')
    },
    blockOfEditButtons() {
      if (this.copyContactKey !== this.editKey || this.copyContactValue !== this.editValue) {
        this.showUndoBtn = false
      }
    },
    showBtnUndo() {
      this.showUndoBtn = true
    }
  }
}
</script>

<style lang="scss" scoped>
.block-of-edit-buttons {
  &__btn-undo,
  &__btn-yes,
  &__btn-no {
    position: relative;
  }

  &__btn-undo::after,
  &__btn-yes::after,
  &__btn-no::after {
    position: absolute;
    cursor: pointer;
    content: "\f2ea";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #2a2727;
    font-size: 21px;
    line-height: 21px;
    transition: all .5s;
    top: -13px;
    opacity: 1;
  }

  &__btn-undo:hover::before {
    content: attr(data-title);
    position: absolute;
    right: -30px;
    bottom: 20px;
    z-index: 1;
    background: #5e5a5a;
    color: #fff;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 10px;
    padding: 2px;
    border: 1px solid #2a2727;
  }

  &__btn-undo:hover::after,
  &__btn-yes:hover::after,
  &__btn-no:hover::after {
    transform: scale(1.2);
    transition: all .5s;
    color: #e50e0e;
  }

  &__btn-undo::after {
    right: -25px;
  }

  &__btn-yes::after {
    content: "\f058";
    right: -15px;
  }

  &__btn-no::after {
    content: "\f057";
    right: -37px;
  }

  &__btn-yes:hover::after {
    color: #1f5902;
  }
}
</style>