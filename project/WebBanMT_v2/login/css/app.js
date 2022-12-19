
// $(document).ready(function(){
//     $('#eye').click(function(){
//         $(this).toggleClass('open');
//         $(this).children('i').toggleClass('fa-eye-slash fa-eye');
//         if($(this).hasClass('open')){
//             alert('Type text');
//             $(this).prev().attr('type', 'text');
//         }

//     });
// });

// $(document).ready(function(){
//     $('#eye').click(function(){    
//         $(this).children('i').toggleClass('fa-eye-slash fa-eye');
//     });
// });

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);
