<template> home </template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useGlobSetting } from '@/hooks/setting';
  import { useUserStore } from '@/store/modules/user';
  import { encryptByMd5 } from '@/utils/cipher';
  import { Toast } from 'vant';

  export default defineComponent({
    name: 'Login',
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
