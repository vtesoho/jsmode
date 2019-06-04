<div id="example">
  <p>Original message: "{{ message}}"</p>
  <p>Computed reversed message: "{{reversedMessage}}"</p>
</div>

var vm = new Vue({
  el:'#example',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function (){
      return this.message.split('').reverse().join('')
    }
  }
})