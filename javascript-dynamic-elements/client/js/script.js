$('#addtodo').click(() => {
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/",
    data: {
      name: $('#namatodo').val()
    },
    success: (res) => {
      $('.columns').append(`<div class="column is-half ${res._id}">${res.name}</div><div class="column option-${res._id} is-half ${res._id}"><a onclick="complete('${res._id}')" class="button is-danger">Not complete</a> <a onclick="hapus('${res._id}')" class="button is-warning">Delete</a></div>`)

    }
  })
})

$.ajax({
  method: "GET",
  url: "http://localhost:3000/",
  success: (res) => {
    res.map((todo) => {
      if(todo.status == false) {
        $('.columns').append(`<div class="column is-half ${todo._id}">${todo.name}</div><div class="column option-${todo._id} is-half ${todo._id}"><a onclick="complete('${todo._id}')" class="button is-danger">Not complete</a> <a onclick="hapus('${todo._id}')" class="button is-warning">Delete</a></div>`)
      } else {
        $('.columns').append(`<div class="column is-half ${todo._id}">${todo.name}</div><div class="column option-${todo._id} is-half ${todo._id}"><a onclick="uncomplete('${todo._id}')" class="button is-success">complete</a> <a onclick="hapus('${todo._id}')" class="button is-warning">Delete</a></div>`)
      }
    })

  }
})


function complete(id){
  // console.log(id);
  $.ajax({
    method: "PUT",
    url: `http://localhost:3000/${id}`,
    success: (res) => {
      $(`.${id} .button`).remove();
      $(`.option-${id}`).append(`<a onclick="uncomplete('${id}')" class="button is-success">complete</a> <a onclick="hapus('${id}')" class="button is-warning">Delete</a>`);

    }
  })
}

function hapus(id) {
  $.ajax({
    method: "DELETE",
    url: `http://localhost:3000/${id}`,
    success: (res) => {
      $(`.${id}`).remove();
    }
  })
}


// var c = {};

$("tr").draggable({
  helper: 'clone',
  cancel: 'td:first-child'
})
