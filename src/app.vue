<style lang="stylus">
font-stack = Helvetica, sans-serif
primary-color = #999
body
  font 100% font-stack
  color primary-color
</style>

<template>
<nav>
   <div class="nav-wrapper">
     <a href="#" class="brand-logo right">Logo</a>
     <ul id="nav-mobile" class="left hide-on-med-and-down">
       <li><a href="#/views/input">Input</a></li>
       <li><a href="#/views/directive">Directive</a></li>
       <li><a href="#/views/component">Component</a></li>
     </ul>
   </div>
</nav>
<div class="container">
    <!-- Page Content goes here -->
    <div class="row">
    <component
        is={{view}}
        v-transition="fade"
        transition-mode="out-in">
    </component>
    </div>
</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      msg: 'Hello World',
      view: '',
    }
  },
  components: {
    'input-view': require('./views/input-view.vue'),
    'directive-view': require('./views/directive-view.vue'),
    'component-view': require('./views/component-view.vue')
  }
}

</script>
