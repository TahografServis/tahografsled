//var styleMap = [{"featureType":"all","stylers":[{"saturation":0},{"hue":"#e7ecf0"}]},{"featureType":"road","stylers":[{"saturation":-70}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"simplified"},{"saturation":-60}]}];
var styleMap = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#d6d6d6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#d6d5d5"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#d2c8c8"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#52a85c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
var callBackFancybox = function(e){
		e.preventDefault();
		var template = $("#zayavkaform").html(),
			d = $("<div></div").html(template),
			form = $("form" , d),
			user = $("#username", form),
			phone = $("#userphone", form),
			email = $("#usermail", form),
			text = $("#usertext", form);
		$.fancybox(d, {
			tpl:{
				wrap:'<div class="fancybox-wrap tahografskin" tabIndex="-1">'+
						'<div class="tahografskin-overlay"></div>'+
						'<div class="fancybox-skin">'+
							'<div class="fancybox-outer">'+
								'<div class="fancybox-inner"></div>'+
							'</div>'+
						'</div>'+
					'</div>'
			},
			//height:"90%",
			width:"80%",
			autoCenter:true,
			maxWidth:400,
			keys : {
				close: null
			},
			helpers: {
				overlay : {
					closeClick : false,
				}
			},
			/* functions */
			beforeShow: function(e){
				$(".tahografskin-overlay").hide();
				
				var _this = this.inner;
					form = $("form" , _this),
					user = $("#username", form),
					phone = $("#userphone", form),
					email = $("#usermail", form),
					text = $("#usertext", form),
					block = $(".messageform", _this),
					rem = $(".remajax", _this),
					_callback = $(".callback", _this);
				phone.mask("+7(999)999-99-99");
				(initializeCalback==false) && _callback.addClass("hidden");
				form.on("submit", function(e){
					e.preventDefault();
					$(".fancybox-overlay, .fancybox-close").unbind("click");
					var formData = new FormData(this);
					$(".tahografskin-overlay").show();
					$.ajax({
						url: '/',
						data: formData,
						processData: false,
						contentType: false,
						type: 'POST',
						dataType: 'JSON',
						success: function(data) {
							$(".fancybox-close").on("click", function(e){
								e.preventDefault();
								$.fancybox.close();
								return !1;
							});
							$(".tahografskin-overlay").hide();
							block.html(data.message);
							if(!data.error){
								form.remove();
								rem.remove();
							}
							$.fancybox.update();
							(initializeCalback==false) && _callback.addClass("hidden");
						}
					});
					return !1;
				})
			},
			afterShow: function(e){
				//console.log("AFTER", this, e);
			}
		})
		return !1;
	},
	callbackManagerBtn = function(e){
		e.preventDefault();
		if(initializeCalback){
			window.OnlinePBXWebWidget.expand()
		} else {
			callBackFancybox.apply(this, [e]);
		};
		return !1;
	},
	initializeCalback = false;
if (typeof OnlinePBXWebWidget == 'undefined')
	window.OnlinePBXWebWidget = {events:{}};
OnlinePBXWebWidget.events.init = function() {
	initializeCalback = true;
	$(".callback").css({"display":"block"});
};
$(function(){
	var rphone = /^(\+?(?:8|7)(?:[\s-(])?\d{3}(?:[\s-)])?\d{3}(?:[\s-])?\d{2}(?:[\s-])?\d{2})$/,
		rmail = /^([\w.-]+@[\w-]+\.+\w{2,})$/,
		ruser = /^([\s\S\w\d\D\W]{2,})$/g,
		rtext = /^([\s\S\w\d\D\W]{2,})$/g,
		map;
	// Open OnlinePBX
	$("html,body").on("click", ".callback-manager", function(e){
		callbackManagerBtn.apply(this, [e]);
	});
	// Close fancybox and Open OnlinePBX
	$("html,body").on("click", ".callback-manager.fancybox", function(e){
		$.fancybox.close();
		callbackManagerBtn.apply(this, [e]);
	});
	// Initialize GoogleMap
	window.initGooleMap = function(){
		var latlng = new google.maps.LatLng(53.2503229, 50.47515659999999),
			offices = [
				{
					title: "Тахограф-Сервис",
					content: "<h4>«Тахограф-Сервис»</h4><p>Самарская обл., Кинельский р-н,<br />пгт. Алексеевка, ул. Гагарина, д. 33, оф. 10</p>"+
							"<dl><dt>Телефон:</dt><dd><a class=\"callback-manager\" href=\"tel:88005500973\" rel=\"nofollow\">8-800-550-09-73</a><br>Звонок бесплатный</dd></dl>",
					position: latlng,
					marker: null
				}
			];
		if($("#googlemap").length){
			map = new google.maps.Map(document.getElementById('googlemap'), {
				center: latlng,
				zoom: 12,
				//mapTypeId: google.maps.MapTypeId.HYBRID,
				//scrollwheel: false,
				styles: styleMap,
			});
			for(var i = 0; i < offices.length; ++i){
				offices[i].marker = new google.maps.Marker({
					position: offices[i].position,
					map: map,
					title: offices[i].title
				});
				offices[i].marker['infoWindow'] = new google.maps.InfoWindow({
					content: offices[i].content
				});
				google.maps.event.addListener(offices[i].marker, 'click', function(e) {
					this['infoWindow'].open(map, this);
				});
			}
		}
	}
	// Initialize Baner Slick Slider
	$(".banertop").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "0px",
		dots: true,
		arrows: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
		customPaging: function(slider, i) {
			return $('<span class="banertop-dot"></span>').text('');
		},
		autoplay: true,
		autoplaySpeed: 4000
	});
	// Background Paralax
	$('.jarallax').jarallax({
		speed: 0.5
	});
	// marquee
	$("#marq_01").length && (
		marqueeInit.config({
			uniqueid: 'marq_01',
			style: {
				'width': '100%',
				'padding': '5px',
				'height': '69px'
			},
			inc: 1, //максимальная скорость движения блока (в пикселах)
			mouse: 'pause', //поведение при наведении указателя. Возможные значения -  ('pause' 'cursor driven' or false)
			addDelay: 20,
		})
	);
	// Initialize Fancybox Gallery
	$("a.fancybox").fancybox();
	// Send form in Fancybox
	$(".section-maps .btn-tahograf").click(
		function(e){
			callBackFancybox.apply(this, [e]);
		}
	);
	var _bg = $(".bg");
	// Set size and position image background block plitka (shtorka)
	$(window).on("resize", function(e){
		_bg.each(function(){
			var _this = this,
				triangle = $(".triangle", _this),
				width = $(_this).width(),
				height = $(_this).height();// * 2;
			var l = (height >= width) ? -((height - width) / 2) : 0,
				t = (width >= height) ? -((width - height) / 2) : 0,
				w = (width >= height) ? width : height,
				h = (height >= width) ? height : width;
			triangle.css({
				//"background-size": ""+w+"px " + h + "px",
				"top" : t+"px",
				"left": l+"px",
				"width": w+"px",
				"height": h+"px"
			});
		});
	}).trigger("resize");
	// Preload background and dispatch event resize
	$("*").each(function(){
		var bg = $(this).css('background-image'),
			src = bg.replace(/(^url\()|(\)$|[\"\'])/g, '');
		var $img = $('<img>').attr('src', src).on('load', function() {
				$(window).trigger("resize");
			});
	});
	$('.section-about-wrapper p, .section-about-wrapper li, .section-about-wrapper a, .section-about-wrapper strong').hyphenate('ru');
})