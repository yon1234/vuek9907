<template>
  <div class="login">
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" :rules="rules">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="sizeForm.username"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="sizeForm.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="9">
          <el-form-item size="medium">
            <el-button type="primary" @click="onLogin">登录</el-button>
            <el-button @click="onSubmit">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="10">
          <el-form-item size="medium">
            <el-checkbox label="记住密码" name="type"></el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      sizeForm: {
        username: "",
        password: ""
      },
       rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
           pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          }
    };
  },



  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onLogin() {
      this.getest();
      console.log("submit!");
      console.log(this.sizeForm.username);
      console.log(this.sizeForm.password);
    },
    onSubmit() {
      this.sizeForm.name = "";
      this.sizeForm.pass = "";
    },
    async getest() {
      let { data: res } = await this.$axios.post("login", this.sizeForm);
      console.log(res);
      if (res.meta.status !== 200) return this.$message.error("登录失败!");
      // 提示登录成功
      this.$message.success("登录成功!");
      // 把登录成功的token保存到sessionStorage
      window.sessionStorage.setItem("token", res.data.token);
      // 使用编程式导航，跳转到后台主页
      this.$router.push("/home");
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.login {
  margin-top: 300px;
}
</style>
