function getGalleryWidth() {
    var w1 = window.innerWidth * 0.67 * 0.8;
    var w2 = window.innerHeight * 0.55 / 0.7;
    if (w1 < w2) {
        return w1;
    }
    else  {
        return w2;
    }
}

function createGallery(photosPrefix,photosCount,divId) {
    var data = [];
    for (var i = 1; i <= photosCount; i++) {
        var dataItem = {};
        var pref = photosPrefix;
        if (i < 10)
            pref = pref + "0";
        pref = pref + i.toString();
        dataItem.thumb = pref + "s.jpg";
        dataItem.image = pref + "m.jpg";
        dataItem.big = pref + "l.jpg";
        data.push(dataItem);
    }
                
    var w = getGalleryWidth();
    var gal = $('#' + divId).galleria({
        width: w,
        height: w*0.75,
        imageCrop: false,
        minScaleRatio: 0.01,
        maxScaleRatio: 4.0,
        dataSource: data,
        extend: function() {
                        
            // Galleria.log(this) // the gallery instance
            // Galleria.log(options) // the gallery options
                        
            var c = this.get("container");
            c.style.marginLeft = (-w*0.5) + "px";
            c.style.left = "50%";
                        
            // listen to when an image is shown
            this.bind('image', function(e) {
                            
                // Galleria.log(e) // the event object may contain custom objects, in this case the main image
                // Galleria.log(e.imageTarget) // the current image
                            
                // lets make galleria open a lightbox when clicking the main image:
                $(e.imageTarget).click(this.proxy(function() {
                    this.openLightbox();
                }));
            });
            var gal = this;
            $(window).bind('resize', function() {
                w = getGalleryWidth();
                c.style.width = w + 'px';
                c.style.height = w*0.75 + 'px';
                gal.rescale(null, null, function(){});
                c.style.marginLeft = (-w*0.5) + "px";
                c.style.left = "50%";
            });
        }
    });
}
