function initCountDown(){
  var end_date = document.getElementById('end_date').innerHTML;
  var end_date = new Date(end_date).getTime();
  var days_only = document.getElementById("countdown_d");
  var days_hours_mins_secs = document.getElementById("countdown_dhms");
  var hours_mins_secs = document.getElementById("countdown_hms");
  var countdownMsg = setInterval(function() {
    var now = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 + (3600000*-4));
    var distance = end_date - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var hours_in_days = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days < 0) {
      clearInterval(countdownMsg);
      if (days_only) { 
        // days_only.innerHTML = '<span class="limited-time-msg">This Offer is Expired!</span>';
        days_only.innerHTML = '';
      }
      if (hours_mins_secs) {
        // hours_mins_secs.innerHTML = '<span class="limited-time-msg">This Offer is Expired!</span>';
        hours_mins_secs.innerHTML = '';
      }
      if (days_hours_mins_secs) {
        // days_hours_mins_secs.innerHTML = '<span class="limited-time-msg">This Offer is Expired!</span>';
        days_hours_mins_secs.innerHTML = '';
      }
    } else if (days < 1) {
      if (days_only) { 
        days_only.innerHTML = '<span class="limited-time-msg">Ends Today!</span>';
        // days_only.innerHTML = '<span class="limited-time-msg">Last Day!</span>';
      }
      if (hours_mins_secs) {
        hours_mins_secs.innerHTML = '<span class="countdown_h"><span>' + hours_in_days + '</span><span>Hours</span></span><span>:</span><span class="countdown_m"><span>' + minutes + '</span><span>Minutes</span></span><span>:</span><span class="countdown_s"><span>' + seconds + '</span><span>Seconds</span></span>';
      }
      if (days_hours_mins_secs) {
        days_hours_mins_secs.innerHTML = '<span class="countdown_h"><span>' + hours + '</span><span>Hours</span></span><span>:</span><span class="countdown_m"><span>' + minutes + '</span><span>Minutes</span></span><span>:</span><span class="countdown_s"><span>' + seconds + '</span><span>Seconds</span></span>';
      }
    } else if (days <= 1) {
      if (days_only) { 
        days_only.innerHTML = '<span class="limited-time-msg">' + days + ' Day Left!</span>';
      }
      if (hours_mins_secs) {
        hours_mins_secs.innerHTML = '<span class="countdown_h"><span>' + hours_in_days + '</span><span>Hours</span></span><span>:</span><span class="countdown_m"><span>' + minutes + '</span><span>Minutes</span></span><span>:</span><span class="countdown_s"><span>' + seconds + '</span><span>Seconds</span></span>';
      }
      if (days_hours_mins_secs) {
        days_hours_mins_secs.innerHTML = '<span class="countdown_h"><span>' + hours + '</span><span>Hours</span></span><span>:</span><span class="countdown_m"><span>' + minutes + '</span><span>Minutes</span></span><span>:</span><span class="countdown_s"><span>' + seconds + '</span><span>Seconds</span></span>';
      }
    } else if (days < 2) {
      if (days_only) { 
        days_only.innerHTML = '<span class="limited-time-msg">' + days + ' Days Left!</span>';
      }
      if (hours_mins_secs) {
        hours_mins_secs.innerHTML = '<span class="countdown_h"><span>' + hours_in_days + '</span><span>Hours</span></span><span>:</span><span class="countdown_m"><span>' + minutes + '</span><span>Minutes</span></span><span>:</span><span class="countdown_s"><span>' + seconds + '</span><span>Seconds</span></span>';
      }
      if (days_hours_mins_secs) {
        days_hours_mins_secs.innerHTML = '<span class="countdown_d"><span>' + days + '</span><span>Days</span></span><span>:</span><span class="countdown_h"><span>' + hours + '</span><span>Hours</span></span><span>:</span><span class="countdown_m"><span>' + minutes + '</span><span>Minutes</span></span><span>:</span><span class="countdown_s"><span>' + seconds + '</span><span>Seconds</span></span>';
      }
    } else if (days < 5) {
      if (days_only) { 
        days_only.innerHTML = '<span class="limited-time-msg">' + days + ' Days Left!</span>';
      }
      if (hours_mins_secs) {
        hours_mins_secs.innerHTML = '<span class="countdown_d"><span>' + days + '</span><span>Days</span></span><span>:</span><span class="countdown_h"><span>' + hours + '</span><span>Hours</span></span><span>:</span><span class="countdown_m"><span>' + minutes + '</span><span>Minutes</span></span><span>:</span><span class="countdown_s"><span>' + seconds + '</span><span>Seconds</span></span>';
      }
      if (days_hours_mins_secs) {
        days_hours_mins_secs.innerHTML = '<span class="countdown_d"><span>' + days + '</span><span>Days</span></span><span>:</span><span class="countdown_h"><span>' + hours + '</span><span>Hours</span></span><span>:</span><span class="countdown_m"><span>' + minutes + '</span><span>Minutes</span></span><span>:</span><span class="countdown_s"><span>' + seconds + '</span><span>Seconds</span></span>';
      }
    } else {
      clearInterval(countdownMsg);
      if (days_only) { 
        days_only.innerHTML = '<span class="limited-time-msg">Limited Time Offer!</span>';
      }
      if (days_hours_mins_secs) { 
        days_hours_mins_secs.innerHTML = '<span class="limited-time-msg">Limited Time Offer!</span>';
      }
      if (hours_mins_secs) { 
        hours_mins_secs.innerHTML = '<span class="limited-time-msg">Limited Time Offer!</span>';
      }
    }
  }, 1000);
}