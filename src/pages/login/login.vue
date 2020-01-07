<template>
  <div>
    首页
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="用户名">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="sizeForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button  @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      sizeForm: {
        name: "",
        pass: "",
        region: "",
        delivery: false,
        type: []
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onLogin() {
      console.log("submit!");
      console.log(this.sizeForm.name);
      console.log(this.sizeForm.pass);
    },
    onSubmit(){
      this.sizeForm.name=''
      this.sizeForm.pass=''
    }

  },
  components: {}
};
</script>

<style scoped >
</style>
