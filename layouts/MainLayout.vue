<template>
  <v-layout>
    <v-main>
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <suspense>
            <component v-bind:is="Component"></component>
            <template v-slot:fallback> loading </template>
          </suspense>
        </template>
      </router-view>
    </v-main>
  </v-layout>
</template>

<script>

</script>