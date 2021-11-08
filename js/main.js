document.addEventListener('DOMContentLoaded', () => {
    if (datepicker) {
      let datepickerClickElem = document.querySelector('.datepicker img');
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
      let datepickerClickElem = document.querySelector('.datepicker img');
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