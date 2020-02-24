$(document).ready(function(){
    $('#Desc').first().css('display', 'block');
    $('.tablinks').first().addClass('active');
    $('.instock_images').first().show();
    
//    testdrive switcher
    $('.testdrive_switch').first().removeClass('opacity07');
    $('.testdrive_wrapper').first().show();
    
})

function instock_img_switcher(img_id){
    $('.instock_images').hide();
    $('img[data-img_id="'+img_id+'"]').show();
}

function testdrive_switcher(elem, car_id){
    $('.testdrive_switch').addClass('opacity07');
    $(elem).removeClass('opacity07');
    $('.testdrive_wrapper').hide();
    $('.testdrive_wrapper[data-car_id="'+car_id+'"]').show();
}

function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


