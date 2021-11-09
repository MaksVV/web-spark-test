document.addEventListener('DOMContentLoaded', () => {
  if (datepicker) {
    let datePickerElem = document.querySelector('.date-picker-element1');
    let picker = null;
  
    if (datePickerElem) {
      picker = datepicker(datePickerElem, {
        customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        customMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      });
  
      if (datepickerClickElem) {
        datepickerClickElem.addEventListener('click', function(e) {
          e.stopPropagation();
          let isHidden = picker.calendarContainer.classList.contains('qs-hidden');
          if (isHidden) {
            picker[isHidden ? 'show' : 'hide']();
          }
        });
      }
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  if (datepicker) {
    let datePickerElem = document.querySelector('.date-picker-element2');
    let picker = null;
  
    if (datePickerElem) {
      picker = datepicker(datePickerElem, {
        customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        customMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      });
  
      if (datepickerClickElem) {
        datepickerClickElem.addEventListener('click', function(e) {
          e.stopPropagation();
          let isHidden = picker.calendarContainer.classList.contains('qs-hidden');
          if (isHidden) {
            picker[isHidden ? 'show' : 'hide']();
        	}
        });
      }
    }
  }
})

var elements = document.getElementsByClassName("card-wrapper");
var i;

function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "24%";
  }
}

var container = document.getElementById("buttons");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}