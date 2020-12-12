var dialines= document.getElementsByClassName('dialines');
      var clockE1= document.getElementsByClassName('clock')[0];
      const deg = 6;

      for(var i=1;i<60; i++){
        clockE1.innerHTML += "<div class='dialines'></div>";
        dialines[i].style.transform = "rotate("+ 6 * i +"deg)";
      }
      function clock(){
        var weekday= new Array(7),
         d = new Date(),
          h= d.getHours(),
         m = d.getMinutes(),
         s=d.getSeconds(),
         date=d.getDate(),
         month=d.getMonth(),
         year=d.getFullYear(),

        // hDeg = h * 30 + m * (360/720),
        // mDeg = m * 30 + s * (360/720),
        // sDeg = s * 6,

        //  hDeg = ((h/60)*360) + 90;
        //  mDeg = ((m/60)*360) + 90;
        //  sDeg = ((s/60)*360) + 90;

        hDeg = h * 30,
        mDeg = m * deg,
        sDeg = s * deg,


         hE1= document.querySelector('.hour-hand'),
         mE1= document.querySelector('.minute-hand'),
         sE1= document.querySelector('.second-hand'),

         dateE1= document.querySelector('.date'),
         dayE1= document.querySelector('.day');

        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var day= weekday[d.getDay()];
        hE1.style.transform = "rotate("+hDeg+"deg)";
        mE1.style.transform = "rotate("+mDeg+"deg)";
        sE1.style.transform = "rotate("+sDeg+"deg)";
        dateE1.innerHTML = date+"/"+months[month]+"/"+year;
        dayE1.innerHTML = day;
      }
      setInterval("clock()",100);