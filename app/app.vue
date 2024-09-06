<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/experience">
          Experience
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/skills">
          Skills
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/projects">
          Projects
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </nav>
  <NuxtPage />
</template>
