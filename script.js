$(document).ready(function() {
    function refreshColor() {
        var d = new Date()
        var hours = d.getHours();
        var mins = d.getMinutes();
        var secs = d.getSeconds();

        // set hours, mins and secs to variables

        var r = (Math.round(hours * (225/23))).toString(16);
        var g = (Math.round(mins * (225/59))).toString(16);
        var b = (Math.round(secs * (225/59))).toString(16);

        if (r.length < 2) {r = '0'+r};
        if (g.length < 2) {g = '0'+g};
        if (b.length < 2) {b = '0'+b};

        var color = '#' + (r+g+b).toUpperCase();

        $("#content").css("background", color );
        setTimeout(refreshColor, 1000);
    }

    refreshColor(); // execute function
});
