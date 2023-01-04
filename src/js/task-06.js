
const inputRefs = document.querySelector("#validation-input"); 

const onBlurVerify = (event) => { 

    if (event.currentTarget.value.length === Number(inputRefs.dataset.length)) {
        inputRefs.classList.remove("invalid");
        inputRefs.classList.add("valid");

    } else {
        inputRefs.classList.add("invalid");
        inputRefs.classList.remove("valid");
}
}
inputRefs.addEventListener("blur", onBlurVerify);


// function validInput (){ 
    
//     if (inputRefs.dataset.length === Number (inputRefs.value.length)) { 
//         inputRefs.classList.remove('valid') 
//         return inputRefs.classList.add('invalid'); 
     
//     }  
         
//         inputRefs.classList.remove('invalid') 
//         return inputRefs.classList.add('valid') 
// } 