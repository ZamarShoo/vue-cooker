<template>
    <transition name="fade">
    <div class="modal-outer">
        <div class="popup">
            <i @click="closeModal"></i>
            <h2>Вы создали новый рецепт!</h2>
        </div>
    </div>
  </transition>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
    name: 'modal-popup',
    methods: {
        ...mapMutations(['setModal']),
        closeModal() {
            this.setModal(false)
        }
    }
}
</script>

<style lang="scss" scoped>

    .modal-outer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        background-color: rgba(0,0,0, .6);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popup {
        width: 40vw;
        height: 300px;
        padding: 20px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 10px;

        i {
            display: inline-block;
            position: absolute;
            top: 20px;
            right: 20px;
            width: 25px;
            height: 25px;
            cursor: pointer;
        }

        i::before, i::after {
            content: '';
            display: inline-block;
            width: 25px;
            height: 1px;
            background: rgba(120, 120, 120, .8);
            position: absolute;
            top: 12px;
            left: 0px;
        }

        i::before {
            transform: rotate(45deg);
        }

        i::after {
            transform: rotate(-45deg);
        }

        h2 {
            font-size: 32px;
            margin-bottom: 20px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>