(function($) {
    'use strict'
    $(document).ready(function() {
		googleMaps();
	});
})(jQuery);
$('.topnav > .icon').click( function() {
	$('.topnav').toggleClass('responsive');
	$('.logo').toggle();
    return false;
});
function googleMaps() {
    var myLatlng = new google.maps.LatLng(44.63256616076738, 22.65080451965332);
    var mapOptions = {
        zoom: 17,
        minZoom: 6,
        maxZoom: 20,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        panControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: false,
        rotateControl: false
    }
    var map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);
    var image = new google.maps.MarkerImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACrFBMVEUAAAD/AAD/AAD/VVX/Pz/MMzPUKiraSCTfPz/iODjlMzPnLi7pPyrrOjrsNjbdMzPfPy/hPDziODjkNTXlMzPmPDDnOTnoNzfpNTXgPTLhOjHiODjjNjbkNDTlOzPmOTHnNzfnNjboPDThOjLiODHkNTXkOjTlOTPmNzfmNjbnOzXnOTTiODLjNzfjOzbkOjXkOTTmNzfmOjXmOTTiODPjNzLjOzbkOjXlNzPlOjbjNzPjOjbjOTbkOTXkODTlNzPlOjblOTXmODXmNzTjOTbkODTkNzTlOjPlOTblODXmNzTkOTbkODXkNzTkOTTlOTPlODXlODXmOjTmOTTjODbkODXkNzXkOTTkOTTlODblOjXmOTTjODPkODXkNzXkOTTkOTTlODPlODXlOTXlOTTlODTjODPkNzXkODTlODblOTXlOTXlODTlODTkNzXkOTXkOTXkODTkODTlOTXlOTXlODTlODTlOTTkOTXkOTXkODTkODTjOTTlOTXlODXlODTlOTTkOTXkODXkODTkOTTjOTXlODXlODXlOTTlOTTkOTXkODPkOTTjOTTlNzXlOTPlOTTlOTTkODXkODXkOTPkOTTlODXlOTXlOTPlODXkODXkOTXkOTPjNzTlOTXlOTXlNzTlODXkOTPkNzTjODTlODTlODTlOTXkOTXkNzPjODTjOTXjOTXlNzXlNzPlODTlOTXlOTXkNzXkODPjOTTjOTXlNzXlNzPlODPlOTTlOTXkNzXkODPjOTPlNzXlOTPlOTXlNzXkODXjOTPjOTPjNzXjNzXlOTXlOTPlOTPlNzXlODXkOTPjOTPjNzXjOTXlOTPlOTPlNzTlNzXlOTXjOTPjNzPjNzXjOTXjOTXlOTPlNzPlNzXlOTXlOTXjNzPjNzPjOTXjOTXlOTUJ8kqdAAAA43RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJicoKSorLC0uLzAxMzQ1Njc4OTw9QEFCQ0RFRkdISUtNTk9QUVJVVldYWVpbXF1eX2BhYmNlZmdoaWprbG1ub3BxcnV2d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2PkJGSk5SVlpeYmpucnZ+goaKjpKWnqKmrrK2ur7Gys7W3uLm9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV2Nrb3N3e3+Dh4uPk5ebn6Orr7O3u7/Dx8vP09fb3+Pn6+/z9/mbp908AAAeUSURBVBgZxcGJfxSFGQbgd2bXXQxCIAaPiAQIFMLlRdUeFsUWldRGCRaPipZqFU16WI8CcoNHqhFRkNB4UCwlHEa5SmmqLSbEJEhYgSaa3c2m7z9Sfn7fJpnJJMzMHnke+BMonl++aV/9iUg8Hmms37up/K5iE9lizHz8/bPs58x7j80wkHmTX2jkgD5/bhIyKrjwY15AXVkQmRJe3EAXPv9FCJlg3N9Kl5rvQ/rN2k8P9kxHeoVXJ+hJ14shpFHRYdokDlY9OW9GYV4olFc4446lVYe6aXNgAtLmp+do0bJ+Xi5sRt2xoZUWZ+cjTZ5lX51v32rCUeC2LVH29Tukg/kq+2hfdQUGceWaDvax0UTKQtXs1bUmDxeQvy7BXttCSJG5nb32TocLsz5ir20mUvMqe8SWGHDF+HWcPTYiJc+yx/Hr4NrsBvb4LVJQwh67cuHB6Fr2uAu+FZ1j0vYwPBlWw6Qz4+FT+DCTXjfhUeANJh0IwZ/VTNpuwrPAu0xaAV9mJah2heHDsFqqrmnwwdhPdTwXvoxupKqFD/dTxa6DT9+NUy2EZ+FWqiXw7Qmq5hC8Wky1x4Aj86aKmvpIPB6prym/0YQjo47qQXgUbKDomg4n41a2sI/mFVfDyTUJiuMBeLOQag0cXPZanDaxynw42EC1AN58TNGeh/7KvqKDSCn6G/M1xX54MplqFfq5qIoDqAyin7VURfDieYrOK2CXs5MD2pEDu4IoxR/ggdFA8TbsLtrJQewIwm4rxXF4MJPqVti9zkFVwu52qmlw73GKFhM2ZezVsGxOQShUMGd5I3v9DDaBLyl+Cffep1gPm8vOMKnxbhPKLG1i0ulLYfMSRQ1cC5ylmAeb15i0ZTj6uGQrk16BzXyKiAm3iikSubAaF6daDZu1VLGrYJXXTTEFbs2nOASblVRbYGdso1oOmyMUd8CtcooqWJktFI3D0c+ILyiaDFi9QbEUbm2ieBJWN1HdDQf3Us2G1dMUVXBrH8U8WFVQNJhwEDhB8TSs7qKohVv1FDNgVUOxDI5WUlTDahbFP+DWCYpCWNVTzIGjuRTHYDWB4nO4FaHIg1WEogCOxlK0wSqfog1uxSlCsIpThOAoTBGDVZgiBrfaKXJgFacIwVGYIgar4RQxuPUZxThYRSgK4GgsRRusxlO0wa1aiuthVU8xB47mUhyD1WyKT+HWVoqFsKqhWA5HqyiqYbWIYgfcWkOxAVblFI0mHASaKJ6C1csU6+DWfRR1sLqRqhQOyqhugNUBikVwazxF7BJYmM0UTZegn5HNFCcMWIyMUxTDtUaK+bB6kWor7IxqqmWwKqE4a8C1TRRVsLo6TrXWgIWxnipaAKs3KWrg3iKKkyasKpm0bQT6GFnNpI2wCpyieBjuFVLdAqv8CJO+uDcAFShrZtKp0bC6jWo8PDhAsQk2pex1YuXcseHw2LmrmtirBDZvURyBF49TtOfAppKDegk2wzsoyuHFld0U98ImuIOD+CAAm4VUk+DJXyn2wS5nBwf0wcWwq6OogzcPUM2EXbCSA3gpALtrqR6GN6OiFJXor/Q0HZwqQX+vU3SOgkdvUnTkor9LX4nRJrpxNPob/Q3FZnh1PdVSOBm7vIl9nFhWACcVVDfBszqKlhAcmbOfrj7WFou1Hat+6gYDjsInKY7Cu3uoFsG3B6kegHcXtVL8y4BPxqcUp4bBh2eo7oRP86mehR+Xd1Ichj/GUYrOy+HLy1Q/gS93Ur0Kf8bFKQ7BlyMUiYnwqYrqx/BhHtUW+DUpQXHYgGfGUYruYvi2haoEnpVSvQP/iv9H8WkAHgX/TdE9DSnYRvUAPHqI6h2kYnIXRdMweHJxM0ViMlLyJ6ql8KScqgqpueobirOXwoMx5yhihUjRSqr18OBlqnVI1egzFPFJcO07XRTn8pGyCqo/w7X3qH6D1OW0UH0fLv2IqiUHaXAf1dEAXAn8k+rnSAfjINXDcOVRqiMm0uJmqrZRcCEvQvUDpEk11Tq4sIHqXaTLhChF13Rc0KwERXQi0mYFVS0uaC/VCqTPiJNU9+ACyqhaRyCNFlC1jsCgcr+kWoC0qqVag0Gto9qL9JrRRdE1E4O4NkGRuAZpto7qIwMDMj+h2oh0yz1J9RAGtJjqy1ykXRnVV2MwgMvPUJUhA3ZTbcYAtlDtRiZMiVHNgaO5VLEpyIjnqI7nwMHwBqrnkRnhz6hWwsEaqv8MQ4b8kKrrGvRzfYLqFmTMZqpDAdgE/061GZkz5jTVUthUUJ3ORwYtpOqcDIupUaoFyKidVHsM9GF+RPUXZFZhO9Wj6OMxqo5CZNgSqvbx6DGxg+pXyDRzP9UuA8rYTbXfRMZNjVI9ArWEKjoVWVBO1TEB3yr6mqoc2RA4SPU3A+cZtVQHA8iKaVGqx3DeE1SxaciSCqpvpgDFnVQVyJbAQaoDweAhqgMBZM20KNXvn6GKFiOLllJ1dVE9iWwy99Fmn4msKuqgRUcRsuwRWixGthkfso8PkX0FEfaIFGAIlLBHCYbEW1SbMTRyG/mthpEYIt/r5nndN2PI/JHnvYChE/yE/CSIIVTU/t+JGFJlC5Ca/wMMph+sa01J5gAAAABJRU5ErkJggg==", null, null, null, new google.maps.Size(40, 40));
    var marker = new google.maps.Marker({
        position: myLatlng,
        icon: image,
        map: map,
        title: 'Click here for more details'
    });
    var infowindow = new google.maps.InfoWindow({
        content: "<strong>Școala Generală 'Alice Voinescu'</strong>"
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(myLatlng);
    });
}