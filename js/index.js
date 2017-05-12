/**
 * Created by guhaoran on 2017/5/12.
 */
$('window').ready(function () {
    $('#screen_layout_one').mouseover(function(event) {
      /* Act on the event */
      var flag = setAnimator(this.id);
      if(!flag){
        setScreenOneAnimation(flag, this.id);
      }
    });

    $('#screen_layout_two').mouseover(function(event){
      var flag = setAnimator(this.id);
      if(!flag){
        setScreenTwoAnimation(flag, this.id);
      }

    });

    $('#screen_layout_three').mouseover(function(event){
      var flag = setAnimator(this.id);
      if(!flag){
        setScreenThreeAnimation(flag, this.id);
      }
    });

    $('#screen_layout_four').mouseover(function(event){
      var flag = setAnimator(this.id);
      if(!flag){
        setScreenFourAnimation(flag, this.id);
      }
    });

    $('#screen_layout_five').mouseover(function(event){
      var flag = setAnimator(this.id);
      if(!flag){
        setScreenFiveAnimation(flag, this.id);
      }
    });

    $('#screen_layout_six').click(function(event){
      scrollTo(0,0);
    });


    //处理侧边栏的点击事件
      $('#outline_item_one').click(function(){
        scrollTo(0,0);
        var flag = $("#screen_layout_one").hasClass("done");
        if(!flag){
          setScreenOneAnimation(flag,"screen_layout_one");
        }
      });

      $('#outline_item_two').click(function(){
        scrollTo(0,640);
        var flag = $("#screen_layout_two").hasClass("done");
        if(!flag){
          setScreenTwoAnimation(flag,"screen_layout_two");
        }
      });

      $('#outline_item_three').click(function(){
        scrollTo(0,1280);
        var flag = $("#screen_layout_three").hasClass("done");
        if(!flag){
          setScreenThreeAnimation(flag,"screen_layout_three");
        }
      });

      $('#outline_item_four').click(function(){
        scrollTo(0,1920);
        var flag = $("#screen_layout_four").hasClass("done");
        if(!flag){
          setScreenFourAnimation(flag,"screen_layout_four");
        }
      });
      $('#outline_item_five').click(function(){
        scroll(0,2560);
        var flag = $("#screen_layout_five").hasClass("done");
        if(!flag){
          setScreenFiveAnimation(flag,"screen_layout_five");
        }
      });


      //处理标题按钮的点击事件
      $('#toolbar_title_one').click(function(){
        scrollTo(0,0);
        var flag = $("#screen_layout_one").hasClass("done");
        if(!flag){
          setScreenOneAnimation(flag,"screen_layout_one");
        }
      });

      $('#toolbar_title_two').click(function(){
        scrollTo(0,640);
        var flag = $("#screen_layout_two").hasClass("done");
        if(!flag){
          setScreenTwoAnimation(flag,"screen_layout_two");
        }
      });

      $('#toolbar_title_three').click(function(){
        scrollTo(0,1280);
        var flag = $("#screen_layout_three").hasClass("done");
        if(!flag){
          setScreenThreeAnimation(flag,"screen_layout_three");
        }
      });

      $('#toolbar_title_four').click(function(){
        scrollTo(0,1920);
        var flag = $("#screen_layout_four").hasClass("done");
        if(!flag){
          setScreenFourAnimation(flag,"screen_layout_four");
        }
      });
      $('#toolbar_title_five').click(function(){
        scroll(0,2560);
        var flag = setAnimator(this.id);
        if(!flag){
          setScreenFiveAnimation(flag, this.id);
        }
      });
})

//设置标题栏上的按钮文字选中效果
function toolbarMenuChange(view){
  var menuArray = document.getElementById("toolbar_titles").getElementsByTagName("a");
  for(var i = 0 ; i< menuArray.length ; i++){
    menuArray[i].className = "";
  }

  $("#"+view).addClass('nav_active');
}

//设置侧边栏按钮的选择效果
function navMenuChange(view){
  var navArray = document.getElementById("outline").getElementsByTagName("a");
  for(var i = 0 ; i < navArray.length ; i++){
    var id = navArray[i].id;
    $('#'+id).removeClass("outline__item_status_active");
  }
  $("#"+view).addClass('outline__item_status_active');
}

//设置动画
function setAnimator(id){
  var flag = $("#"+id).hasClass("done");
  return flag;
}

//设置第一屏的动画
function setScreenOneAnimation(flag , id){
  $("#screen_layout_one_title").addClass("moveToTop_done");
  $("#screen_layout_one_second_title").addClass("moveToTop_done");
  $("#screen_item_one_shadow").addClass("item_one_shadow_done");

  $("#"+id).addClass("done");
}

//设置第二屏的动画
function setScreenTwoAnimation(flag,id){
  $("#screen_layout_two_title").addClass("moveToTop_done");
  $("#screen_layout_two_second_title").addClass("moveToTop_done");
  $("#screen_layout_two_man").addClass("showTwoMan");
  $('#screen_layout_two_rocket').addClass("showSlideAnimator");
  $("#"+id).addClass("done");
}

//设置第三屏的动画
function setScreenThreeAnimation(flag,id){
  $("#screen_layout_three_title").addClass("moveToTop_done");
  $("#screen_layout_three_second_title").addClass("moveToTop_done");
  $("#screen_layout_three_image").addClass("showTwoMan");
  $('#screen_layout_three_menu').addClass("showSlideAnimator");
  $("#"+id).addClass("done");
}

//设置第四屏的动画
function setScreenFourAnimation(flag,id){
  $("#screen_layout_four_title").addClass("moveToTop_done");
  $("#screen_layout_four_second_title").addClass("moveToTop_done");

  $("#screen_layout_four_list_item1").addClass("scale_done");
  $("#screen_layout_four_list_item2").addClass("scale_done");
  $("#screen_layout_four_list_item3").addClass("scale_done");
  $("#screen_layout_four_list_item4").addClass("scale_done");
  $("#"+id).addClass("done");
}

//设置第五屏的动画
function setScreenFiveAnimation(flag,id){

  $("#screen_layout_five_title").addClass("moveToTop_done");
  $("#screen_layout_five_second_title").addClass("moveToTop_done");
  $("#screen_layout_five_img").addClass("scale_done");
  $("#"+id).addClass("done");
}

//处理滚动条的滚动事件
$(window).scroll(function () {
  //获得滚动位置
  var height = $(window).scrollTop();
  console.log(height);
  //如果滑动位置小于640 则判断在顶部
  if(height == 0 && height < 480){
    toolbarMenuChange("toolbar_title_one");
    navMenuChange("outline_item_one");
  }else if(height >= 480 && height < 1090){
    toolbarMenuChange("toolbar_title_two");
    navMenuChange("outline_item_two");
  }else if(height >= 1090 && height < 1750){
    toolbarMenuChange("toolbar_title_three");
    navMenuChange("outline_item_three");
  }else if(height >= 1750 && height < 2430 ){
    toolbarMenuChange("toolbar_title_four");
    navMenuChange("outline_item_four");
  }else if(height >= 2430 ){
    toolbarMenuChange("toolbar_title_five");
    navMenuChange("outline_item_five");
  }


  if(height >= 570){
    $('#toolbar').addClass("toolbarWhiteColor");
    $('#outline').addClass("outline_done");
    var menuArray = document.getElementById("toolbar_titles").getElementsByTagName("a");
    for(var i = 0 ; i< menuArray.length ; i++){
      menuArray[i].style.color = "#07111b";
    }
    $('#toolbar_title').css("color","#07111b");
  }else if(height < 570){
    $('#toolbar').removeClass("toolbarWhiteColor");
    $('#outline').removeClass("outline_done");
    var menuArray = document.getElementById("toolbar_titles").getElementsByTagName("a");
    for(var i = 0 ; i< menuArray.length ; i++){
      menuArray[i].style.color = "#fff";
    }
    $('#toolbar_title').css("color","#fff");
  }
});
