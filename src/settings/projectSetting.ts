import type { ProjectConfig } from '#/config';
import { RouterTransitionEnum, SessionTimeoutProcessingEnum } from '@/enums/appEnum';

// ! 改动后需要清空浏览器缓存
const setting: ProjectConfig = {
  // 会话超时处理方案
  // SessionTimeoutProcessingEnum.ROUTE_JUMP: 路由跳转到登录页
  // SessionTimeoutProcessingEnum.PAGE_COVERAGE: 生成登录对话框，覆盖当前页面
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,

  // 项目主题色
  themeColor: '',

  // 是否显示logo
  showLogo: true,

  // 是否显示底部信息 copyright
  showFooter: false,

  // 动画配置
  transitionSetting: {
    //  是否开启切换动画
    enable: true,

    // 动画名
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // 是否打开页面切换loading
    openPageLoading: true,

    // 是否打开页面切换顶部进度条
    openNProgress: false,
  },

  // 显示面包屑
  showBreadCrumb: true,

  // 显示面包屑图标
  showBreadCrumbIcon: false,

  // 是否开启回到顶部
  useOpenBackTop: true,

  //  是否可以嵌入iframe页面
  canEmbedIFramePage: true,

  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: true,

  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: false,
};

export default setting;
