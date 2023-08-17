<template>
    <section>
        
        <div class="requests">
            <h2>Requests recieved</h2>
                <h3 v-if="filteredRequests.length == 0">You haven´t recieved any requests yet!</h3>
            <ul>
                <Request v-for="request in filteredRequests" :email="request.userEmail" :message="request.userMessage"/>
            </ul>
        </div>
    </section>

</template>

<script>
import Request from '../components/requests/Request.vue';
export default{
    components:{Request},
    computed: {
        requests(){
            return this.$store.getters.requests
        },
        filteredRequests(){
            const coachId = this.$store.state.userId
            return this.requests.filter(request => request.userId === coachId)
        },
      
    },
}
</script>

<style scoped>
h2,h3{
    text-align: center;
}
h3{
    margin-top: 10px;
}
section{
    background-color: rgb(240, 240, 240);
    height:calc(100vh - 80px);
    margin-top: 70px;
    padding: 30px 0px;
}
.requests{
    margin: auto;
    width: 95%;
    max-width: 950px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
    padding:30px 20px;
    background-color: white;
}
</style>