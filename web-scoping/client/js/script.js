$('#skills').hide()
$('#meals').hide()

let changeHeading = function() {
    let data = $('.button-html').attr('data-heading')
    if(data !== 'heading') {
      $('.button-html').attr('data-heading','heading')
    } else {
      $('.button-html').attr('data-heading','Berubah!!!')
    }
    $('#h1-home').text(data)
}

let getUrl = function(name, url) {
  if (!url) url = window.location.href;
   name = name.replace(/[\[\]]/g, "\\$&");
   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
       results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, " "));
}


let changeHeadingUsingUrl = function() {
  let data = getUrl('query')
  $('#h1-skills').text(data)
}

let changeHeadingUsingStorage = function() {
  let data = window.localStorage.meals
  let dataArr = data.split(',')
  let num = dataArr.length - 1
  $('#h1-meals').text(dataArr[Math.floor(Math.random()*num)+1])

}

let getHome = function() {
  $('#skills').hide()
  $('#meals').hide()
  $('#home').show()
}
let getSkills = function() {
  $('#skills').show()
  $('#meals').hide()
  $('#home').hide()
}
let getMeals = function() {
  axios.get('http://localhost:3000/index')
       .then(function(res) {
         window.localStorage.setItem('meals', res.data.data)
         $('#skills').hide()
         $('#meals').show()
         $('#home').hide()
       })

}