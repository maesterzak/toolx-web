//forms onsubmit
function form_d(e, formID){
    e.preventDefault();
    
    var formData =new FormData(e.target)
    //each form id is represented by formID the value changes depending on the form submitted
    console.log(formID)
    const form_values=Object.fromEntries(formData)
    console.log(form_values)
}
// which button is selected algo or usd

function selectedSubjectName() {
    var radios = document.getElementsByName("test");
  
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios[i].value);
  
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  }