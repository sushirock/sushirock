// var app = new Vue({
//     el: '#app',
//     data: {
//       open: false
//     },
//     methods: {
//         onclick: function(){
//             this.open = !this.open
//         }

//     }
//  })


 $(function(){
     $(".menu-btn").click(function(){
         $(".menu").toggleClass("is-active")         
        });
    
    //  $("#close").click(function(){
    //      $(".menu").removeClass("is-active")
    //  });    

 })   

 $(function(){
    let pagetop = $("#topbtn");

    pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
         pagetop.fadeIn();
    } else {
         pagetop.fadeOut();
    }
 });
    pagetop.click(function(){
        $("body,html").animate({scrollTop: 0},500);
        return false
    })
});



