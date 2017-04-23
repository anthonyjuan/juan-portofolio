import axios from 'axios'

export const state = {
  statusLogin: false,
  posts: [],
  followingPosts: [],
  dialogTableVisible: false,
  post: {
    userid:'',
    image:'',
    caption:''
  }

}

export const mutations = {
  GET_POSTS(state, payload) {
    state.posts = payload
  },
  GET_FOLLOWING_POSTS(state, payload) {
    state.followingPosts = payload
  },
  SIGN_IN(state, payload) {
    window.localStorage.setItem('token', payload.token)
    window.localStorage.setItem('id', payload.result._id)
    window.location.reload()
  },
  IF_LOGIN(state) {
    if(window.localStorage.token) {
      state.statusLogin = true
      window.location.href= "/#/home"
    } else {
      state.statusLogin = false
    }
  },
  DELETE_POST(state,payload) {
    let index = state.posts.findIndex(val => val._id == payload)
    state.posts.splice(index,1)
  },
  ADD_POST_DIALOG(state, payload) {
    state.post = payload
  },
  EDIT_POST(state, payload) {
    let index = state.posts.findIndex(val => val._id == payload.id)
    state.posts.splice(index,1)
    state.posts.push(payload)
  }

}

export const actions = {
  ifLogin({commit}) {
    commit('IF_LOGIN')
  },
  getPosts({commit}) {
    axios.get('http://localhost:3000/api/post')
         .then(function(res) {
           if(res.data.success){
             commit('GET_POSTS', res.data.result)
           }
         })
  },
  getFollowingPosts({commit}) {
    let id = window.localStorage.id

    axios.get(`http://localhost:3000/api/user/${id}`,
              {headers: {'token': window.localStorage.getItem('token')}})
         .then(function(res) {
           if(res.data.success){
             commit('GET_FOLLOWING_POSTS', res.data.result)
            //  console.log(res.data.result);
           }
         })
  },
  signIn({commit}, dataUser) {
    axios.post('http://localhost:3000/api/login', dataUser)
         .then(function(res) {
           if(res.data.success){
             commit('SIGN_IN', res.data)
           } else {
             alert('username or password is wrong!')
           }
         })
  },
  signUp({commit},dataUserLog) {
    let self = this
    axios.post('http://localhost:3000/api/users', dataUserLog)
         .then(function(res) {
           if(res.data.success) {
             alert(res.data.msg)
           }
         })
  },
  postPost({commit}) {
    axios.post('http://localhost:3000/api/posts', {
      title: state.post.title,
      content: state.post.content,
      author: window.localStorage.id
    },
    {headers: {'token': window.localStorage.getItem('token')}}
    )
    .then(function(res) {
       if(res.data.success) {
         window.location.href="/#/"
       }
    })
  },
  deletePost({commit},id) {
    axios.delete(`http://localhost:3000/api/posts/${id}`,{headers: {'token': window.localStorage.getItem('token')}})
         .then(function(res) {
           if(res.data.success) {
             commit('DELETE_POST',id)
           } else {
             alert(res.data)
           }
         })
  },
  addPostDialog({commit}, data) {
    commit('ADD_POST_DIALOG', data)
  },
  editPost({commit}, post) {
    axios.put(`http://localhost:3000/api/posts/${post.id}`,{
      title: post.title,
      content: post.content
    },{headers: {'token': window.localStorage.getItem('token')}})
    .then(function(res){
      if(res.data == false){
        alert('you have no right')
      } else {
        commit('EDIT_POST',post)
      }
    })
  }
}

export const getters = {
  statusLogin(state) {
    return state.statusLogin
  },
  posts(state) {
    return state.posts
  },
  followingPosts(state) {
    return state.followingPosts
  },
  post(state) {
    return state.post
  },
  dialogTableVisible(state) {
    return state.dialogTableVisible
  }
}