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

        var password = form.querySelector('#password');

        if(email.value == "nutriadmin@nutri.com" && password.value == '123'){
            var current = location.pathname;

            var to = current.split('/').slice(0, current.split('/').length -1).join('/') + '/pages/clientes.html'

            location.href = to;
        }
    })
})