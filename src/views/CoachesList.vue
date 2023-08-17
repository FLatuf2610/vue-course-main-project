<template>
    <div class="container">
        <section class="filter">
            <CoachFilter @change-filter="setFilter" />
        </section>

        <section class="coaches">
            <div class="controls">
                <base-button :link="true "
            :to="'/register'"
            :action="'Register as a coach'"></base-button>
            <base-button :action="'Refresh'"
            :mode="'outlined'" @click="loadCoaches"></base-button>
            </div>
            <ul>
                <coachItem v-for="coach in filteredCoaches" :key="coach.id" :coach="coach" />
            </ul>
        </section>
    </div>
</template>

<script>
import CoachFilter from '../components/coaches/CoachFilter.vue';
import coachItem from '../components/coaches/coachItem.vue';
    export default{
        components:{coachItem,CoachFilter},
        data() {
            return {
                filters:{
                    frontend:true,
                    backend:true,
                    career:true
                }
            }
        },
        computed: {
            coaches(){
                return this.$store.getters.coaches
            },
            filteredCoaches(){
                const coaches = this.coaches
                return coaches.filter(coach => {
                    if (this.filters.frontend && coach.areas.includes('frontend')){
                        return true
                    }
                    if (this.filters.backend && coach.areas.includes('backend')){
                        return true
                    } 
                    if (this.filters.career && coach.areas.includes('career')){
                        return true
                    }
                    return false  
                })
            }
        },
        methods:{
            setFilter(data){
                this.filters = data
            },
            loadCoaches(){
                this.$store.dispatch('fetchCoachData')
            }
        }
    };
</script>

<style scoped>
section{
    padding: 30px 0px;
}

.controls{
    width: 95%;
    max-width: 950px;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}
.coaches{
    background-color: rgb(240, 240, 240);
}

ul{
    display: grid;
    grid-template-columns: auto;
    gap: 20px;
}
    .filter{
        margin-top: 80px;
    }
</style>