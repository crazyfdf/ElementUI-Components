<template>
  <div class='login'>
    <h1>普通登录组件</h1>
    <div class="account">
      <account-login :rule-form="ruleForm"
                     :rules="rules"
                     @submit="submit"
                     @errHandle="errHandle"></account-login>
    </div>
    <h1>短信验证码登录组件</h1>
    <div class="phone">
      <phone-login :rule-form="phoneForm"
                   @send="send"
                   @submit="submit"
                   @errHandle="errHandle"></phone-login>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {

  },
  props: {

  },
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            massage: '用户名不能为空',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 6,
            message: '用户名在2-6个字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '密码在6-15个字符之间',
            trigger: 'blur'
          }
        ]
      },
      phoneForm: {
        phone: '',
        code: ''
      }
    };

  },
  created () {

  },
  mounted () {

  },
  methods: {
    submit () {
      this.$message.success('提交成功')
    },
    errHandle () {
      this.$message.error('信息填写有误，请检查')
    },
    send () {
      this.$message.info('发送验证码成功成功')

    },


  },
};
</script>

<style scoped lang="scss">
.login {
  .account {
    width: 500px;
  }
  .phone {
    width: 500px;
  }
}
</style>
