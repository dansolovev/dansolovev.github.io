function myFunction() {
    if($(window).width() < 768)
    {   
        $('h1').removeClass('heading').addClass('subheading');
        $('.title').removeClass('title').addClass('subheading');
        // $(".promo__img").attr("src","img/promo.png");

        // if ($(".promo__img").length){
        // }
        // else {
        //   $('.p-h').after("<img src='img/promo.png' alt='promo' class='promo__img'>");
        // }
    }

    if($(window).width() >= 768)
    {   
        $('h1').removeClass('subheading').addClass('heading');
        $('.subheading').removeClass('subheading').addClass('title');

        // $(".promo__img").attr("data-src","img/promo_pc.png");
        // $(".to-whom__img").attr("data-src","img/to-whom-pc.png");
        // $(".what__img").attr("data-src","img/what-pc.png");
        // $(".whyus__img").attr("data-src","img/whyus-pc.png");
        // $(".faq__img").attr("data-src","img/faq-pc.png");

        // $(".promo__img").attr("src","img/promo_pc.png");
        // $(".to-whom__img").attr("src","img/to-whom-pc.png");
        // $(".what__img").attr("src","img/what-pc.png");
        // $(".whyus__img").attr("src","img/whyus-pc.png");
        // $(".faq__img").attr("src","img/faq-pc.png");
        
    }

    if($(window).width() < 992)
    {   
        $('.promo__header-pc').remove();
        $('.promo__img-pc').remove();

        if ($(".promo__header").length){
        }
        else {
          $('.promo__wrapper').append("<div class='promo__header'><h1 class='subheading p-h'>Хватит терять деньги на фондовом рынке - пришло время их зарабатывать!</h1><img srcset='img/promo.png 320w, img/promo_pc.png 720w' alt='promo' class='promo__img'><div class='fz16 descr'>Я дам вам то, чему научился <br> сам за много лет. <br> Дам вам то, чего не даст вам ни один «коуч»</div><div class='fz16 descr'>Вы меня знаете - никакого обмана</div><div class='fz16 descr'>Это уникальный шанс для каждого <br> из вас начать разбираться <br> в акциях и научиться их <br> анализировать!</div></div>");
        }

        if ($(".to-whom__img").length){
        }
        else {
          $('.to-whom_subheading').after("<img data-srcset='img/to-whom.png 320w, img/to-whom-pc.png 720w' alt='to-whom' class='to-whom__img lazyload'>");
        }
        if ($(".to-whom__bg-pc").length){
            $('.to-whom__bg-pc').remove();
        }
        else {
        }
        if ($(".to-whom__img-pc").length){
            $('.to-whom__img-pc').remove();
        }
        else {
        }

        if ($(".what__img").length){
        }
        else {
          $('.what_subheading').after("<img data-srcset='img/what.png 320w, img/what-pc.png 720w' alt='what' class='what__img lazyload'>");
        }
        if ($(".what__bg-pc").length){
            $('.what__bg-pc').remove();
        }
        else {
        }
        if ($(".what__img-pc").length){
            $('.what__img-pc').remove();
        }
        else {
        }

        if ($(".themes__img").length){
        }
        else {
          $('.themes_subheading').after("<div class='themes__img'><img data-src='img/themes.png' alt='themes' class='themes__img lazyload'></div>");
        }
        if ($(".themes__bg-pc").length){
            $('.themes__bg-pc').remove();
        }
        else {
        }
        if ($(".themes__img-pc").length){
            $('.themes__img-pc').remove();
        }
        else {
        }

        if ($(".whyus__img").length){
        }
        else {
          $('.whyus_subheading').after("<img data-srcset='img/whyus.png 320w, img/whyus-pc.png 720w' alt='whyus' class='whyus__img lazyload'>");
        }
        if ($(".whyus__img-pc").length){
            $('.whyus__img-pc').remove();
        }
        else {
        }

        if ($(".faq__img").length){
        }
        else {
          $('.faq_subheading').after("<div class='faq__img'><img data-srcset='img/faq.png 320w, img/faq-pc.png 720w' alt='faq' class='faq__img lazyload'></div>");
        }
        if ($(".faq__img-pc").length){
            $('.faq__img-pc').remove();
        }
        else {
        }

        
    }
    else
    {
        // Если больше это
    }

    if($(window).width() >= 992)
    {   
        $('.promo__header').remove();

        if ($(".promo__header-pc").length){
        }
        else {
          $('.promo__wrapper').append("<div class='promo__header-pc'><h1 class='heading'>Хватит терять деньги на фондовом рынке - пришло время их зарабатывать!</h1><div class='subheading-pc descr'>Это уникальный шанс для каждого из вас начать разбираться в акциях и научиться их анализировать!</div><div class='paragraphe descr'>Я дам вам то, чему научился сам за много лет. Дам вам то, чего не даст вам ни один «коуч»</div><div class='paragraphe descr'>Вы меня знаете - никакого обмана</div></div>");
        }
        if ($(".promo__img-pc-bg").length){
        }
        else {
          $('.promo').append("<img src='img/bg/promo-bg_pc.png' alt='promo_bg' class='promo__img-pc-bg'>");
        }
        if ($(".promo__img-pc").length){
        }
        else {
          $('.promo').append("<div class='promo__img-pc'><img src='img/promo_pc.png' alt='promo' class='promo__img-pc-man'></div>");
        }

        
        
        if ($(".to-whom__img").length){
            $('.to-whom__img').remove();
        }
        else {
        }
        if ($(".to-whom__bg-pc").length){
        }
        else {
          $('.to-whom').append("<img src='img/bg/to-whom-bg_pc.png' alt='to-whom_bg' class='to-whom__bg-pc'>");
        }
        if ($(".to-whom__img-pc").length){
        }
        else {
          $('.to-whom__wrapper').before("<img src='img/to-whom-pc.png' alt='to-whom-pc' class='to-whom__img-pc'>");
        }

        if ($(".what__img").length){
            $('.what__img').remove();
        }
        else {
        }
        if ($(".what__bg-pc").length){
        }
        else {
          $('.what').append("<img src='img/bg/what-bg_pc.png' alt='what_bg' class='what__bg-pc'>");
        }
        if ($(".what__img-pc").length){
        }
        else {
          $('.what__wrapper').before("<img src='img/what-pc.png' alt='what-pc' class='what__img-pc'>");
        }

        if ($(".themes__img").length){
            $('.themes__img').remove();
        }
        else {
        }
        if ($(".themes__bg-pc").length){
        }
        else {
          $('.themes').append("<img src='img/bg/themes-bg_pc.png' alt='themes_bg' class='themes__bg-pc'>");
        }
        if ($(".themes__img-pc").length){
        }
        else {
          $('.themes__wrapper').before("<img src='img/themes-pc.png' alt='themes-pc' class='themes__img-pc'>");
        }

        if ($(".whyus__img").length){
          $('.whyus__img').remove();
        }
        else {
        }
        if ($(".whyus__img-pc").length){
        }
        else {
          $('.whyus__wrapper').before("<img src='img/whyus-pc.png' alt='whyus-pc' class='whyus__img-pc'>");
        }

        if ($(".faq__img").length){
          $('.faq__img').remove();
        }
        else {
        }
        if ($(".faq__img-pc").length){
        }
        else {
          $('.faq__wrapper').before("<img src='img/faq-pc.png' alt='faq-pc' class='faq__img-pc'>");
        }

        if ($(".desk-menu").length){
        }
        else {
          $('.desk-menu_wrap').append("<div class='desk-menu'><div class='heading logo'>StartTheHistory</div><ul class='menu fz16'><li class='menu_item'><a href='#to-whom' class='menu_link'>Основная информация</a></li><li class='menu_item'><a href='#reviews' class='menu_link'>Отзывы</a></li><li class='menu_item'><a href='#faq' class='menu_link'>FAQ</a></li><li class='menu_item'><a href='#offer' class='menu_link'>Оплата</a></li></ul></div>");
        }

    }
    else
    {
        // Если больше это
    }
}

//вызываем
myFunction();

//ну и при ресайзе перепроверяем
$(window).resize(function() {
    myFunction();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    smartSpeed:950,
    navText: ["<img src='img/icons/chevron-left.svg' alt='prev-arrow' class='prev-arrow'>", "<img src='img/icons/chevron-right.svg' alt='next-arrow' class='next-arrow'>"],
    responsive:{
      0:{
          items:1,
      },
      768:{
          items:2,
      },
      992:{
        items:4,
    },
    }
});

// const hamburger = document.querySelector('.hamburger'),
//       menu = document.querySelector('.menu'),
//       closeElem = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });