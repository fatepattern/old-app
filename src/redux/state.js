import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"

export let store = {
    _state : {
        profilePage : {
            posts : [
                {id:0, message:'This is news', countLikes:14937, countDislikes:0},
                {id:1, message:'Heyyy its Oleg Post',  counstLikes:9458, countDislikes:0}
            ],
    
            newPostText : ''
        },
        
        dialogsPage : {
            dialogs : [
                {id:0, name:'Dima'},
                {id:1, name:'Oleg'}
            ],
    
            messagesList : [
                [
                    {id:0, message:'heey'},
                    {id:1, message:'im Dima btw'}
                ],
                [
                    {id:0, message:'Heey'},
                    {id:1, message:'Im Oleg'}
                ]
            ],

            activeUser:-1
        },
    
        sidebar : {
            friends : [
                {id : 0, name : 'Dima'},
                {id : 1, name : 'Oleg'},
                {id : 2, name : 'Max'}
            ]
        }
    },

    getActiveUserId() {
        return this._state.dialogsPage.activeUser;
    },

    getState() {
        return this._state;  
    },

    _rerender() {
    },

    subscribe(observer) {
        this._rerender = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(action, this._state.profilePage);
        this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);
        this._rerender(this._state);
    }
}

window.store = store;