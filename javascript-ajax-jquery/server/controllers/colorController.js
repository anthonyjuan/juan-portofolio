module.exports = {
  randomColor: (req, res) => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    let obj = {}
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    obj.color = color;
    obj.box = Math.floor(Math.random() * 10);

    res.send(obj);
  }

};
