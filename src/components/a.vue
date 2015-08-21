<style>
comp-a h2 {
  color: #f00;
}
</style>

<template>
  <p>{{msg}}</p>
 <p>message from parent:{{parentMsg}}</p>

</template>

<script>
module.exports = {
  props:['parentMsg'],
  data: function () {
    return {
      msg: 'Hello from Component A!'
    }
  }
}
</script>
