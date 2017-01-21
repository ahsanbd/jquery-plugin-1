jQuery(function(){
      
      jQuery('#camera_wrap_4').camera({
        height: '20%',
        minHeight: '200px',
        maxHeight: '500px',
        loader: 'bar',//pie.none,bar
        loaderColor: '#222',
        loaderBgColor: '#777',
        loaderPadding: 0,
        loaderStroke: 5,
        barPosition: 'bottom',//top
        pieDiameter: 38,
        piePosition: 'rightTop',//'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
        portrait: false,
        pagination: false,
        playPause: false,
        thumbnails: false,
        hover: false,
        opacityOnGrid: true, 
        time: 7000,
        transPeriod: 3000,
        slideOn: 'random',
        navigation: false,
        navigationHover: false, 
        rows: 5,
        cols: 5,
        overlayer: true,
        slicedCols: 50,
        fx: 'topLeftBottomRight',
        /*'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight', 'scrollLeft', 'scrollRight', 'scrollHorz', 'scrollBottom', 'scrollTop'*/
        mobileFx: '',//leave empty if you want to display the same effect.
        easing: 'easeInOutExpo',
        gridDifference: 250,
        alignment: 'center',
        imagePath: 'images/'
      });
      /**************/
 

    });
