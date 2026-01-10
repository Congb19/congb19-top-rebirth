<script setup lang="ts">
useSeoMeta({
  title: '你在烦恼什么',
  ogTitle: '你在烦恼什么',
  description: 'Congb19的小屋',
  ogDescription: 'Congb19的小屋',
  ogImage: '/imgs/logo.jpg',
  twitterCard: 'summary_large_image'
});
const tooltipConfig = {
  delayDuration: 300
};

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
  // {
  //   label: 'About',
  //   icon: 'i-material-symbols-familiar-face-and-zone-outline',
  //   to: '/about'
  // },
  {
    label: 'Blog',
    icon: 'i-material-symbols-battery-charging-50-outline-rounded',
    to: '/blog'
  }
];
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
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <UApp :tooltip="tooltipConfig">
      <UHeader>
        <template #title>
          <div class="header-title" @click="backHome" @mouseenter="() => targetRotate('.cb-layout-header-avatar')">
            <UAvatar class="cb-layout-header-avatar" src="/imgs/logo.jpg" alt="Avatar" size="sm" />
            Congb19
          </div>
        </template>
        <UNavigationMenu :items="routes" />
        <template #body>
          <UNavigationMenu :items="routes" orientation="vertical" class="-mx-2.5" />
        </template>
        <template #right>
          <UTooltip v-for="link in links" :text="link.tooltip" @mouseenter="link.mouseEnterFn">
            <UButton
              :class="link.buttonClass"
              :icon="link.icon"
              color="neutral"
              size="sm"
              square
              variant="ghost"
              :to="link.link"
              target="_blank"
            />
          </UTooltip>
          <UColorModeSwitch />
        </template>
      </UHeader>
      <UMain>
        <NuxtLayout>
          <NuxtPage keepalive />
        </NuxtLayout>
      </UMain>
      <UFooter>
        <ULink
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          to="http://beian.miit.gov.cn"
        >
          浙ICP备2021020364号-1
        </ULink>
      </UFooter>
    </UApp>
  </div>
</template>
