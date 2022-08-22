<template>
  <div class="login-wrapper">
    <app-logo />
    <div class="app-title">{{ appTitle }}</div>

    <van-form ref="form" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="model.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="model.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button block type="primary" :loading="loading" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useGlobSetting } from '@/hooks/setting';
  import { useUserStore } from '@/store/modules/user';
  import { encryptByMd5 } from '@/utils/cipher';
  import { Toast } from 'vant';
  import AppLogo from '@/components/AppLogo/index.vue';

  export default defineComponent({
    name: 'Login',
    components: { AppLogo },
    setup() {
      const globSetting = useGlobSetting();
      const userStore = useUserStore();
      const loading = ref(false);
      const model = ref({
        username: '',
        password: '',
        rememberMe: false,
      });

      const onSubmit = () => {
        handleLogin();
      };

      async function handleLogin() {
        loading.value = true;
        try {
          const userInfo = await userStore.login({
            password: encryptByMd5(model.value.password.trim()),
            username: model.value.username.trim(),
            rememberMe: model.value.rememberMe,
          });
          if (userInfo) {
            Toast.success('登录成功');
          }
        } catch (e) {
        } finally {
          loading.value = false;
        }
      }

      return {
        appTitle: globSetting.title,
        loading,
        model,
        onSubmit,
      };
    },
  });
</script>

<style lang="less" scoped>
  @import 'Login.less';
</style>
