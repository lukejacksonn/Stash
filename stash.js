(function($){

    jQuery.fn.stash = function (name, type, fn) {
        this.each(function () {

            var $e = $(this);
            var n = name || "untitled",
                t = type || "txt",
                p = fn || function(e) { return e; }

            var c = $e.val() || $e.html();
            var f = new Blob([p(c)],{type:'application/octet-stream'});
            var a = document.createElement('a');

            window.URL = window.URL || window.webkitURL;
            a.href = window.URL.createObjectURL(f);
            a.download = [n,t].join('.');
            document.body.appendChild(a);
            a.click();

            $('a').last().remove();

        });
    }

})(jQuery)
