export default {
  // API(){
  //   return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + q + '&appid=' + Config.apiId)
  // };

  getCurrentDate(){
    const monthNames = ["January", "February", "March", "April",
                        "May", "June",  "July", "August", "September",
                        "October", "November", "December"];

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return date + ' ' + monthNames[month] + ' ' + year;
  },

  getCurrentDay(){

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                      "Thursday", "Friday",  "Saturday"];

    var day = new Date().getDay();

    return dayNames[day];
  },

  getCurrentTime(){
    var hours = new Date().getHours();
    if (hours < 10) hours = '0' + hours;

    var minutes = new Date().getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    return hours + ':' + minutes;
  },

  getGreetings(){
    var hours = new Date().getHours() * 60;
    var minutes = new Date().getMinutes() + hours;

    if (minutes >= 300 && minutes <= 719) return 'Good Morning';
    if (minutes >= 720 && minutes <= 1019) return 'Good Afternoon';
    if (minutes >= 1020 || minutes <= 299) return 'Good Evening';

    return 'Good Day';
  },
}
