
$(function(){
  
  $(document).ready(function(){
  
    ///////   countdown function   /////////////////////
  var timerID = setInterval(function(){
    //////   now time   //////////
    var now = new Date();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    ///////   trip time   //////////
    var tripDay = new Date(2017, 11,28,23,59,59);
    var tripMonth = tripDay.getMonth();
    var tripDate = tripDay.getDate();
    var tripHour = tripDay.getHours();
    var tripMinute = tripDay.getMinutes();
    var tripSecond = tripDay.getSeconds();
    /////   trip time countdown   /////////////
    var countMonth = tripMonth - month;
    var countDate = tripDate - date;
    var countHour = tripHour- hour;
    var countMinute = tripMinute - minute;
    var countSecond = tripSecond -second;
    //console.log(countMonth,countDate,countHour,countMinute,countSecond);
    //////   countdown text in   //////////////////
    $(".month").text(countMonth);
    $(".date").text(countDate);
    $(".hour").text(countHour);
    $(".minute").text(countMinute);
    $(".second").text(countSecond);
    
    
  },1000);
  
    //////   countdown page, web page fadeToggle function   ////////
    (function(){
      $(".menu a").click(function(){
        $(".top_img_box").fadeOut(0);
        $("#countdown_page").fadeOut(0);
        $("#time_schedule").fadeOut(0);
        $($(this).attr("href")).fadeIn(0);
        //console.log($(this).attr("href"));
        //$(this).attr("href");
        $(".menu li").css({
          backgroundColor: "rgba(255,192,203,0)"
        });
        $(this).parent().css({
          backgroundColor:"rgba(135,206,235,0.5)"
        });
        return false;
      })
    })();
    
    
    
    
    });
    
  
});


///////   JavaScript   ////////////////////////
window.onload = function(){
  
  ////////   audio control   ////////////////////
  var audioControl1 = document.getElementById("songs1");
  var audioControl2 = document.getElementById("songs2");
  var audioControl3 = document.getElementById("songs3");
  var soundUP = document.getElementById("up");
  var soundDOWN = document.getElementById("down");
  var soundMUTE = document.getElementById("mute");
  var songsNumber = Math.floor(Math.random()*3)+1;
  
  ///////   suond up button   /////////////////
  soundUP.addEventListener("click",function(){
    audioControl1.volume += 0.05;
    audioControl2.volume += 0.05;
    audioControl3.volume += 0.05;
  });
  
  ///////   suond down button   /////////////////
  soundDOWN.addEventListener("click",function(){
    audioControl1.volume -= 0.05;
    audioControl2.volume -= 0.05;
    audioControl3.volume -= 0.05;
  });
  
  ///////   suond mute button   /////////////////
  soundMUTE.addEventListener("click",function(){
    audioControl1.volume = 0;
    audioControl2.volume = 0;
    audioControl3.volume = 0;
  });
  
  
  ////////   audio play control   ///////////////
  if(songsNumber===1){
    audioControl1.play();
    audioControl1.addEventListener("ended",function(){
      audioControl2.play();
      audioControl2.addEventListener("ended",function(){
        audioControl3.play();
      });
    });
  }else if(songsNumber===2){
    audioControl2.play();
    audioControl2.addEventListener("ended",function(){
      audioControl3.play();
      audioControl3.addEventListener("ended",function(){
        audioControl1.play();
      });
    });
  }else if(songsNumber===3){
    audioControl3.play();
    audioControl3.addEventListener("ended",function(){
      audioControl1.play();
      audioControl1.addEventListener("ended",function(){
        audioControl2.play();
      });
    });
  };
  
  
  
  
}






