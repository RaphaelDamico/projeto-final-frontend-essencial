const formEl = document.getElementById('form-api');
        formEl.addEventListener('submit', e => {
            e.preventDefault();
            
            const formData = new FormData(formEl);
            const data = Object.fromEntries(formData);
            fetch('http://localhost:8080/dados-do-cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => console.log(data));
            window.location.href = 'http://127.0.0.1:5500/Home/home.html';
            alert('Formulário enviado com sucesso! Por favor, verifique seu e-mail.')
        });
