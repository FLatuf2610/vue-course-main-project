<template>
    <h2>Find your coach</h2>
    <div class="filters">
        <div class="input">
            <label for="frontend">Frontend: </label>
            <input type="checkbox" name="" id="frontend" checked v-model="filters.frontend" @change="setFilter">
        </div>
        <div class="input">
            <label for="backend">Backend: </label>
            <input type="checkbox" name="" id="backend" checked v-model="filters.backend" @change="setFilter">
        </div>
        <div class="input">
            <label for="career">Career: </label>
            <input type="checkbox" name="" id="career" checked v-model="filters.career" @change="setFilter">
        </div>
    </div>    
</template>

<style scoped>

h2{
    text-align: center;
    margin-bottom: 10px;
}
.filters{
    display: flex;
    gap: 20px;
    justify-content: center;
}
</style>

<script>
    export default{
        emits:['change-filter'],
        data() {
            return {
                filters:{
                    frontend:true,
                    backend:true,
                    career:true
                }
            }
        },
        methods:{
            setFilter(e){
                const inputId = e.target.id;
                const isActive = e.target.checked;
                const updatedFilters = {
                    ...this.filters,
                    [inputId]:isActive
                };
                this.filters = updatedFilters
                this.$emit('change-filter',updatedFilters)
            }
        }
    };
</script>