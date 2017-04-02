

class diceView {

  static appendDice() {
    $('#roller').append('<div class="dice">0</div>')
  }

  static setValue() {
    $('.dice').each(function() {
      let value = diceObject.randNumber();
      $(this).text(value);
    })
  }

}


class diceModel {
  constructor() {

  }

}

class diceController {

  addDice() {
    diceView.appendDice();
  }

  rollDice() {
    diceView.setValue();
  }
  randNumber() {
    return Math.floor((Math.random()*6)+1)
  }


}


let diceObject = new diceController();



$(document).ready(function() {
  $('.add').on('click', diceObject.addDice);
  $('.roll').on('click', diceObject.rollDice)
})
