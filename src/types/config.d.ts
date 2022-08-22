import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '@/enums/menuEnum';
import {
  ContentEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '@/enums/appEnum';

import { CacheTypeEnum } from '@/enums/cacheEnum';

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

export interface LocaleSetting {
  showPicker: boolean;
  // Current language
  locale: LocaleType;
  // default language
  fallback: LocaleType;
  // available Locales
  availableLocales: LocaleType[];
}

export interface TransitionSetting {
  //  Whether to open the page switching animation
  enable: boolean;
  // Route basic switching animation
  basicTransition: RouterTransitionEnum;
  // Whether to open page switching loading
  openPageLoading: boolean;
  // Whether to open the top progress bar
  openNProgress: boolean;
}

export interface ProjectConfig {
  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum;
  // Theme color
  themeColor: string;

  // Whether to display the logo
  showLogo: boolean;
  // Whether to show the global footer
  showFooter: boolean;
  // Animation configuration
  transitionSetting: TransitionSetting;
  // Show breadcrumbs
  showBreadCrumb: boolean;
  // Show breadcrumb icon
  showBreadCrumbIcon: boolean;
  // Whether to open back to top
  useOpenBackTop: boolean;
  // Is it possible to embed iframe pages
  canEmbedIFramePage: boolean;
  // Whether to delete unclosed messages and notify when switching the interface
  closeMessageOnSwitch: boolean;
  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  removeAllHttpPending: boolean;
}

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
  // 项目路径
  projectPath?: string;
}
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
  // 项目路径，用于代码生成
  VITE_PROJECT_PATH?: string;
}
