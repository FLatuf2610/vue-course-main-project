<template>
    <section class="coach-details">
        <div class="coach">
            <div class="tittle">
                <h3>{{ selectedCoach.firstName + ' ' + selectedCoach.lastName }}</h3>
                <h4>${{ selectedCoach.hourlyRate }}/hour</h4>
            </div>
            <div class="areas">
                <p class="area" v-for="area in selectedCoach.areas" :key="area">{{ area }}</p>
            </div>
            <div class="desc">
                <p>{{ selectedCoach.description }}</p>
            </div>
            <div class="actions">
                <h3>Interested? Contact me now!</h3>
                <div class="btn">
                    <base-button
                :action="'Contact Me'"
                :link="true"
                :path="'/coaches/' + selectedCoach.id + '/contact'"
                ></base-button>
                </div>
                <router-view></router-view>
            </div>
        </div>
        
    </section>
    
    
</template>

<script>
import { RouterView} from 'vue-router';
export default{
    data() {
        return {
            selectedCoach:null
        }
    },
    created(){
        const id = this.$route.params.id;
        const coaches = this.$store.getters.coaches;
        this.selectedCoach = coaches.find(coach => coach.id === id)
        
    },
   
};
</script>

<style scoped>
.btn{
    text-align: end;
}
section{
    margin-top: 80px;
    padding: 30px 0px;
    background-color: rgb(240, 240, 240);
    height: calc(100vh - 80px);
}
.coach{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 95%;
    max-width: 950px;
    margin: auto;
    background-color: white;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    border-radius: 5px;
}
.area{
    text-transform: capitalize;
    color: #3d008d;
    background-color: #ddc3ff;
    padding: 5px 10px;
    border-radius: 15px;
}
.areas{
    display: flex;
    gap: 10px;
}

h3{
    margin-bottom: 10px;
}
</style>