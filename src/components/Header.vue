<template>

  <div class="header">
    <section>
        <header>
            <div class="header-left">
                <div class="header-left--logo">
                    <router-link to="/"><h3>Cooker</h3></router-link>
                </div>
                <div class="header-left--social">
                    <ul>
                        <li><a href="https://github.com/ZamarShoo" target="_blank"><i class="github"></i></a></li>
                        <li><a href="https://hh.ru/resume/40803432ff0804c2960039ed1f47784e726134" target="_blank"><i class="hh"></i></a></li>
                        <li><a href="https://vk.com/zamarshoo" target="_blank"><i class="vk"></i></a></li>
                        <li><a href="mailto:shg.ivan97@gmail.com" target="_blank"><i class="gmail"></i></a></li>
                    </ul>
                </div>
                <div 
                    class="burger"
                    @click="toggleBurger(true)"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div 
                class="header-right"
                :class="{active: mobileNavIsOpen}"
            >
                <i
                    class="close"
                    @click="toggleBurger(false)"
                ></i>
                <nav>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/like">Like</router-link></li>
                        <li><router-link to="/create">Create</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </section>
  </div>
  
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'header-nav',
    methods: {
        ...mapMutations(['setMobileNavIsOpen']),
        toggleBurger(bool) {
            this.setMobileNavIsOpen(bool)
        },
        
    },
    computed: {
      ...mapState({
        mobileNavIsOpen: state => state.mobileNavIsOpen,
      }),
    },
}
</script>


<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
    }
    .burger {
        display: none;
    }
    .header-right li {
        margin-left: 25px;
    }
    
    .header {
        box-shadow: 0px 10px 40px rgb(33 42 49 / 15%);
        background: #F7FCFC;
    }
    .header-right ul, .header-left--social ul {
        display: flex;
        align-items: center;
    }

    .header-left {
        display: flex;
        align-items: end;
    }

    .header-left--logo h3 {
        font-size: 32px;
    }

    .header-left--social {
        margin-left: 20px;
    }

    .header-left--social li {
        margin-right: 10px;

        i {
            display: inline-block;
            width: 25px;
            height: 25px;
            background-size: 25px;
        }

        i.github {
            background-image: url('@/assets/img/github-brands.svg')
        }

        i.hh {
            background-image: url('@/assets/img/hh.png')
        }

        i.vk {
            background-image: url('@/assets/img/vk.png')
        }
        i.gmail {
            background-image: url('@/assets/img/mail.png')
        }
    }

    @media screen and (max-width: 1100px) {
        .header-right {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #F7FCFC;
            width: 100vw;
            height: 100vh;
            padding-top: 15vh;
            transform: translateY(-100vh);
            transition: .4s;

            i.close {
                display: inline-block;
                position: absolute;
                top: 30px;
                right: 30px;
                width: 25px;
                height: 25px;
                cursor: pointer;
            }

            i.close::before, i.close::after {
                content: '';
                display: inline-block;
                width: 25px;
                height: 1px;
                background: rgba(120, 120, 120, .8);
                position: absolute;
                top: 12px;
                left: 0px;
            }

            i.close::before {
                transform: rotate(45deg);
            }

            i.close::after {
                transform: rotate(-45deg);
            }

            ul {
                flex-direction: column;
            }

            li {
                margin-left: 0;
                width: 100%;
            }

            a {
                display: inline-block;
                padding: 15px;
                font-size: 22px;
                width: 100%;
                text-align:center;
            }
        }

        .header-left--social {
            margin-left: 0px;
        }

        .burger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 25px;
            height: 18px;

            cursor: pointer;

            span {
                display: inline-block;
                height: 2px;
                width: 100%;
                background-color: #333333;
            }
        }

        .header-right.active {
            transform: translateY(0vh);
        }
        .header-left {
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            width: 100%;
        }
    }
</style>