let app = new Vue({
  el: '#app',
  data: {
    memos: [],
    title: '',
    content: '',
    dataEdit: {
      id:0,
      title:'',
      content:''
    },
    active: false
  },
  methods: {
    postMemo: function() {
      let data = {
        title: app.title,
        content: app.content
      }
      axios.post('http://localhost:3000/',data)
           .then((res) => {
             console.log(res);
             app.getMemo();
           })
           .catch((err) => {
             console.log(err);
           })
    },
    getMemo : function() {
      axios.get('http://localhost:3000/')
           .then((res) => {
             app.memos = res.data
            //  console.log(app.memos);
           })
           .catch((err) => {
             console.log(err);
           })
    },
    deleteMemo: function(id) {
        if (confirm ('Are you sure?')) {
          axios.delete(`http://localhost:3000/${id}`)
               .then((res) => {
                 app.getMemo();
               })
               .catch((err) => {
                 console.log(err);
               })
        }
    },
    toggleModal: function(memo) {
      this.dataEdit = {
        id:memo.id,
        title: memo.title,
        content: memo.content
      }
      this.active = !this.active
    },
    editMemo: function(dataEdit) {
      axios.put(`http://localhost:3000/${dataEdit.id}`, dataEdit)
           .then((res) => {
             console.log(res);
             app.active = !app.active;
             app.getMemo()
           })
           .catch((err) => {
             console.log(err);
           })
    }
  }, // keajaiban pada vue, mounted tidak mau arrow funct
  mounted: function() {
    this.getMemo();
  }
})