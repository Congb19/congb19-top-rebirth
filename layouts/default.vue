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
const routes = [
  {
    label: 'Home',
    icon: 'i-material-symbols-house-outline-rounded',
    to: '/'
  },
  {
    label: 'Tools',
    icon: 'i-material-symbols-tools-wrench-outline-rounded',
    to: '/tools'
  },
  {
    label: 'About',
    icon: 'i-material-symbols-familiar-face-and-zone-outline',
    to: '/about'
  }
];
const backHome = () => {
  navigateTo('/');
};

// animation
const { jump, rotate } = useAnimation();
const targetJump = (className: string) => {
  const target = document.querySelector(className);
  if (target) jump(target);
};
const targetRotate = (className: string) => {
  const target = document.querySelector(className);
  if (target) rotate(target);
};

// useMouseTail
const { mousePosition, start, stop } = useMouseTail({ showOriginalMouse: true });
start();

const links = [
  {
    tooltip: 'Blog·Congb19',
    buttonClass: 'cb-layout-header-blog',
    mouseEnterFn: () => targetJump('.cb-layout-header-blog'),
    icon: 'i-mdi-book-edit-outline',
    link: 'https://blog.congb19.com/#/'
  },
  {
    tooltip: 'Combo UI·Congb19',
    buttonClass: 'cb-layout-header-combo',
    mouseEnterFn: () => targetJump('.cb-layout-header-combo'),
    icon: 'i-mingcute-fork-knife-line',
    link: 'https://combo.congb19.com/'
  },
  {
    tooltip: 'Github·Congb19',
    buttonClass: 'cb-layout-header-github-link',
    mouseEnterFn: () => targetJump('.cb-layout-header-github-link'),
    icon: 'i-mdi-github',
    link: 'https://github.com/Congb19'
  }
];
</script>

<template>
  <div class="cb-layout" :class="{ 'cb-layout-dark': isDark }">
    <header class="cb-layout-header">
      <div class="header-items">
        <div class="header-title" @click="backHome" @mouseenter="() => targetRotate('.cb-layout-header-avatar')">
          <UAvatar class="cb-layout-header-avatar" src="/imgs/logo.jpg" alt="Avatar" size="sm" />
          Congb19
        </div>
        <div class="header-routes">
          <UHorizontalNavigation :links="routes" />
        </div>
        <div class="header-buttons">
          <UTooltip v-for="link in links" :text="link.tooltip" @mouseenter="link.mouseEnterFn">
            <UButton
              :class="link.buttonClass"
              :icon="link.icon"
              size="sm"
              color="gray"
              square
              variant="ghost"
              :to="link.link"
              target="_blank"
            />
            <!-- fork-knife-line -->
          </UTooltip>
          <UTooltip class="header-buttons-switch ml-2" :text="!isDark ? '切换到深色模式' : '切换到浅色模式'">
            <!-- <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            /> -->
            <UToggle
              v-model="isDark"
              size="md"
              on-icon="i-heroicons-moon-20-solid"
              off-icon="i-heroicons-sun-20-solid"
            />
          </UTooltip>
        </div>
      </div>
    </header>
    <div class="cb-layout-content">
      <slot />
    </div>
    <footer class="cb-layout-footer mb-10">
      <ULink
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        to="http://beian.miit.gov.cn"
      >
        浙ICP备2021020364号-1
      </ULink>
    </footer>
  </div>
</template>

<style>
.cb-index {
  display: flex;
  justify-content: center;
  min-width: 600px;
}
.cb-layout {
  /* background-color: red; */
  height: 100vh;
  background: linear-gradient(217deg, rgba(241, 191, 191, 0.3), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 255, 0, 0.2), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(154, 219, 229, 0.3), rgba(0, 0, 255, 0) 70.71%);
}
.cb-layout-header {
  height: 64px;
  min-width: 600px;
  /* padding: 20px 0px; */
  position: fixed;
  top: 0;
  width: 100vw;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px -5px 20px 20px rgba(103, 233, 142, 0.02);

  display: flex;
  flex-direction: column;
  justify-content: center;

  * {
    vertical-align: bottom;
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
      gap: 0px;

      .header-buttons-switch {
        /* margin-left: 5px; */
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}
.cb-layout-content {
  padding-top: 64px;
  height: calc(100% - 34px);
  overflow: auto;
}
.cb-layout-footer {
  display: flex;
  justify-content: center;
  height: 34px;
}

.cb-layout-dark {
  .cb-layout-header {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
