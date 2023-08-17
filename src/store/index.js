import {createStore} from 'vuex'
import coachesModule from './coaches/coachesModule.js';
import RequestsModule from './RequestsModule.js';


const store = createStore({
    modules:{
        coachesModule,RequestsModule
    },
    state(){
        return{
            userId:'c4'
        }
    },
    getters:{
        userId(state){
            return state.userId
        }
    }
});

export default store