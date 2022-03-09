const app = new Vue({
    el:'#app',
    data: {

    },
    created () {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function(risultato){
              console.log(risultato)
          })
    }
})