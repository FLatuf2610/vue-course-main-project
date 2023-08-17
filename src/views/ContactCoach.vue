<template>
    <form @submit.prevent="submitMessage">
        <div class="input">
            <custom-input @emit-data="getEmail"
            :label="'E-Mail'"
            :id="'email'"
            :type="'text'"></custom-input>
            <p class="error" v-if="Email.isValidEmail == false">Please enter a valid E-Mail</p>
        </div>
        <div class="textarea">
            <label for="message">Your message:</label>
            <textarea id="message" @input="message.isValidMessage = true" v-model.trim="message.val"></textarea>
            <p class="error" v-if="message.isValidMessage == false">Please enter your message</p>
        </div>
        <div class="btn">
            <base-button :action="'Send Message'"></base-button>
        </div>
    </form>
</template>

<script>
export default{
    data() {
        return {
            Email:{
                val:'',
                isValidEmail:true
            },
            message:{
                val:'',
                isValidMessage:true
            },
            isFormValid:true,
            id:this.$route.params.id
        }
    },
    
    methods: {
        validateForm(){
            const email =this.Email.val.trim()
            
            this.isFormValid = true
            if(email == '' || !email.includes('@')){
                this.Email.isValidEmail = false
                this.isFormValid = false
            }
            if(this.message.val == ''){
                this.message.isValidMessage = false
                this.isFormValid = false
            }
            
        },
        submitMessage(){
            console.log(this.id)
            this.validateForm()
            if(!this.isFormValid){
                return;
            }
            
            const message = {
                coachId:this.id,
                email: this.Email.val,
                message:this.message.val
            }
            this.$store.dispatch('contactCoach',message)
            this.$router.replace('/coaches')
        },
        getEmail(data){
        this.Email.val = data
        console.log(data)
        this.Email.isValidEmail = true   
    }
    },
  
};
</script>

<style scoped>
    .error{
        color: red;
        text-align: center;
        margin-top: 5px;
    }
    .textarea{
        display: grid;
        grid-template-columns: auto;
        place-items: center;
    }
    .btn{
        text-align: center;
    }
    form{
        margin-top: 30px;
        display: grid;
        grid-template-columns: auto;
        gap: 20px;
    }
    .input{
        width: 90%;
        margin: auto;
        max-width: 400px;
    }
    .textarea{
        text-align: center;
    }
    textarea{
    outline: none;
    border: 1px solid rgba(0,0,0,0.3);
    resize: none;
    padding: 10px 15px;
    width: 95%;
    max-width: 400px;
    height: 125px;
    margin-top: 10px;
}
</style>