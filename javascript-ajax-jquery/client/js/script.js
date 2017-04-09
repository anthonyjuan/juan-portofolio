
$('.random').click(() => {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/color',
    success: (res) => {
      $(`.${res.box}`).css("background-color",`${res.color}`)
      // console.log(res);
    }
  })
})
