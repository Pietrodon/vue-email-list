const app = new Vue({
    el:'#app',
    data: {
        email: [],
    },
    created () {
        for( let i=0; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then ((risultato) => {
                // console.log(risultato.data.response)
                this.email.push(risultato.data.response)
            })

        }
        
    }
    
})
