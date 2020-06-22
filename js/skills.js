// var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
//     $checkboxes = $("#checkbox-container :checkbox");

// $checkboxes.on("change", function(){
//   $checkboxes.each(function(){
//     checkboxValues[this.id] = this.checked;
//   });
  
//   localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
// });

// // On page load
// $.each(checkboxValues, function(key, value) {
//   $("#" + key).prop('checked', value);
// });


// $('input[name=checkbox]').change(function () {
//     console.log("sdf")
//     if($(this).is(':checked')) {
//         console.log("checked")
//     } else {
//         // Checkbox is not checked..
//     }
// });




// var checkbox = document.querySelector("input[name=checkbox]");
// checkbox.addEventListener( 'change', function() {
//     if (this.checked) {
//         console.log("check")
//         // Checkbox is checked..
//     } else {
//         // Checkbox is not checked..
//     }
// });

// var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
//     $checkboxes = $("#checkbox-container :checkbox");
// console.log(checkboxValues)
// $checkboxes.on("change", function(){
//     $checkboxes.each(function () {
      
//       checkboxValues[this.id] = this.checked;
//       console.log("sdf")

//   });
  
//   localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
// });

// // On page load
// $.each(checkboxValues, function (key, value) {
//   $("#" + key).prop('checked', value);
// });




  if (document.getElementById('sitecheck').checked) 
  {
      console.log("Sdf")
  }