var
    regForm=$("#registr"),
    signForm=$(".signForm");

regForm.validate({

    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 3
        },
        confirm: {
            equalTo: ".pswdReg"
        }
    },
    debug:true
});

$(".regBtn").click(function () {


    if (regForm.valid()===true){
        document.querySelector(".register-form").classList.add("displayNone");
    }
});
signForm.validate({
    rules: {
        signEmail:{
            required:true,
            equalTo:".emailReg"
        },
        signPswd:{
            required:true,
            equalTo:".pswdReg"
        }
    },
    messages:{
        signEmail:{
            equalTo:"You should provide email that already exists here"
        },
        signPswd:{
            equalTo:"You should provide password that already exists here"
        }
    },
    debug:true
});

$(".signBtn").click(function () {
    if (signForm.valid()===true){
        document.querySelector(".sign-in-form").classList.add("displayNone");
    }
});
//
// signForm.addEventListener("submit",function (e) {
//     e.preventDefault();
//


// });
