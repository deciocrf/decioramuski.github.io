const look = document.getElementById('look');

$('#sdev').click( function () {
    $('[data-fancybox="software"]').fancybox({
        // Enable keyboard navigation
        keyboard: true,
    
        btnTpl: {
            // Arrows
            arrowLeft:
                '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path>' +
                "</svg>" +
                "</a>",
    
            arrowRight:
                '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path>' +
                "</svg>" +
                "</a>"
        },
        
    });
    
    
});

$('#art').click(function () {
    $('[data-fancybox="artGallery"]').fancybox({
        
        // Enable keyboard navigation
        keyboard: true,
        // ProtecImages
        protect: true,

        btnTpl: {
            // Arrows
            arrowLeft:
                '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path>' +
                "</svg>" +
                "</a>",
    
            arrowRight:
                '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path>' +
                "</svg>" +
                "</a>"
        },


       
        
    });
 
   
});



$('#3dGal').click( function () {
    
    $('[data-fancybox="3dGallery"]').fancybox({
        // Enable keyboard navigation
        keyboard: true,
    
        btnTpl: {
            // Arrows
            arrowLeft:
                '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path>' +
                "</svg>" +
                "</a>",
    
            arrowRight:
                '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path>' +
                "</svg>" +
                "</a>"
        },
        
    }); 
    
    
    
});


function onQuadrant(evt){
    
        if ((evt.clientX >= 0 && evt.clientX <= (innerWidth / 3) ) && (evt.clientY >= 0 && evt.clientY <= (innerHeight / 2)) ){
            look.setAttribute('src', 'img/look-up-left.png');
        } else if ((evt.clientX >= (innerWidth / 3 + 1) && evt.clientX <= ((innerWidth / 3 ) * 2) ) && (evt.clientY >= 0 && evt.clientY <= (innerHeight / 2))) {
            look.setAttribute('src', 'img/look-straight.png');
        } else if ((evt.clientX >= ((innerWidth / 3) * 2 + 1) && evt.clientX <= innerWidth ) && (evt.clientY >= 0 && evt.clientY <= (innerHeight / 2))) {
            look.setAttribute('src', 'img/look-up-right.png');
        } else if ((evt.clientX >= 0 && evt.clientX <= (innerWidth / 3) ) && (evt.clientY >= (innerHeight / 2 + 1) && evt.clientY <= innerHeight ) ) {
            look.setAttribute('src', 'img/look-left.png');
        } else if ((evt.clientX >= ((innerWidth / 3) * 2 + 1) && evt.clientX <= innerWidth ) && (evt.clientY >= (innerHeight / 2 + 1) && evt.clientY <= innerHeight )) {
            look.setAttribute('src', 'img/look-right.png');
        } else {
            look.setAttribute('src', 'img/look-straight.png');
        }
    
}

function clearMouse(){
    look.setAttribute('src', 'img/look-straight.png');
}

