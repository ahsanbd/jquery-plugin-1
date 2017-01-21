window.onload = function() {
   /*
    if (typeof oldIE === 'undefined' && Object.keys) {
        hljs.initHighlighting();
    }
    */
  
    baguetteBox.run('.baguetteBoxTwo', {
        animation: 'fadeIn',
        noScrollbars: true,
        buttons: true,//false
        captions: function(element) {
            return element.getElementsByTagName('img')[0].alt;
        }//for showing caption
    });
     
};