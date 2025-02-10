<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
const links = [
  {
    label: 'Profile',
    icon: 'i-material-symbols-house-outline-rounded',
    to: '/'
  },
  {
    label: 'Keyboard',
    icon: 'i-material-symbols-keyboard-alt-outline',
    to: '/tools/keyboard'
  },
  {
    label: 'Screen',
    icon: 'i-material-symbols-screen-search-desktop-outline',
    to: '/tools/screen'
  },
  {
    label: 'Sysinfo',
    icon: 'i-material-symbols-info-outline-rounded',
    to: '/tools/sysinfo'
  }
];
const backHome = () => {
  navigateTo('/');
};
</script>

<template>
  <div class="cb-layout" :class="{ 'cb-layout-dark': isDark }">
    <header class="cb-layout-header">
      <div class="header-items">
        <div class="header-title" @click="backHome">
          <UAvatar src="/imgs/logo.jpg" alt="Avatar" size="sm" />
          Congb19
        </div>
        <div class="header-links">
          <UHorizontalNavigation :links="links" />
        </div>
        <div class="header-buttons">
          <UTooltip text="Github·Congb19">
            <UButton
              icon="i-mdi-github-box"
              size="sm"
              color="gray"
              square
              variant="ghost"
              to="https://github.com/Congb19"
              target="_blank"
            />
          </UTooltip>
          <UTooltip :text="!isDark ? '切换到深色模式' : '切换到浅色模式'">
            <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
          </UTooltip>
        </div>
      </div>
    </header>
    <div class="cb-layout-content">
      <slot />
    </div>
    <footer class="cb-layout-footer">浙evhuiruhiehuer</footer>
  </div>
</template>

<style>
.cb-layout {
  /* background-color: red; */
  height: 100vh;
  background: linear-gradient(
      217deg,
      rgba(241, 191, 191, 0.3),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.2), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(154, 219, 229, 0.3), rgba(0, 0, 255, 0) 70.71%);
}
.cb-layout-header {
  height: 64px;
  min-width: 800px;
  /* padding: 20px 0px; */
  position: fixed;
  top: 0;
  width: 100vw;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  * {
    vertical-align: bottom;
    /* line-height: 32px; */
    flex-shrink: 0;
  }
  .header-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    .header-title {
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
    }
    .header-buttons {
      display: flex;
      gap: 8px;
    }
  }
}
.cb-layout-content {
  padding-top: 64px;
  height: calc(100% - 24px);
  overflow: auto;
}
.cb-layout-footer {
  display: flex;
  justify-content: center;
  height: 24px;
}

.cb-layout-dark {
  .cb-layout-header {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
