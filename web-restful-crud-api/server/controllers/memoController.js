let db = require('../models')

module.exports = {
  getMemo: (req, res) => {
    db.Memo.findAll({order: [['id', 'DESC']]})
           .then((memos) => {
             res.send(memos)
           })
           .catch((err) => {
             res.send(err)
           })
  },
  createMemo : (req, res) => {
    let newMemo = {
      title: req.body.title,
      content: req.body.content
    }
    db.Memo.create(newMemo)
           .then((memo) => {
             res.send(memo);
           })
           .catch((err) => {
             res.send(err.message);
           })
  },
  deleteMemo: (req, res) => {

      db.Memo.destroy({where:{id:req.params.id}})
             .then((res) => {
               res.send(res)
             })
             .catch((err) => {
               res.send(err)
             })
  },
  updateMemo: (req, res) => {
    db.Memo.update({title:req.body.title,content:req.body.content},{where:{id:req.body.id}})
           .then((res) => {
             res.send(res);
           })
           .catch((err) => {
             res.send(err);
           })
  }
};