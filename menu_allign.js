function allignNavigationMenu() {
    var containerWidth = xWidth("links_section");
    var linksList = ["link_aboutus", "link_performances", "link_contacts", "link_archive"];
    var totalChildrenSpace = containerWidth - linksList.map( function(id) {return xWidth(id)}).reduce(function(a,b){return a+b;}, 0);
    var extraSpaceForEach = totalChildrenSpace / (linksList.length - 1);
    var offset = 0;
    for (i in linksList) {
        var id = linksList[i];
        document.getElementById(id).style.left = offset.toString() + "px";
        offset += xWidth(id) + extraSpaceForEach;
    }
}

function registerNavigationMenuAlligner() {
    if (!Array.prototype.map)
    {
        Array.prototype.map = function(fun /*, thisp*/)
        {
            var len = this.length;
            if (typeof fun != "function")
                throw new TypeError();

            var res = new Array(len);
            var thisp = arguments[1];
            for (var i = 0; i < len; i++)
            {
                if (i in this)
                    res[i] = fun.call(thisp, this[i], i, this);
            }

            return res;
        };
    }
    if (!Array.prototype.reduce)
    {
        Array.prototype.reduce = function(fun /*, initial*/)
        {
            var len = this.length;
            if (typeof fun != "function")
                throw new TypeError();
            
            // no value to return if no initial value and an empty array
            if (len == 0 && arguments.length == 1)
                throw new TypeError();
       
            var i = 0;
            if (arguments.length >= 2)
            {
                var rv = arguments[1];
            }
            else
            {
                do
                {
                    if (i in this)
                    {
                        rv = this[i++];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (++i >= len)
                        throw new TypeError();
                }
                while (true);
            }

            for (; i < len; i++)
            {
                if (i in this)
                    rv = fun.call(null, rv, this[i], i, this);
            }

            return rv;
        };
    }
    xAddEventListener(window, "resize", allignNavigationMenu, false);
    xAddEventListener(window, "load", allignNavigationMenu, false);
    allignNavigationMenu();
}

