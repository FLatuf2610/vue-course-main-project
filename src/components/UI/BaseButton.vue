<template>
  <router-link v-if="link" :class="mode" :to="path">{{ action }}</router-link>
  <button v-else :class="mode"  >{{ action }}</button>
</template>

<script>
export default{
    props:['link','path','action','mode']
};
</script>

<style scoped>
    button{
      outline: none;
      border: 0px solid transparent;
      box-shadow: none;
    }
    a,button{
    padding: 10px 15px;
    background-color: #3d008d;
    color: white;
    text-decoration: none;
    display: inline-block;
    border-radius: 20px;
    cursor:pointer;
    
    }

    a.outlined,
    button.outlined{
      color: #3d008d;
      border:1px solid #3d008d;
      background-color: white;
    }

    a.outlined:hover,
    button.outlined:hover{
      background-color: #f1e6ff;
    }

    a:hover,
    button:hover{
      background-color: #1f0049;
    }
   

</style>