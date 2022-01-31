function form_d(e){
    e.preventDefault();
    console.log('helloe')
}// which button is selected algo or usd

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