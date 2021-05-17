document.addEventListener("DOMContentLoaded", () =>{

    var tipoConta = document.querySelectorAll('input[type="radio"]');
    
    var form = document.getElementsByTagName('form')[0]

    var email = form.querySelector('input#email')

    tipoConta.forEach(e => {
        e.addEventListener('change',function(){
            if(this.value == 'Nutri')
                email.attributes['placeholder'].value = 'CRN'
            else
                email.attributes['placeholder'].value = 'Email'
        })
    })

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const current = location.pathname;

        const selectedType = document.querySelector('input[type="radio"]:checked');

        const page = selectedType && selectedType.value.toLowerCase() == "cliente" ? '/pages/clientes.html' : '/pages/nutri.html'

        const to = current.split('/').slice(0, current.split('/').length -1).join('/') + page
        
        var email = this.querySelector('input#email').value

        sessionStorage.setItem('user', email)

        location.href = to;
        
    })
})