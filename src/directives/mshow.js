module.exports = {
    update: function (value) {
      if(value){
          this.el.style.display = ''
      }else{
          this.el.style.display = 'none'
      }
    }
}
