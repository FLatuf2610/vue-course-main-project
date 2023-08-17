<template>
    <header>
        <h2>Find your coach!</h2>
        <div class="bars" @click="toggleNavbar">
            <font-awesome-icon v-if="!isNavbarOpen" icon="fa-solid fa-bars" />
            <font-awesome-icon v-else icon="fa-solid fa-xmark" />
        </div>
    </header>
    <transition name="navbar">
        <ul v-if="isNavbarOpen" class="links">
            <li @click="toggleNavbar" class="link"><router-link to="/coaches">All Coaches</router-link></li>
            <li @click="toggleNavbar" class="link"><router-link to="/requests">Requests</router-link></li>
        </ul>
    </transition>
    
</template>

<style scoped>
    header{
        color: white;
        background-color: #3d008d;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 40px;
        height: 80px;
        position: fixed;
        top: 0;
        width: 100vw;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        z-index: 10000;
    }
    .bars{
        font-size: 25px;
        cursor: pointer;
    }

    .links{
        list-style: none;
        background-color: white;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        padding: 40px 20px;
        max-width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 40px;
        position: fixed;
        top: 85px;
        right: 5px;
        border-radius: 15px;
        z-index: 10000;
    }
    a{
        text-decoration: none;
        color: #3d008d;
    }
    .navbar-enter-from,
    .navbar-leave-to{
        transform: translateX(150px);
    }
    .navbar-enter-active,
    .navbar-leave-active{
        transition: all 0.3s;
    }
    .navbar-enter-to,
    .navbar-leave-from{
        transform: translateX(0);
       
    }
</style>

<script>
export default{
    data() {
        return {
            isNavbarOpen:false
        }
    },
    methods:{
        toggleNavbar(){
            this.isNavbarOpen = !this.isNavbarOpen
        }
    },
};
</script>