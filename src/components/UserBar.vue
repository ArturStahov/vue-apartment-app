<template>
  <div v-if="isLogged" class="user-bar">
    <img :src="user.avatar" alt="avatar" class="avatar" />
    <p class="user-name">{{ user && user.name }}</p>

    <nav class="menu">
      <input
        type="checkbox"
        href="#"
        class="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label class="menu-open-button" for="menu-open">
        <span class="hamburger hamburger-1"></span>
        <span class="hamburger hamburger-2"></span>
        <span class="hamburger hamburger-3"></span>
      </label>

      <button class="menu-item">
        <svg
          class="my-item icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <title></title>
          <g id="icomoon-ignore"></g>
          <path d="M480 304l-144 144-48-48-32 32 80 80 176-176z"></path>
          <path
            d="M224 384h160v-57.564c-33.61-19.6-78.154-33.055-128-37.13v-26.39c35.249-19.864 64-69.386 64-118.916 0-79.529 0-144-96-144s-96 64.471-96 144c0 49.53 28.751 99.052 64 118.916v26.39c-108.551 8.874-192 62.21-192 126.694h224v-32z"
          ></path>
        </svg>
      </button>

      <button class="menu-item">
        <svg
          class="add icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="1024"
          height="1024"
          viewBox="0 0 1024 1024"
        >
          <title></title>
          <g id="icomoon-ignore"></g>
          <path
            d="M672 800v-96h32v96h96v32h-96v96h-32v-96h-96v-32h96zM512.698 928h-288.781c-35.408 0-63.918-28.759-63.918-64.235v-735.531c0-35.488 28.776-64.235 64.273-64.235h319.727v192.061c0 35.565 28.739 63.939 64.189 63.939h159.811v303.941c-24.627-10.27-51.651-15.941-80-15.941-114.875 0-208 93.125-208 208 0 41.237 12 79.67 32.698 112v0 0zM576 64v191.906c0 17.725 14.431 32.094 31.705 32.094h160.295l-192-224zM688 992c97.202 0 176-78.798 176-176s-78.798-176-176-176c-97.202 0-176 78.798-176 176s78.798 176 176 176v0z"
          ></path>
        </svg>
      </button>

      <button class="menu-item" @click="handlerLogOut">
        <svg
          class="exit icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <title></title>
          <g id="icomoon-ignore"></g>
          <path
            d="M384 320v-64h-160v-64h160v-64l96 96zM352 288v128h-160v96l-192-96v-416h352v160h-32v-128h-256l128 64v288h128v-96z"
          ></path>
        </svg>
      </button>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserBar",
  data() {
    return {};
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },

    isLogged() {
      return this.$store.state.auth.isLoggedIn;
    },
  },

  methods: {
    ...mapActions("auth", ["logOutOperation"]),

    handlerLogOut() {
      this.logOutOperation();
    },
  },
};
</script>

<style lang="scss" scoped>
.user-bar {
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  display: block;
  width: 30px;
  height: 30px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.user-name {
  font-size: 16px;
  color: #ee9817;
  font-weight: 700;
  margin-right: 20px;
}

//config
$fg: #ee9817;
$pi: 3.14;

$menu-items: 3;
$open-distance: 105px;
$opening-angle: $pi * 2;
$hamburger-spacing: 8px;

%ball {
  background: $fg;
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin-left: -40px;
  position: absolute;
  top: 20px;
  color: white;
  text-align: center;
  line-height: 40px;
  transform: translate3d(0, 0, 0);
  transition: transform ease-out 200ms;
}

%svg-setting {
  width: 20px;
  height: 20px;
}

.my-item {
  @extend %svg-setting;
}

.exit {
  @extend %svg-setting;
}

.add {
  @extend %svg-setting;
}

.menu-open {
  display: none;
}

.menu-item {
  @extend %ball;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.hamburger {
  $width: 25px;
  $height: 3px;
  width: $width;
  height: $height;
  background: white;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -$width/2;
  margin-top: -$height/2;
  transition: transform 200ms;
}

.hamburger-1 {
  transform: translate3d(0, -$hamburger-spacing, 0);
}
.hamburger-2 {
  transform: translate3d(0, 0, 0);
}
.hamburger-3 {
  transform: translate3d(0, $hamburger-spacing, 0);
}
.menu-open:checked + .menu-open-button {
  .hamburger-1 {
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  .hamburger-2 {
    transform: translate3d(0, 0, 0) scale(0.1, 1);
  }
  .hamburger-3 {
    transform: translate3d(0, 0, 0) rotate(-45deg);
  }
}

.menu {
  position: absolute;
  left: 50%;
  margin-left: -80px;
  padding-top: 20px;
  padding-left: 80px;
  width: 350px;
  height: 75px;
}

.menu-item {
  &:hover {
    background: white;
    color: $fg;
  }

  &:hover .icon {
    fill: $fg;
  }

  @for $i from 1 through $menu-items {
    &:nth-child(#{$i + 2}) {
      transition-duration: 180ms;
    }
  }
}

.menu-open-button {
  @extend %ball;
  z-index: 2;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 400ms;
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  cursor: pointer;
}

.menu-open-button:hover {
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
}

.menu-open:checked + .menu-open-button {
  transition-timing-function: linear;
  transition-duration: 200ms;
  transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}

.menu-open:checked ~ .menu-item {
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  @for $i from 1 through $menu-items {
    &:nth-child(#{$i + 2}) {
      transition-duration: 90ms+ (100ms * $i);
      transform: translate3d(70px * $i, 0, 0);
    }
  }
}
</style>
