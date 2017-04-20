let app = new Vue({
  el: '#app',
  data: {
    test: 'Wassup dude',
    statusLogin: false,
    showLoginState: false,
    showSignupState: false,
    email:'',
    password:'',
    users: []
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
      axios.post('http://localhost:3000/login',{
        email: this.email,
        password: this.password
      })
      .then(function(res) {
        if(res.data.success) {
          window.localStorage.setItem('token', res.data.token)
          window.location.reload()
        }

      })
    },
    checkLoginState: function() {
      if(window.localStorage.token) {
        this.statusLogin = true
      } else {
        this.statusLogin = false
      }
    },
    getAllUser: function() {
      let self = this
      axios.get('http://localhost:3000',{headers: {'token': window.localStorage.getItem('token')}})
           .then(function(res){
             self.users = res.data
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
          this.showSignupState = false
          this.showLoginState = true
        })
    },
    logout: function() {
      localStorage.clear();
      window.location.reload()
    }
  },
  mounted: function() {
    this.getAllUser()
    this.checkLoginState()
  }
})

