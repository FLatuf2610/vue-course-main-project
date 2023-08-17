<template>
    <li class="coach">
        <div class="tittle">
            <h3>{{ fullName }}</h3>
            <h4>${{ rate }}/hour</h4>
        </div>
        <div class="areas">
            <p class="area" v-for="area in areas" :key="area">{{ area }}</p>
        </div>
        <div class="actions">
            <base-button 
                :to="viewDetails" 
                :link="true"
                :action="'View details'"
                :mode="'outlined'" 
            ></base-button>
            <base-button 
                :to="contactCoachLink" 
                :link="true"
                :action="'Contact Coach'" 
            ></base-button>
        </div>
    </li>            
</template>

<script>
    export default{
        props:['coach'],
        computed:{
            fullName(){
                return this.coach.firstName + ' ' + this.coach.lastName
            },
            rate(){
                return this.coach.hourlyRate
            },
            areas(){
                return this.coach.areas
            },
            viewDetails(){
                return '/coaches/' + this.coach.id
            },
            contactCoachLink(){
                return '/coaches/' + this.coach.id + '/contact'
            }
            
        }
    };
</script>

<style scoped>
.coach{
    list-style: none;
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
.actions{
    display: flex;
    gap: 5px;
    justify-content: end;
}


</style>