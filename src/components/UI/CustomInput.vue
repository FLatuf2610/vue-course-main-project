<template>
    <div class="input">
        <input :type="type" :id="id" placeholder=" " @input="emitData">
        <label :for="id">{{ label }}</label>
    </div>
</template>

<script>
export default{
    props:{id:String,label:String,modelValue:String,type:String},
    emits:['emit-data'],
    data() {
        return {
            localData:this.data
        }
    },
    methods:{
        emitData(e){
           const data = e.target.value;
           this.localData = data
           this.$emit('emit-data',data)
        }
    }
};
</script>

<style scoped>
    .input{
        position: relative;
    }
    label{
        position:absolute;
        left: 10px;
        top: 12px;
        font-size: 13px;
        transition: all 0.2s;
    }
    input{
        width: 100%;
        padding: 10px;
        outline: none;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 10px;
        font-size: 13px;
        
    }
    input:not(:placeholder-shown) ~ label,
    input:focus ~ label{
        font-size: 10px;
        background-color: white;
        padding: 5px;
        color: #3d008d;
        transform: translateY(-22px);
    }
    input:not(:placeholder-shown),
    input:focus{
        border: 2px solid #3d008d;
    }
</style>