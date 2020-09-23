var popularimg = [{ imgurl: 'images/pimg1.jpg', imgtext: 'Printable coloring book "Forest stories" vol. 2', shopname: 'Petitedominance', imgprice: '29.71' },
{ imgurl: 'images/pimg2.jpg', imgtext: 'Perpetual Calendar, 2021 Calendar, Forever Calendar, Wooden Hanging Calendar', shopname: 'CSAcreative', imgprice: '187.52', selltimes: '(1,541)' },
{ imgurl: 'images/pimg3.jpg', imgtext: 'Custom handmade adorable chibi colorful spaceman plush crewmate alien space toy plushie', shopname: 'FriskWolfieCustoms', imgprice: '162.28', selltimes: '(189)' },
{ imgurl: 'images/pimg4.jpg', imgtext: 'Engraved leather dog collar, Personalized dog collar, Personalized leather dog collar, cat collar, leather cat collar, personalized collar', shopname: 'SoGoodSoWood', imgprice: '52.72', selltimes: '(14,961)' },
{ imgurl: 'images/pimg5.jpg', imgtext: 'Ruth Bader Ginsburg RBG Quote, Feminist Printable, digital download print, Fight for the things that you care about, Thank you RBG', shopname: 'CartabanCards', imgprice: '24.16', selltimes: '(1,580)' },
{ imgurl: 'images/pimg6.jpg', imgtext: 'Black and Gold Candle Holders, Modern Ceramic Candlesticks, Dripping Gold Candleholders, Halloween Decor', shopname: 'KinaCeramics', imgprice: '143.78', selltimes: '(1,202)' }]


// $('#popular-div').append("<p>Test</p>" )
// var pimgs = $('#popular-div')
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}
var shipping = ''
var bestseller = ''
var timessell = ''
each(popularimg, function (element, i) {
    shipping = ''
    bestseller = ''
    timessell = ''
    console.log(i)
    if (i === 5)
        shipping = ('<span>FREE shipping</span>')

    if (i === 1 || i === 4)
        bestseller = ("<p id='bestseller-p'> <img src='bests.jpg' style='width:16px;'>Bestseller</p>")

    if (element.selltimes !== undefined)
        timessell = ("<p style='text-align: left;'><img src='stars.jpg' style='width:80px'>  " + element.selltimes + "</p>")

    var newdiv = ("<div><img class='popular-imgs' src='" + element.imgurl + "'><div class='spanimg'><span >" +
        element.imgtext + "</span><p style='font-size: 10px;  color: #595959;'>" + element.shopname + "</p>" + timessell + "<h4 style='text-align: left; font-size:16px'> ILS " +
        element.imgprice + shipping + "</h4>" + bestseller + "</div></div>")
    $('#popular-div').append(newdiv)
})

var giftsImg=['images/gift1.jpg', 'images/gift2.jpg','images/gift3.jpg','images/gift4.jpg','images/gift5.jpg','images/gift6.jpg']

each(giftsImg, function (element, i) {
    console.log(element)
    var newdiv = ("<div class='giftdiv'><img class='gifts-imgs' src='" + element + "'></div></div>")
    $('#Shopforgifts-div').append(newdiv)
})