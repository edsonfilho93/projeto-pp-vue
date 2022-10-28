const baseUrl = "https://restcountries.com/v3.1/name/peru"

const titleComponent = {
    template: `
        <div>
            <h1>{{ title }}</h1>
        </div>
    `,
    data() {
        return {
            title: 'Países '
        }
    }
}

const mainContainer = {
    data() {
        return {
            pais: '',
            paises: []
        }
    },
    created(){
        this.obterPaises()
    },
    components: {
        titlecomponent: titleComponent
    },
    methods: {
        obterPaises(){
            this.atividades = []
            axios
                .get(baseUrl)
                .then(response => {
                    response.data.forEach(item => {
                        this.paises.push(item)
                    })
                })
                .catch(function (error) {
                  toastr.error('Não foi possível obter os países', 'Países')
                })
        }
    }
}

Vue.createApp(mainContainer).mount('#app')
