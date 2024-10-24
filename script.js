<script>
    // Slider pentru imagini individuale
    var swiper1 = new Swiper('.home-gallery.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        effect: 'slide', // Poți alege și alte efecte cum ar fi fade sau cube
    });

    // Slider pentru imagini înainte și după
    var swiper2 = new Swiper('.before-after.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        effect: 'slide',
    });
</script>
