// @ts-nocheck
import {
  createIntl,
  IntlShape,
  MessageDescriptor,
} from '/Users/billeasysmacmini5/Desktop/TEST ant pro/node_modules/react-intl';
import { ApplyPluginsType } from 'umi';
import { event, LANG_CHANGE_EVENT } from './locale';
// @ts-ignore
import warning from '/Users/billeasysmacmini5/Desktop/TEST ant pro/node_modules/warning/warning.js';

import { plugin } from '../core/plugin';

export {
  createIntl,
};
export {
  FormattedDate,
  FormattedDateParts,
  FormattedDisplayName,
  FormattedHTMLMessage,
  FormattedList,
  FormattedMessage,
  FormattedNumber,
  FormattedNumberParts,
  FormattedPlural,
  FormattedRelativeTime,
  FormattedTime,
  FormattedTimeParts,
  IntlContext,
  IntlProvider,
  RawIntlProvider,
  createIntlCache,
  defineMessages,
  injectIntl,
  useIntl,
} from '/Users/billeasysmacmini5/Desktop/TEST ant pro/node_modules/react-intl';

let g_intl: IntlShape;

const useLocalStorage = true;

import enUS0 from 'antd/es/locale/en_US';
import idID0 from 'antd/es/locale/id_ID';
import jaJP0 from 'antd/es/locale/ja_JP';
import ptBR0 from 'antd/es/locale/pt_BR';
import zhCN0 from 'antd/es/locale/zh_CN';
import zhTW0 from 'antd/es/locale/zh_TW';

export const localeInfo: {[key: string]: any} = {
  'en-US': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/account/settings/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/dashboard/analysis/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/dashboard/monitor/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/editor/flow/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/editor/koni/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/editor/mind/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/exception/500/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/form/basic-form/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/form/step-form/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/result/fail/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/result/success/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/User/register-result/locales/en-US.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/User/register/locales/en-US.js')),
    },
    locale: 'en-US',
    antd: {
      ...enUS0,
    },
    momentLocale: '',
  },
  'id-ID': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/locales/id-ID.js')),
    },
    locale: 'id-ID',
    antd: {
      ...idID0,
    },
    momentLocale: 'id',
  },
  'ja-JP': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/locales/ja-JP.js')),
    },
    locale: 'ja-JP',
    antd: {
      ...jaJP0,
    },
    momentLocale: 'ja',
  },
  'pt-BR': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/dashboard/analysis/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/dashboard/monitor/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/exception/500/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/form/basic-form/locales/pt-BR.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/form/step-form/locales/pt-BR.js')),
    },
    locale: 'pt-BR',
    antd: {
      ...ptBR0,
    },
    momentLocale: 'pt-br',
  },
  'zh-CN': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/account/settings/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/dashboard/analysis/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/dashboard/monitor/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/editor/flow/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/editor/koni/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/editor/mind/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/exception/500/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/form/basic-form/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/form/step-form/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/result/fail/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/result/success/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/User/register-result/locales/zh-CN.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/User/register/locales/zh-CN.js')),
    },
    locale: 'zh-CN',
    antd: {
      ...zhCN0,
    },
    momentLocale: 'zh-cn',
  },
  'zh-TW': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/account/settings/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/dashboard/analysis/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/dashboard/monitor/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/exception/500/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/form/basic-form/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/form/step-form/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/result/fail/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/result/success/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/User/register-result/locales/zh-TW.js')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/billeasysmacmini5/Desktop/TEST ant pro/src/pages/User/register/locales/zh-TW.js')),
    },
    locale: 'zh-TW',
    antd: {
      ...zhTW0,
    },
    momentLocale: 'zh-tw',
  },
};

/**
 * ?????????????????????????????????
 * @param name ????????? key
 * @param messages ?????????????????????
 * @param extraLocale momentLocale, antd ?????????
 */
export const addLocale = (
  name: string,
  messages: Object,
  extraLocales: {
    momentLocale:string;
    antd:string
  },
) => {
  if (!name) {
    return;
  }
  // ????????????
  const mergeMessages = localeInfo[name]?.messages
    ? Object.assign({}, localeInfo[name].messages, messages)
    : messages;

  const { momentLocale, antd } = extraLocales || {};
  localeInfo[name] = {
    messages: mergeMessages,
    locale: name.split('-')?.join('-'),
    momentLocale: momentLocale,
    antd,
  };
};

/**
 * ??????????????? intl ?????????????????? node ?????????
 * @param locale ???????????????????????????
 * @param changeIntl ??????????????? g_intl
 * @returns IntlShape
 */
export const getIntl = (locale?: string, changeIntl?: boolean) => {
  // ??????????????? g_intl ?????????????????? setIntl ??????
  if (g_intl && !changeIntl && !locale) {
    return g_intl;
  }
  // ??????????????? localeInfo ???
  if (locale&&localeInfo[locale]) {
    return createIntl(localeInfo[locale]);
  }
  // ?????????????????????????????????
  warning(
    !locale||!!localeInfo[locale],
    `The current popular language does not exist, please check the locales folder!`,
  );
  // ?????? zh-CN
  if (localeInfo["zh-CN"]) return createIntl(localeInfo["zh-CN"]);

  // ????????????????????????????????????
  return createIntl({
    locale: "zh-CN",
    messages: {},
  });
};

/**
 * ??????????????? intl ?????????
 * @param locale ?????????key
 */
export const setIntl = (locale: string) => {
  g_intl = getIntl(locale, true);
};

/**
 * ???????????????????????????
 * @returns string
 */
export const getLocale = () => {
  const runtimeLocale = plugin.applyPlugins({
    key: 'locale',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  // runtime getLocale for user define
  if (typeof runtimeLocale?.getLocale === 'function') {
    return runtimeLocale.getLocale();
  }
  // please clear localStorage if you change the baseSeparator config
  // because changing will break the app
  const lang =
    typeof localStorage !== 'undefined' && useLocalStorage
      ? window.localStorage.getItem('umi_locale')
      : '';
  // support baseNavigator, default true
  let browserLang;
  const isNavigatorLanguageValid =
    typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  browserLang = isNavigatorLanguageValid
    ? navigator.language.split('-').join('-')
    : '';
  return lang || browserLang || "zh-CN";
};


/**
 * ???????????????????????????
 * @returns string
 */
export const getDirection = () => {
  const lang = getLocale();
  // array with all prefixs for rtl langueges ex: ar-EG , he-IL
  const rtlLangs = ['he', 'ar', 'fa', 'ku']
  const direction =  rtlLangs.filter(lng => lang.startsWith(lng)).length ? 'rtl' : 'ltr';
  return direction;
};

/**
 * ????????????
 * @param lang ????????? key
 * @param realReload ?????????????????????????????????
 * @returns string
 */
export const setLocale = (lang: string, realReload: boolean = true) => {
  const localeExp = new RegExp(`^([a-z]{2})-?([A-Z]{2})?$`);

  const runtimeLocale = plugin.applyPlugins({
    key: 'locale',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });

  const updater = () => {
    if (lang !== undefined && !localeExp.test(lang)) {
      // for reset when lang === undefined
      throw new Error('setLocale lang format error');
    }
    if (getLocale() !== lang) {
      if (typeof window.localStorage !== 'undefined' && useLocalStorage) {
        window.localStorage.setItem('umi_locale', lang || '');
      }
      setIntl(lang);
      if (realReload) {
        window.location.reload();
      } else {
        event.emit(LANG_CHANGE_EVENT, lang);
        // chrome ????????????????????????????????????????????????
        if (window.dispatchEvent) {
          const event = new Event('languagechange');
          window.dispatchEvent(event);
        }
      }
    }
  }

  if (typeof runtimeLocale?.setLocale === 'function') {
    runtimeLocale.setLocale({
      lang,
      realReload,
      updater: updater,
    });
    return;
  }

  updater();
};

let firstWaring = true;

/**
 * intl.formatMessage ????????????
 * @deprecated ????????? api ???????????????????????????????????????????????????????????? useIntl ??? injectIntl
 * @param descriptor { id : string, defaultMessage : string }
 * @param values { [key:string] : string }
 * @returns string
 */
export const formatMessage: IntlShape['formatMessage'] = (
  descriptor: MessageDescriptor,
  values: any,
) => {
  if (firstWaring) {
    warning(
      false,
      `Using this API will cause automatic refresh when switching languages, please use useIntl or injectIntl.

????????? api ???????????????????????????????????????????????????????????? useIntl ??? injectIntl???

http://j.mp/37Fkd5Q
      `,
    );
    firstWaring = false;
  }
  return g_intl.formatMessage(descriptor, values);
};

/**
 * ??????????????????
 * @returns string[]
 */
export const getAllLocales = () => Object.keys(localeInfo);
