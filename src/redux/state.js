const store = {
  _state: {
    profilePage: {
      post: [
        {id: 1, message: 'Hello, how are you?', likeCount: 10},
        {id: 2, message: 'It\'s my first post', likeCount: 15},
        {id: 3, message: 'Yo Yo', likeCount: 20},
        {id: 4, message: 'buy', likeCount: 25},
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Alex', avatarImg: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"},
        {id: 2, name: 'Denis', avatarImg: "data:image/jpeg;base64,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"},
        {id: 3, name: 'Petr', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VC8WL-ap1mStCeC7nilr3YxMr5CuowNy9w&usqp=CAU"},
        {id: 4, name: 'Vasiliy', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3FEmPBlpiCLAA382CDq1YNmA6gpICLmcWQ&usqp=CAU"},
      ],
      incomeMessages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo Yo'},
        {id: 4, message: 'buy'},
      ],
      outcomeMessages: [
        {id: 1, message: 'Hi Hi'},
        {id: 2, message: 'I am fine'},
        {id: 3, message: 'Yoooo'},
        {id: 4, message: 'Byu Byu'},
      ],
      newMsgText: ''
    },
    sideBar: {
      friends: [
        {id: 1, name: 'Alex', avatarImg: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"},
        {id: 2, name: 'Denis', avatarImg: "data:image/jpeg;base64,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"},
        {id: 3, name: 'Petr', avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VC8WL-ap1mStCeC7nilr3YxMr5CuowNy9w&usqp=CAU"},
      ]
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
      this._state.profilePage.post.push(newPost)
      this._state.profilePage.newText = " ";
      this._callSubscriber(this._state)
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newPostText
      this._callSubscriber(this._state)
    }
    else if (action.type === 'SEND-MSG') {
      const newMsg = {
        id: 5,
        message: this._state.dialogsPage.newMsgText,
      }
      this._state.dialogsPage.outcomeMessages.push(newMsg)
      this._state.dialogsPage.newMsgText = ""
      this._callSubscriber(this._state)
    }
    else if (action.type === "UPDATE-NEW-MSG-TEXT") {
      this._state.dialogsPage.newMsgText = action.newMsgText;
      this._callSubscriber(this._state)
    }
  },



  changeMsg(text) {

  },
}

export default store;

window.store = store