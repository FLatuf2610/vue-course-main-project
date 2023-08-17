export default{
    state(){
        return{
            coachRequests:[]
        }
    },
    getters:{
        requests(state){
            return state.coachRequests
        }
    },
    mutations:{
        addRequest(state,payload){
            state.coachRequests.push(payload);
        }
    },
    actions:{
        contactCoach(context,payload){
            const request = {
                id:new Date().toISOString(),
                coachId:payload.coachId,
                userEmail:payload.email,
                userMessage:payload.message
            }
            context.commit('addRequest',request)
        }
    }
};