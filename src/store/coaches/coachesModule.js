export default{
    state(){
        return{
            coaches:[{
                id: 'c1',
                firstName: 'Maximilian',
                lastName: 'Schwarzmüller',
                areas: ['frontend', 'backend', 'career'],
                description:
                  "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                hourlyRate: 30
              },
              {
                id: 'c2',
                firstName: 'Julie',
                lastName: 'Jones',
                areas: ['frontend', 'career'],
                description:
                  'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
              },
              {
                id:'c3',
                firstName:'John',
                lastName:'Connor',
                areas:['backend'],
                description:'I am John and I am a senior developer in Google. Contact me and I will help you to master backend',
                hourlyRate: 20
              }
            ],
        }
    },
    getters:{
        coaches(state){
            return state.coaches 
        }
    },
    mutations:{
      addCoach(state,payload){

        state.coaches.push(payload)
      },
      setCoaches(state,payload){
        state.coaches = payload
      }
    },
    actions:{
      async addCoach(context,payload){
        const userId = context.rootGetters.userId
        const newCoach = {
          firstName:payload.firstName,
          lastName:payload.lastName,
          areas:payload.areas,
          description:payload.description,
          hourlyRate:payload.hourlyRate
        }
        const response = await fetch(`https://prueba2-7e3aa-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json` ,{  
          method:'PUT',
          body:JSON.stringify(newCoach)
        });
        //const responseData = response.json();

        const noSeQueEs = {...newCoach,id:userId}
        console.log(noSeQueEs)
        context.commit('addCoach',{...newCoach,id:userId})
      },
      async fetchCoachData(context){
        const response = await fetch('https://prueba2-7e3aa-default-rtdb.europe-west1.firebasedatabase.app/coaches/');
        const responseData = await response.json()

        const coaches = []
        for (const key in responseData){
          const coach = {
            id:key,
            firstName:responseData[key].firstName,
            lastName:responseData[key].lastName,
            areas:responseData[key].areas,
            description:responseData[key].description,
            hourlyRate:responseData[key].hourlyRate,
          }
          coaches.push(coach)
        }
        context.commit('setCoaches',coaches)
      }
    }
};