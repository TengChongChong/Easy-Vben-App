<template>
  <div class="exception-wrapper">
    <app-logo />

    <div class="error-code">
      {{ status || '404' }}
    </div>
    <div class="error-info">
      {{ subTitle || '资源不存在' }}
    </div>

    <router-link to="/">
      <van-button type="primary" size="small">返回首页</van-button>
    </router-link>
  </div>
</template>

<script lang="ts">
  import { ExceptionEnum } from '@/enums/exceptionEnum';
  import { defineComponent } from 'vue';
  import AppLogo from '@/components/AppLogo/index.vue';

  export default defineComponent({
    name: 'ExceptionPage',
    components: { AppLogo },
    props: {
      // 状态码
      status: {
        type: Number as PropType<number>,
        default: ExceptionEnum.PAGE_NOT_FOUND,
      },

      title: {
        type: String as PropType<string>,
        default: '',
      },

      subTitle: {
        type: String as PropType<string>,
        default: '',
      },

      full: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    setup() {
      return {};
    },
  });
</script>
<style lang="less" scoped>
  .exception-wrapper {
    padding-top: 120px;
    text-align: center;

    .error-code {
      margin-bottom: 1rem;
      font-size: 20px;
      font-weight: bold;
    }

    .error-info {
      font-size: 14px;
      color: #777;
    }
  }
</style>
