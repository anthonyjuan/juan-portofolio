let app = new Vue({
  el: '#app',
  data: {
    test: 'Wassup dude',
    statusLogin: false,
    showLoginState: false,
    showSignupState: false,
    email:'',
    password:''
  },
  methods: {
    showHome: function() {
      this.showSignupState = false
      this.showLoginState = false
    },
    showLogin: function() {
      console.log('jancok');
      this.showSignupState = false
      this.showLoginState = true
    },
    showSignup: function() {
      this.showLoginState = false
      this.showSignupState = true
    },
    login: function() {

    },
    checkLoginState: function() {
      if(window.localStorage.token) {
        this.statusLogin = true
      } else {
        this.statusLogin = false
      }
    },
    getAllUser: function() {
      axios.get('http://localhost:3000')
           .then(function(res){
             console.log(res.data);
           })
    },
    signUp: function() {
      let self= this
      axios.post(
        'http://localhost:3000',
        {
          email: self.email,
          password: self.password
        })
        .then(function(res) {
          console.log(res.data);
        })
    }
  },
  mounted: function() {
    this.getAllUser()
    this.checkLoginState()
  }
})

