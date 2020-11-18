const { delay } = 10000;

Vue.component('countdown', {
  template: `
  <section class="countdown">
    
    <div v-show="!expired" class="timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.days }}</p>
        <p class="label">days</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.hours }}</p>
        <p class="label">hours</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.minutes }}</p>
        <p class="label">minutes</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.seconds }}</p>
        <p class="label">seconds</p>
      </div>
      <p class="text">Next course of {{theTime.tou}}!</p>
    </div>

    <div v-show="expired" class="expired-timer timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{theTime.tou}} courses is now!</p>
        <p class="label"><a href="https://github.com/ninehubcr/Introduccion-a-radioastronomia">Join!</a></p>
      </div>
    </div>
   
  </section>
` ,
 data() {
   return{
     deadline: 'Nov 20, 2020 13:00:00',
     days: 'HI',
     hours: 'TH',
     minutes: 'ER',
     seconds: 'E!',
     expired: false,

   };
   const i = 0;
 },
 computed: {
   
     
   theTime(){
    var ctx = this;
      
     
     var color = " rgb(57 128 29 /62%)";
     // Countdown loop    
     var x =  setInterval(function(){
       
       // Difference between the 2 dates
       var countDownDate = new Date(ctx.deadline).getTime(),
           now = new Date().getTime(),
           diff = countDownDate - now,

           // Time conversion to days, hours, minutes and seconds
           tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
           thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
           tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
           tseconds = Math.floor((diff % (1000 * 60)) / 1000);
       
       // Keep 2 digits
       ctx.days = (tdays < 10) ? '0' + tdays : tdays;
       ctx.hours = (thours < 10) ? '0' + thours : thours;
       ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
       ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

       // Check for time expiration
       if(diff < 0){
         clearInterval(x);
         ctx.expired = true;
        console.log(!ctx.expired);
        document.getElementById("py1").style.background = color;
        document.getElementById("py1").className = "Hbox pulse"
        

       }
     }, 1000);
  
     // Return data
     return {
       days: ctx.days,
       hours: ctx.hours,
       minutes: ctx.minutes,
       seconds: ctx.seconds,
       tou: "Python",
       color: "rgb(57 128 29 /62%)"
      
     };
   }
  
  

  }
});

Vue.component('countdownn', {
  template: `
  <section class="countdown">
    
    <div v-show="!expired1" class="timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime1.days }}</p>
        <p class="label">days</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime1.hours }}</p>
        <p class="label">hours</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime1.minutes }}</p>
        <p class="label">minutes</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime1.seconds }}</p>
        <p class="label">seconds</p>
      </div>
      <p class="text">Next course of {{theTime1.tou}}!</p>
    </div>

    <div v-show="expired1" class="expired-timer timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{theTime1.tou}} courses is now!</p>
        <p class="label"><a href="https://github.com/ninehubcr/Introduccion-a-radioastronomia">Join!</a></p>
      </div>
    </div>
   
  </section>
` 
,
 data() {
   return{
     deadline1: 'Sep 27, 2020 15:00:00',
     days1: 'HI',
     hours1: 'TH',
     minutes1: 'ER',
     seconds1: 'E!',
     expired1: false,


   };
   const i = 0;
 },
 computed: {
  theTime1(){
    var ctx = this;
    
      
     
     var color = " rgb(57 128 29 /62%)";
     
     // Countdown loop    
     var y =  setInterval(function(){
       
       // Difference between the 2 dates
       var countDownDate = new Date(ctx.deadline1).getTime(),
           now = new Date().getTime(),
           diff = countDownDate - now,
  
           // Time conversion to days, hours, minutes and seconds
           tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
           thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
           tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
           tseconds = Math.floor((diff % (1000 * 60)) / 1000);
       
       // Keep 2 digits
       ctx.days1 = (tdays < 10) ? '0' + tdays : tdays;
       ctx.hours1 = (thours < 10) ? '0' + thours : thours;
       ctx.minutes1 = (tminutes < 10) ? '0' + tminutes : tminutes;
       ctx.seconds1 = (tseconds < 10) ? '0' + tseconds : tseconds;
  
       // Check for time expiration
       if(diff < 0){
         clearInterval(y);
         ctx.expired1 = true;
        console.log(!ctx.expired1);
        document.getElementById("astb").style.background = color;
       }
     }, 1000);
  
     // Return data
     return {
       days: ctx.days1,
       hours: ctx.hours1,
       minutes: ctx.minutes1,
       seconds: ctx.seconds1,
       tou: "Radioastronomía",
       color: "rgb(57 128 29 /62%)"
      
     };

   }
 }
});

Vue.component('countdownds', {
  template: `
  <section class="countdown">
    
    <div v-show="!expired2" class="timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime2.days }}</p>
        <p class="label">days</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime2.hours }}</p>
        <p class="label">hours</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime2.minutes }}</p>
        <p class="label">minutes</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime2.seconds }}</p>
        <p class="label">seconds</p>
      </div>
      <p class="text">Next course of {{theTime2.tou}}!</p>
    </div>

    <div v-show="expired2" class="expired-timer timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{theTime2.tou}} courses is now!</p>
        <p class="label"><a href="https://github.com/ninehubcr/Introduccion-a-radioastronomia">Join!</a></p>
      </div>
    </div>
   
  </section>
` 
,
 data() {
   return{
     deadline2: 'Jan 27, 2021 15:00:00',
     days2: 'HI',
     hours2: 'TH',
     minutes2: 'ER',
     seconds2: 'E!',
     expired2: false,


   };
   const i = 0;
 },
 computed: {
  theTime2(){
    var ctx = this;
    
      
     
     var color = " rgb(57 128 29 /62%)";
     
     // Countdown loop    
     var y =  setInterval(function(){
       
       // Difference between the 2 dates
       var countDownDate = new Date(ctx.deadline2).getTime(),
           now = new Date().getTime(),
           diff = countDownDate - now,
  
           // Time conversion to days, hours, minutes and seconds
           tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
           thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
           tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
           tseconds = Math.floor((diff % (1000 * 60)) / 1000);
       
       // Keep 2 digits
       ctx.days2 = (tdays < 10) ? '0' + tdays : tdays;
       ctx.hours2 = (thours < 10) ? '0' + thours : thours;
       ctx.minutes2 = (tminutes < 10) ? '0' + tminutes : tminutes;
       ctx.seconds2 = (tseconds < 10) ? '0' + tseconds : tseconds;
  
       // Check for time expiration
       if(diff < 0){
         clearInterval(y);
         ctx.expired2 = true;
        console.log(!ctx.expired2);
        document.getElementById("DS").style.background = color;
       }
     }, 1000);
  
     // Return data
     return {
       days: ctx.days2,
       hours: ctx.hours2,
       minutes: ctx.minutes2,
       seconds: ctx.seconds2,
       tou: "Data Science",
       color: "rgb(57 128 29 /62%)"
      
     };

   }
 }
})
var app = new Vue({
  el: '#app'
});
