// 태블릿 모바일 햄버거 버튼 누르면 나오게 만들기
const hamback =document.querySelector('.back-none')
const hamBtn= document.querySelector('#addclick')
//console.log(hamBtn)
const hamMenu=document.querySelector('.ham-hmenu')
//console.log(hamMenu)
function showHam() {
    hamBtn.addEventListener('click',function(){
        hamMenu.style.display='block'
        hamback.style.display='block'
    })
  }
  showHam()

hamback.style.display='none' 

function closeHam() {
  hamback.addEventListener('click',function(){
    hamMenu.style.display='none'
    hamback.style.display='none'
  })
}
closeHam()


// 상품 리스트 더보기 버튼 
const pList = $('.p-list')
const pListMbtn = $('.mibtn')


pList.hide();
pListMbtn.hide();
pList.slice(0, 12).css("display", "block"); 
$(".plusbtn").click(function(e){
   e.preventDefault();
   $(".product-wrap >.p-list:hidden").slice(0, 12).fadeIn(200).css('display', 'block'); // 클릭시 more 갯수 지저정
   if($(".product-wrap >.p-list:hidden").length == 0){ // 컨텐츠 남아있는지 확인
       $('.plusbtn').fadeOut(100); // 컨텐츠 없을 시 버튼 사라짐
   }if ($(".product-wrap >.p-list:hidden").length == 0) {
    $('.mibtn').css("display", "block"); 
    
   } 
  })
  $('.mibtn').click(function(e){
    e.preventDefault()
    $(".p-list").slice(12,24).fadeOut(500)
    if($('.product-wrap >.p-list').length >= 12){ $('.mibtn').hide()}
    if($('.p-list').length>=11){ $('.plusbtn').css("display", "block");}
    
  }
  )

  $(window).resize(function(){
    let boxWidth= $('.p-list').width()
    

    if(boxWidth<1000){
        //1.69101
        $('.p-list').height(boxWidth*2)
    }

})


 
//bx 첫번째 슬라이드
  $(document).ready(function(){
    $('.bxslider').bxSlider({
      auto: true,           // 자동 슬라이드
      autoControls: false,  // 시작, 정지버튼 노출 여부 
      controls: true,      // prev/next 버튼 노출 여부 
      autoHover:true,
      pager: true,         // 블릿버튼
      speed: 500,        // 이동 속도를 설정
      pagerCustom:'.paging'

    });
  });
  

  //슬릭 슬라이드

      
  $('#slider ul').slick({
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   
    responsive: [ // 반응형 웹 구현 옵션
    
    { 
      breakpoint: 700, //화면 사이즈 768px
      settings: {	
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow:3 
      } 
    }, { 
      breakpoint: 500, //화면 사이즈 768px
      settings: {	
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow:2
      } 
    },{ 
      breakpoint: 310, //화면 사이즈 768px
      settings: {	
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow:1
      } 
    }
  ]

  });
  


const hamMenuT = $('.down>span');
const hamMenuC = $('.sub');
console.log(hamMenuC);
/* hamMenuC.css("display", "none"); */


//$('.sub').hide();

hamMenuT.click(function(){
    $(this).next('.sub').toggleClass('on')
})

  $('#bxslider3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    Speed: 3000,
    responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 1000, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:4 
						} 
					},
					{ 
						breakpoint: 860, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:3
						} 
					},	{ 
						breakpoint: 360, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:2
						} 
					}
				]
  });
  
// 상품 차트 이미지 리사이즈
$(window).resize(function(){
  let boxWidth= $('.p-list').width()
  

  if(boxWidth<1000){
      //1.69101
      $('.p-list').height(boxWidth*2)
  }

})

//리뷰 이미지 리사이즈
$(window).resize(function(){
let reviewBoxWith=$(".review-wrap").width()

if(reviewBoxWith<1000){
$(".review-wrap").height(reviewBoxWith/2)
}if(reviewBoxWith<582){
$(".review-wrap").height(reviewBoxWith * 1.5)
}
})  

