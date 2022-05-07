Vue.component("mi-componente", {
    template: `<h1 class='component-bg'>Hola soy un componente</h1>`
})


var app = new Vue({
    el: '#App',
    data: {
        message: 'Hello Vue!',
        numeroA : 35,
        numeroB : 5,
        contador :0,
        condicion : false,
        lista: [
            { id : 1, nombre : 'Juan', apellido : 'Perez'},
            { id : 2, nombre : 'Pedro', apellido : 'Martinez'},
            { id : 3, nombre : 'Maria', apellido : 'Gonzalez'},
            { id : 4, nombre : 'Juan', apellido : 'Labrador'},
            ],
            cssClasses : {
                'backgroundColor':  true,
                "color-black" :false,

            }
    },
    
    methods: {
        
        calculoMatematico(){
            return this.numeroA + this.numeroB
        },
        
        contadorsuma(){
           this.contador++
           this.condicion = false
        },
        
        contadorResta(){ 
            if(this.contador >0) {
               this.contador--
              
            } else {
                this.condicion = true
                
            }

            return false
        }

       
    },
    
    computed:{
        duplicar(){
            return this.numeroA * 2
        }
    }

    

})


