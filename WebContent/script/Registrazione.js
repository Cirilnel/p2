function checkNomeCognome(inputtxt) {
    const nome = /^[A-Za-z]+$/;
    return nome.test(inputtxt.value);
}

function checkEmail(inputtxt) {
    // Uso di una regex meno complessa per l'email
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.test(inputtxt.value);
}

function checkData(inputtxt) {
    const data = /^\d{1,2}-\d{1,2}-\d{4}$/;
    return data.test(inputtxt.value);
}

function checkUserName(inputtxt) {
    const userName = /^[A-Za-z0-9]+$/;
    return userName.test(inputtxt.value);
}

function checkPassword(inputtxt) {
    // Regex semplificata per password complesse
    const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return password.test(inputtxt.value);
}

function validate(obj) {    
    let valid = true;    
    
    const nome = document.getElementsByName("nome")[0];
    if (!checkNomeCognome(nome)) {
        valid = false;
        document.getElementById("errNome").innerHTML = "nome non valido";
        document.getElementById("errNome").style.color = "red";
    } else {
        document.getElementById("errNome").innerHTML = "";
    }
    
    const cognome = document.getElementsByName("cognome")[0];
    if (!checkNomeCognome(cognome)) {
        valid = false;
        document.getElementById("errCognome").innerHTML = "cognome non valido";
        document.getElementById("errCognome").style.color = "red";
    } else {
        document.getElementById("errCognome").innerHTML = "";
    }
    
    const email = document.getElementsByName("email")[0];
    if (!checkEmail(email)) {
        valid = false;
        document.getElementById("errEmail").innerHTML = "email non valida";
        document.getElementById("errEmail").style.color = "red";
    } else {
        document.getElementById("errEmail").innerHTML = "";    
    }        
    
    const data = document.getElementsByName("nascita")[0];
    if (!checkData(data)) {
        valid = false;
        document.getElementById("errNascita").innerHTML = "data non valida";
        document.getElementById("errNascita").style.color = "red";
    } else {
        document.getElementById("errNascita").innerHTML = "";
    }        
    
    const user = document.getElementsByName("us")[0];
    if (!checkUserName(user)) {
        valid = false;
        document.getElementById("errUser").innerHTML = "username non valido";
        document.getElementById("errUser").style.color = "red";
    } else {
        document.getElementById("errUser").innerHTML = "";
    }        
    
    const pw = document.getElementsByName("pw")[0];
    if (!checkPassword(pw)) {
        valid = false;
        document.getElementById("errPass").innerHTML = "password non valida";
        document.getElementById("errPass").style.color = "red";
    } else {
        document.getElementById("errPass").innerHTML = "";
    }            
    
    if (valid) obj.submit();    
}

function myFunction(x) {
    x.style.background = "yellow";
}
