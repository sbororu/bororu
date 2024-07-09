

/*Hamburger menu*/
function menuOnClick(){
	document.getElementById("menu_checkbox").classList.toggle("change");
	
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
/*star*/
particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":346,//この数値を変更すると星の数が増減できる
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#ffffff"
		},
		"shape":{
			"type":"circle",//形状はcircleを指定
			"stroke":{
				"width":0
			},
			},
		"opacity":{
			"value":1,//シェイプの透明度
			"random":true,//シェイプの透明度をランダムにする
			"anim":{
				"enable":true,//シェイプの透明度をアニメーションさせる
				"speed":3,//シェイプの透明度をアニメーションさせる
				"opacity_min":0,//透明度の最小値０
				"sync":false//全てを同時にアニメーションさせない
			}
		},
		"size":{
			"value":2,
			"random":true,
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.3,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":120,//この数値を小さくするとゆっくりな動きになる
		"direction":"none",//方向指定なし
		"random":true,//動きはランダムに
		"straight":true,//動きをとどめる
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":600
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":true
});



$(document).ready(function(){
        // スクロールで反応するアニメーション
        $(window).on('load scroll', function (){
            SetScrollTiming('.animation');
        });
    });
 
    // スクロールのタイミングでアニメーションさせる
    function SetScrollTiming(target){
        var box = $(target);
        var animated = 'animated';
 
        box.each(function(){
            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();
 
            //画面内のどの位置で処理を実行するかで「100」の値を変更
            if(scrollPos > boxOffset - wh + 100 ){
                $(this).addClass('move');
            }
        });
    }
$(window).on('load scroll', function (){
    SetScrollTiming('.skill1');
    SetScrollTiming('.skill2');
    SetScrollTiming('.skill3');
    SetScrollTiming('.skill4');
    SetScrollTiming('.skill5');
});
/*Moving text*/
var paragraph = document.getElementsByClassName('moving-txt')[0];

function textEffect(animationName) {
  var text = paragraph.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	paragraph.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect () {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
				addEffect();
			}
		}, 100)
	}

	addEffect();
};

textEffect('fly-in-out');


/*Mail script*/
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_d86r26q', 'template_r58wuan', this)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Please try again.');
            console.log('Failed...', error);
        });
});