<template>
    <section class="register">
        
        <form @submit.prevent="submitForm">
            <h2>Register as a coach</h2>
            <div class="form">
                <div class="name">
                    <custom-input @emit-data="updateDataF" :type="'text'" :id="'firstname'" :label="'First Name'" ></custom-input>
                    <custom-input @emit-data="updateDataL" :type="'text'" :id="'lastname'" :label="'Last Name'"></custom-input>
                    <p class="error" v-if="!firstName.isFirstNameValid">You must enter your first name</p>
                    <p class="error" v-if="!lastName.isLastNameValid">You must enter your lastname</p>
                </div>
                <div class="checkboxes-container">
                    <h3>Areas of expertise</h3>
                    <div class="checkboxes">
                        <div class="checkbox">
                            <label for="frontend">Frontend: </label>
                            <input type="checkbox" id="frontend" v-model="areas" value="frontend">
                        </div>
                        <div class="checkbox">
                            <label for="backend">Backend: </label>
                            <input type="checkbox" id="backend" v-model="areas" value="backend">
                        </div>
                        <div class="checkbox">
                            <label for="career">Career: </label>
                            <input type="checkbox" id="career" v-model="areas" value="career">
                        </div>
                    </div>
                    <p class="error" v-if="!isAreasValid">You must select at least one area of expertise</p>
                </div>
                <div class="hourly-rate">
                    <h3>Hourly Rate</h3>
                    <div class="input-hourly">
                        <custom-input @emit-data="updateDataH" :type="'number'" :id="'rate'" :label="'Hourly Rate'"></custom-input>
                    </div>
                    <p v-if="hourlyRate.isValidNumber == false" class="error">Please enter a valid number</p>
                    <p class="error" v-if="hourlyRate.isEntered == false">You must enter your hourly rate</p>
                </div>
                <div class="textarea-container">
                    <h3>Description</h3>
                    <div class="textarea">
                        <textarea id="description" v-model.trim="description.val"></textarea>
                    </div>
                    <p class="error" v-if="description.isDesctiptionValid == false">You must enter your description</p>
                </div>
                <div class="btn">
                    <base-button :action="'Submit info'"></base-button>
                </div>
            </div>
          
        </form>
    </section>
</template>

<script>
export default{
    data() {
        return {
            firstName:{
                val:'',
                isFirstNameValid:true
            },
            lastName:{
                val:'',
                isLastNameValid:true
            },
            areas:[],
            isAreasValid:true,
            description:{
                val:'',
                isDesctiptionValid:true
            },
            hourlyRate:{
                val:null,
                isValidNumber:true,
                isEntered:true
            },
            isValidForm:true,
            
        }
    },
    methods:{
        updateDataF(data){
            this.firstName.val = data
        },
        updateDataL(data){
            this.lastName.val = data
        },
        updateDataH(data){
            this.hourlyRate.val = data
        },
        validateForm(){
            const firstName = this.firstName.val.trim();
            const lastName = this.lastName.val.trim();
            const description = this.description.val.trim();
            const areas = this.areas.length;
            this.isValidForm = true
            if(firstName == ''){
                this.firstName.isFirstNameValid = false
                this.isValidForm = false
            }
            if(lastName == ''){
                this.lastName.isLastNameValid = false
                this.isValidForm = false
            }
            if(description == ''){
                this.description.isDesctiptionValid = false
                this.isValidForm = false
            }
            if(this.hourlyRate.val < 0){
                this.hourlyRate.isValidNumber = false
                this.isValidForm = false
            }
            if(areas < 1){
                this.isAreasValid = false
                this.isValidForm = false
            }
            if(this.hourlyRate.val == null){
                this.hourlyRate.isEntered = false
                this.isValidForm = false
            }
        },
        submitForm(){
            this.validateForm();    
            if(!this.isValidForm){
                    return;
                }
            const newCoach = {
            firstName:this.firstName.val,
            lastName:this.lastName.val,
            areas:this.areas,
            hourlyRate:this.hourlyRate.val,
            description:this.description.val
            }
            this.isValidForm = true
            this.$store.dispatch('addCoach',newCoach)
            this.$router.push('/coaches')}
            
            
        
    },
};
</script>

<style scoped>
.error{
    color: red;
    text-align: center;
}
.input-hourly{
    width: 150px;
    margin: auto;
}

.hourly-rate h3{
    text-align: center;
    margin-bottom: 10px;
}

section{
    background-color: rgb(240, 240, 240);
    height:calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
}
.register{
    margin-top: 70px;
    padding: 30px 0px;
}
h2{
    text-align: center;
    margin-bottom: 10px;
}

form{
    margin: auto;
    width: 95%;
    max-width: 950px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
    padding:40px 20px;
    background-color: white;
}
.form{
  
    display: grid;
    grid-template-columns: auto;
    gap: 20px;
    
}
.name{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;    
}
@media(min-width:769px){
    .name{
        width: 70%;
        margin: auto;
    }
}

.checkboxes{
    display: flex;
    gap: 10px;
    justify-content: center;
}

.checkboxes-container h3{
    text-align: center;
    margin-bottom: 10px;
}

.textarea-container h3{
    margin-bottom: 10px;
    text-align: center;
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
    max-width: 600px;
    height: 125px;
}
.btn{
    text-align: center;
}
</style>