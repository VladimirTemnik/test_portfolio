<template>
  <app-header></app-header>
        <div class="container">
            <compRegistration></compRegistration>
        </div>
    <app-footer></app-footer>
</template>

<script>
  import compRegistration from './components/contact/Registration';

  export default{
    components:{
      compRegistration
    }
  }
</script>
