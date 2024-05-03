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
            }).then(res => res.json()).then(data => console.log(data))
        });
