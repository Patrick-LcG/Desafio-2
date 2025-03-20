
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.checkbox-hidden');
    function resetBorders() {
        const allCards = document.querySelectorAll('.card-checkbox');
        allCards.forEach(card => {
            card.style.borderColor = "#ccc";
        });
    }
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const card = this.closest('.card-checkbox');
            if (this.checked) {
                resetBorders();
                card.style.borderColor = "#F3541C";
            } else {
                card.style.borderColor = "#ccc";
            }
        });
    });
});


var emailInput = document.getElementById('email');
var emailError = document.getElementById('emailError');
emailInput.addEventListener('input', function() {
    var emailValue = emailInput.value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailValue === "") {
        emailError.style.display = 'none';
        emailInput.classList.remove('invalid');
    } else if (!emailPattern.test(emailValue)) {
        emailError.style.display = 'flex';
        emailInput.classList.add('invalid');
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('invalid');
    }
});


function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}
var cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', function() {
    var formattedCPF = formatCPF(cpfInput.value);
    cpfInput.value = formattedCPF;
});

document.getElementById('telefone').addEventListener('input', function () {
    var phone = this.value.replace(/\D/g, '');
    phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
    phone = phone.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
    this.value = phone;
});

document.getElementById('dataNascimento').addEventListener('input', function () {
    var date = this.value.replace(/\D/g, '');
    date = date.replace(/(\d{2})(\d)/, '$1/$2');
    date = date.replace(/(\d{2}\/\d{2})(\d)/, '$1/$2');
    this.value = date;
});

document.getElementById('dataNascimento').addEventListener('input', function () {
    var dateValue = this.value;
    var datePattern = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    var dateError = document.getElementById('dataError');
    if (dateValue === "") {
        dateError.style.display = 'none';
        this.classList.remove('invalid');
    } else if (!datePattern.test(dateValue)) {
        dateError.style.display = 'block';
        this.classList.add('invalid');
    } else {
        var dateParts = dateValue.split('/');
        var day = parseInt(dateParts[0], 10);
        var month = parseInt(dateParts[1], 10) - 1;
        var year = parseInt(dateParts[2], 10);
        var date = new Date(year, month, day);
        if (year < 1900 || date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
            dateError.style.display = 'block';
            this.classList.add('invalid');
        } else {
            dateError.style.display = 'none';
            this.classList.remove('invalid');
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in"); 
});

function direcionarPagina(url) {
    document.body.classList.add("fade-out"); 
    setTimeout(() => {
        window.location.href = url; 
    }, 300); 
}