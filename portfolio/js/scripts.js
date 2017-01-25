//// Store & Generate Number
//var maxRand = 3;
//var numRand = Math.floor(Math.random() * maxRand);
//console.log(numRand);
//// Store images
//var img0 = '/img/fullsize/DataAnalysis.gif';
//var img1 = '/img/fullsize/DataCreation.gif';
//var img2 = '/img/fullsize/MapDesignGN.gif';
// Show Images
//$('header img').attr('src', eval('img' + numRand));
//
//light gallery
$(".ewu").lightGallery({
    selector: 'a'
    , mode: 'lg-rotate'
    , speed: 500
    , hideBarsDelay: 2000
    , download: false
});
$(".other").lightGallery({
    selector: 'a'
    , mode: 'lg-lollipop'
    , speed: 500
    , hideBarsDelay: 2000
    , loop: false
    , download: false
});
console.log('test')