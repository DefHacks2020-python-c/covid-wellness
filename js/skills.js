// $(function(){
//     var test = localStorage.input === 'true'? true: false;
//     $('input').prop('checked', test || false);
// });

// $('input').on('change', function() {
//     localStorage.input = $(this).is(':checked');
//     console.log($(this).is(':checked'));
// });

// console.log("ih")

$(function(){
    var test = localStorage.input === 'true'? true: false;
    $('input').prop('checked', test || false);
});

$('input').on('change', function() {
    localStorage.input = $(this).is(':checked');
    console.log($(this).is(':checked'));
});
