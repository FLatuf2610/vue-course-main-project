<template>
    <li class="request">
        <div class="email">
            <a :href="mailTo">{{ email }}</a>
        </div>
        <p class="message">{{ message }}</p>
    </li>
</template>

<script>
export default{
    props:['email','message'],
    computed: {
        mailTo(){
            return 'mailto:' + this.email;
        }
    },
};
</script>

<style scoped>
    li{
        list-style: none;
        border-radius: 5px;
        padding: 10px 15px ;
        border: 1px solid rgba(0,0,0,0.5);
        margin-top: 10px;
    }
    a{
        font-size: 18px;
    }
    p{
        margin-top: 5px;
    }
</style>