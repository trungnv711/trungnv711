function checkAge_b1() {
    let age = parseFloat(prompt("how old are you ? "));
    if (age > 18) {
        alert ('you are old enough');
      return true;
    } else {
        alert ('you are old not enough');
      return confirm('Did parents allow you?');
    }
  }

function compare_b2 (){
    
    let number_a = parseFloat(prompt("Nhập số a: "));
    let number_b = parseFloat(prompt("Nhập số b: ")); 

    if (number_a > number_b){
    alert(number_a)      
    }else if( number_a < number_b){
        number_a < number_b
        alert(number_b + " lon hon " + number_a)
    }else{
        alert("Ban nhap chua chinh xac")
    }
    
}

function ask_b3() {
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
        consol.log(question, yes, no);
      }
      
      ask("Do you agree?",
        () => { alert("You agreed."); },
        () => { alert("You canceled the execution."); }
      );
}

function userpassword_b4(){
    let username = prompt("Username");
    let password;
    if(username === "admin"){
        let password = prompt("vui long nhap mat khau");
        if(password==="cafedev"){
            alert("chao mung")
        }else{
            alert("sai mat khau, tai khoan")
            alert("cancel")
        }
    }
    else if(username===null) {
        alert( "cancel")
    }else{
        alert( "toi khong biet ban")
    }
}
