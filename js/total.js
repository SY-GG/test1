// 여기 어디에선가 js가 돌아가므로 건드리지 말것...
window.CAFE24 = window.CAFE24 || {};
CAFE24.MANIFEST_CACHE_REVISION = "2212211162";
CAFE24.getDeprecatedNamespace = function (sDeprecatedNamespace, sSupersededNamespace) {
  var sNamespace = sSupersededNamespace ? sSupersededNamespace : sDeprecatedNamespace.replace(/^EC_/, "");
  return CAFE24[sNamespace];
};
CAFE24.FRONT_LANGUAGE_CODE = "ko_KR";
CAFE24.MOBILE = false;
CAFE24.MOBILE_DEVICE = false;
CAFE24.MOBILE_USE = true;
var EC_MOBILE = CAFE24.MOBILE;
var EC_MOBILE_DEVICE = CAFE24.MOBILE_DEVICE;
var EC_MOBILE_USE = CAFE24.MOBILE_USE;
CAFE24.SKIN_CODE = "skin2";
CAFE24.FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA = {
  common_member_id_crypt: "",
  common_member_email: false,
  common_member_zipcode: false,
  common_member_mobile: false,
};
var EC_FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA = CAFE24.getDeprecatedNamespace("EC_FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA");
CAFE24.SDE_SHOP_NUM = 1;
CAFE24.SHOP = {
  getLanguage: function () {
    return "ko_KR";
  },
  getCurrency: function () {
    return "KRW";
  },
  getFlagCode: function () {
    return "KR";
  },
  getTimezone: function () {
    return "Asia/Seoul";
  },
  getDateFormat: function () {
    return "Y-m-d";
  },
  isMultiShop: function () {
    return false;
  },
  isDefaultShop: function () {
    return true;
  },
  isDefaultLanguageShop: function (sLanguageCode) {
    return SHOP.isDefaultShop() && SHOP.isLanguageShop(sLanguageCode);
  },
  isKR: function () {
    return true;
  },
  isUS: function () {
    return false;
  },
  isJP: function () {
    return false;
  },
  isCN: function () {
    return false;
  },
  isTW: function () {
    return false;
  },
  isES: function () {
    return false;
  },
  isPT: function () {
    return false;
  },
  isVN: function () {
    return false;
  },
  isPH: function () {
    return false;
  },
  getCountryAndLangMap: function () {
    return {
      KR: "ko_KR",
      US: "en_US",
      JP: "ja_JP",
      CN: "zh_CN",
      TW: "zh_TW",
      VN: "vi_VN",
      PH: "en_PH",
    };
  },
  isLanguageShop: function (sLanguageCode) {
    return sLanguageCode === "ko_KR";
  },
  getDefaultShopNo: function () {
    return 1;
  },
  getProductVer: function () {
    return 2;
  },
  isSDE: function () {
    return true;
  },
  isMode: function () {
    return false;
  },
  getModeName: function () {
    return false;
  },
  isMobileAdmin: function () {
    return false;
  },
  isNewProMode: function () {
    return true;
  },
  isExperienceMall: function () {
    return false;
  },
  getAdminID: function () {
    return "";
  },
  getMallID: function () {
    return "qmrental";
  },
  getCurrencyFormat: function (sPriceTxt, bIsNumberFormat) {
    sPriceTxt = String(sPriceTxt);
    var aCurrencySymbol = ["", "\uc6d0", false];
    if (
      typeof CAFE24.SHOP_PRICE !== "undefined" &&
      isNaN(sPriceTxt.replace(/[,]/gi, "")) === false &&
      bIsNumberFormat === true
    ) {
      // bIsNumberFormat 사용하려면 Ui(':libUipackCurrency')->plugin('Currency') 화폐 라이브러리 추가 필요
      sPriceTxt = CAFE24.SHOP_PRICE.toShopPrice(sPriceTxt.replace(/[,]/gi, ""), true, CAFE24.SDE_SHOP_NUM);
    }
    try {
      var sPlusMinusSign = sPriceTxt.toString().substr(0, 1);
      if (sPlusMinusSign === "-" || sPlusMinusSign === "+") {
        sPriceTxt = sPriceTxt.toString().substr(1);
        return sPlusMinusSign + aCurrencySymbol[0] + sPriceTxt + aCurrencySymbol[1];
      } else {
        return aCurrencySymbol[0] + sPriceTxt + aCurrencySymbol[1];
      }
    } catch (e) {
      return aCurrencySymbol[0] + sPriceTxt + aCurrencySymbol[1];
    }
  },
};
CAFE24.CURRENCY_INFO = {
  getOriginReferenceCurrency: function () {
    return "USD";
  },
  getCurrencyList: function (sCurrencyCode) {
    var aCurrencyList = {
      JPY: {
        currency_symbol: "&yen;",
        decimal_place: 0,
        round_method_type: "F",
      },
      VND: {
        currency_symbol: "&#8363;",
        decimal_place: 0,
        round_method_type: "F",
      },
      PHP: {
        currency_symbol: "&#8369;",
        decimal_place: 2,
        round_method_type: "R",
      },
      USD: {
        currency_symbol: "$",
        decimal_place: 2,
        round_method_type: "R",
      },
      CNY: {
        currency_symbol: "&yen;",
        decimal_place: 2,
        round_method_type: "R",
      },
      TWD: {
        currency_symbol: "NT$",
        decimal_place: 0,
        round_method_type: "F",
      },
      EUR: {
        currency_symbol: "\u20ac",
        decimal_place: 2,
        round_method_type: "R",
      },
      BRL: {
        currency_symbol: "R$",
        decimal_place: 2,
        round_method_type: "R",
      },
      AUD: {
        currency_symbol: "A$",
        decimal_place: 2,
        round_method_type: "R",
      },
      BHD: {
        currency_symbol: ".&#1583;.&#1576;",
        decimal_place: 3,
        round_method_type: "R",
      },
      BDT: {
        currency_symbol: "&#2547;",
        decimal_place: 2,
        round_method_type: "R",
      },
      GBP: {
        currency_symbol: "&pound;",
        decimal_place: 2,
        round_method_type: "R",
      },
      CAD: {
        currency_symbol: "C$",
        decimal_place: 2,
        round_method_type: "R",
      },
      CZK: {
        currency_symbol: "K&#269;",
        decimal_place: 2,
        round_method_type: "R",
      },
      DKK: {
        currency_symbol: "kr",
        decimal_place: 2,
        round_method_type: "R",
      },
      HKD: {
        currency_symbol: "HK$",
        decimal_place: 2,
        round_method_type: "R",
      },
      HUF: {
        currency_symbol: "Ft",
        decimal_place: 2,
        round_method_type: "R",
      },
      INR: {
        currency_symbol: "&#8377;",
        decimal_place: 2,
        round_method_type: "R",
      },
      IDR: {
        currency_symbol: "Rp",
        decimal_place: 2,
        round_method_type: "R",
      },
      ILS: {
        currency_symbol: "&#8362;",
        decimal_place: 2,
        round_method_type: "R",
      },
      JOD: {
        currency_symbol: " &#1583;&#1610;&#1606;&#1575;&#1585;",
        decimal_place: 3,
        round_method_type: "R",
      },
      KWD: {
        currency_symbol: "&#1583;&#1610;&#1606;&#1575;&#1585;",
        decimal_place: 3,
        round_method_type: "R",
      },
      MYR: {
        currency_symbol: "RM",
        decimal_place: 2,
        round_method_type: "R",
      },
      MXN: {
        currency_symbol: "Mex$",
        decimal_place: 2,
        round_method_type: "R",
      },
      NZD: {
        currency_symbol: "NZ$",
        decimal_place: 2,
        round_method_type: "R",
      },
      NOK: {
        currency_symbol: "kr",
        decimal_place: 2,
        round_method_type: "R",
      },
      PKR: {
        currency_symbol: "&#8360;",
        decimal_place: 2,
        round_method_type: "R",
      },
      PLN: {
        currency_symbol: "z\u0142",
        decimal_place: 2,
        round_method_type: "R",
      },
      RUB: {
        currency_symbol: "\u0440\u0443\u0431",
        decimal_place: 2,
        round_method_type: "R",
      },
      SAR: {
        currency_symbol: "&#65020;",
        decimal_place: 2,
        round_method_type: "R",
      },
      SGD: {
        currency_symbol: "S$",
        decimal_place: 2,
        round_method_type: "R",
      },
      ZAR: {
        currency_symbol: "R",
        decimal_place: 2,
        round_method_type: "R",
      },
      SEK: {
        currency_symbol: "kr",
        decimal_place: 2,
        round_method_type: "R",
      },
      CHF: {
        currency_symbol: "Fr",
        decimal_place: 2,
        round_method_type: "R",
      },
      THB: {
        currency_symbol: "&#3647;",
        decimal_place: 2,
        round_method_type: "R",
      },
      TRY: {
        currency_symbol: "TL",
        decimal_place: 2,
        round_method_type: "R",
      },
      AED: {
        currency_symbol: "&#1601;&#1604;&#1587;",
        decimal_place: 2,
        round_method_type: "R",
      },
    };
    return aCurrencyList[sCurrencyCode];
  },
  isUseReferenceCurrency: function () {
    return false;
  },
};
CAFE24.COMMON_UTIL = {
  convertSslForString: function (sString) {
    return sString.replace(/http:/gi, "");
  },
  convertSslForHtml: function (sHtml) {
    return sHtml.replace(/((?:src|href)\s*=\s*['"])http:(\/\/(?:[a-z0-9\-_\.]+)\/)/gi, "$1$2");
  },
  getProtocol: function () {
    return "https";
  },
  moveSsl: function () {
    if (CAFE24.COMMON_UTIL.getProtocol() === "http") {
      var oLocation = jQuery(window.location);
      var sUrl = "https://" + oLocation.attr("host") + oLocation.attr("pathname") + oLocation.attr("search");
      window.location.replace(sUrl);
    }
  },
  setEcCookie: function (sKey, sValue, iExpire) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + iExpire);
    var setValue =
      escape(sValue) + "; domain=." + CAFE24.GLOBAL_INFO.getBaseDomain() + "; path=/;expires=" + exdate.toUTCString();
    document.cookie = sKey + "=" + setValue;
  },
};
CAFE24.SHOP_LIB_INFO = {
  getBankInfo: function () {
    var oBankInfo = "";
    $.ajax({
      type: "GET",
      url: "/exec/front/Shop/Bankinfo",
      dataType: "json",
      async: false,
      success: function (oResponse) {
        oBankInfo = oResponse;
      },
    });
    return oBankInfo;
  },
};
var EC_SDE_SHOP_NUM = CAFE24.SDE_SHOP_NUM;
var SHOP = CAFE24.getDeprecatedNamespace("SHOP");
var EC_COMMON_UTIL = CAFE24.getDeprecatedNamespace("EC_COMMON_UTIL");
var EC_SHOP_LIB_INFO = CAFE24.getDeprecatedNamespace("EC_SHOP_LIB_INFO");
var EC_CURRENCY_INFO = CAFE24.getDeprecatedNamespace("EC_CURRENCY_INFO");
CAFE24.ROOT_DOMAIN = "cafe24.com";
CAFE24.API_DOMAIN = "cafe24api.com";
CAFE24.TRANSLATE_LOG_STATUS = "F";
CAFE24.GLOBAL_INFO = (function () {
  var oData = {
    base_domain: "qmrental.cafe24.com",
    root_domain: "cafe24.com",
    api_domain: "cafe24api.com",
    is_global: false,
    is_global_standard: false,
    country_code: "KR",
    language_code: "ko_KR",
    admin_language_code: "ko_KR",
  };
  return {
    getBaseDomain: function () {
      return oData["base_domain"];
    },
    getRootDomain: function () {
      return oData["root_domain"];
    },
    getApiDomain: function () {
      return oData["api_domain"];
    },
    isGlobal: function () {
      return oData["is_global"];
    },
    isGlobalStandard: function () {
      return oData["is_global_standard"];
    },
    getCountryCode: function () {
      return oData["country_code"];
    },
    getLanguageCode: function () {
      return oData["language_code"];
    },
    getAdminLanguageCode: function () {
      return oData["admin_language_code"];
    },
  };
})();
var EC_ROOT_DOMAIN = CAFE24.ROOT_DOMAIN;
var EC_API_DOMAIN = CAFE24.API_DOMAIN;
var EC_TRANSLATE_LOG_STATUS = CAFE24.TRANSLATE_LOG_STATUS;
var EC_GLOBAL_INFO = CAFE24.getDeprecatedNamespace("EC_GLOBAL_INFO");
CAFE24.AVAILABLE_LANGUAGE = ["ko_KR", "zh_CN", "en_US", "zh_TW", "es_ES", "pt_PT", "vi_VN", "ja_JP", "en_PH"];
CAFE24.AVAILABLE_LANGUAGE_CODES = {
  ko_KR: "KOR",
  zh_CN: "CHN",
  en_US: "ENG",
  zh_TW: "TWN",
  es_ES: "ESP",
  pt_PT: "PRT",
  vi_VN: "VNM",
  ja_JP: "JPN",
  en_PH: "PHL",
};
var EC_AVAILABLE_LANGUAGE = CAFE24.AVAILABLE_LANGUAGE;
var EC_AVAILABLE_LANGUAGE_CODES = CAFE24.AVAILABLE_LANGUAGE_CODES;
CAFE24.GLOBAL_PRODUCT_LANGUAGE_CODES = {
  sClearanceCategoryCode: "",
  sManualLink: "//support.cafe24.com/hc/ko/articles/7739013909529",
  sHsCodePopupLink: "https://www.wcotradetools.org/en/harmonized-system",
  aCustomRegex: '"PHL" : "^[0-9]{8}[A-Z]?$"',
  sCountryCodeData: "kor",
  sEnglishExampleURlForGlobal: "",
  aReverseAddressCountryCode: ["VNM", "PHL"],
  aSizeGuideCountryAlign: '["US","UK","EU","KR","JP","CN"]',
  aIsSupportTran: ["ja_JP", "zh_CN", "zh_TW", "en_US", "vi_VN", "en_PH", "pt_PT", "es_ES"],
};
var EC_GLOBAL_PRODUCT_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_PRODUCT_LANGUAGE_CODES");
CAFE24.GLOBAL_ORDER_LANGUAGE_CODES = {
  aModifyOrderLanguage: {
    KR: "ko_KR",
    JP: "ja_JP",
    CN: "zh_CN",
    TW: "zh_TW",
    VN: "vi_VN",
    PH: "en_PH",
  },
  aUseIdCardKeyCountry: ["CN", "TW"],
  aLanguageWithCountryCode: {
    zh_CN: ["CN", "CHN", "HK", "HNK"],
    ja_JP: ["JP", "JPN"],
    zh_TW: ["TW", "TWN"],
    ko_KR: ["KR", "KOR"],
    vi_VN: ["VN", "VNM"],
    en_PH: ["PH", "PHL"],
  },
  aCheckDisplayRequiredIcon: ["ja_JP", "zh_CN", "zh_TW", "en_US", "vi_VN", "en_PH"],
  aSetReceiverName: {
    zh_CN: { sCountry: "CN", bUseLastName: true },
    zh_TW: { sCountry: "TW", bUseLastName: false },
    ja_JP: { sCountry: "JP", bUseLastName: true },
  },
  aSetDeferPaymethodLanguage: {
    ja_JP: "\uc77c\ubcf8",
    zh_CN: "\uc911\uad6d",
  },
  aUseDeferPaymethod: ["ja_JP", "zh_CN"],
  aCheckShippingCompanyAndPaymethod: ["ja_JP", "zh_CN"],
  aSetDeferPaymethodLanguageForShipping: {
    ja_JP: "\u65e5\u672c",
    zh_CN: "\uc911\uad6d",
  },
  aCheckStoreByPaymethod: ["ja_JP", "zh_CN"],
  aCheckIsEmailRequiredForJs: ["en_US", "zh_CN", "zh_TW", "ja_JP", "vi_VN", "en_PH"],
  aSetIdCardKeyCountryLanguage: {
    CN: "\uc911\uad6d\uc758",
    TW: "\ub300\ub9cc\uc758",
  },
  aReverseGlobalAddress: ["en_PH", "vi_VN", "PHL", "VNM", "VN", "PH"],
  aNoCheckZipCode: ["KOR", "JPN"],
  aNotPostCodeAPICountryList: ["en_US", "es_ES", "pt_PT", "en_PH"],
  aEnableSearchExchangeAddr: ["KR", "JP", "CN", "VN", "TW", "PH"],
  aDuplicatedBaseAddr: ["TW", "JP"],
  aReverseAddressCountryCode: ["VN", "PH"],
  aCheckZipCode: ["PHL", "en_PH", "PH"],
};
var EC_GLOBAL_ORDER_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_ORDER_LANGUAGE_CODES");
CAFE24.GLOBAL_MEMBER_LANGUAGE_CODES = {
  sAdminWebEditorLanguageCode: "ko",
  oNotAvailDecimalPointLanguages: ["ko_KR", "ja_JP", "zh_TW", "vi_VN"],
  oAddressCountryCode: {
    KOR: "ko_KR",
    JPN: "ja_JP",
    CHN: "zh_CN",
    TWN: "zh_TW",
    VNM: "vi_VN",
    PHL: "en_PH",
  },
};
var EC_GLOBAL_MEMBER_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_MEMBER_LANGUAGE_CODES");
CAFE24.GLOBAL_BOARD_LANGUAGE_CODES = {
  bUseLegacyBoard: true,
};
var EC_GLOBAL_BOARD_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_BOARD_LANGUAGE_CODES");
CAFE24.GLOBAL_MALL_LANGUAGE_CODES = {
  oDesign: {
    oDesignAddReplaceInfo: {
      group_id: "SKIN.ADD.ADMIN.DESIGNDETAIL",
      replacement: {
        KR: "KOREAN",
        US: "ENGLISH",
        JP: "JAPANESE",
        CN: "SIMPLIFIED.CHINESE",
        TW: "TRADITIONAL.CHINESE",
        ES: "SPANISH",
        PT: "PORTUGUESE",
        PH: "ENGLISH",
      },
    },
    oDesignDetailLanguageCountryMap: {
      KR: "ko_KR",
      JP: "ja_JP",
      CN: "zh_CN",
      TW: "zh_TW",
      US: "en_US",
      ES: "es_ES",
      PT: "pt_PT",
      PH: "en_PH",
    },
    oSmartDesignSwitchTipLink: {
      edibot: {
        img: "//img.echosting.cafe24.com/smartAdmin/img/design/img_editor_dnd.png",
        link: "//ecsupport.cafe24.com/board/free/list.html?board_act=list&board_no=12&category_no=9&cate_no=9",
      },
      smart: {
        img: "//img.echosting.cafe24.com/smartAdmin/img/design/ko_KR/img_editor_smart.png",
        link: "//sdsupport.cafe24.com",
      },
    },
    oSmartDesignDecoShopList: ["ko_KR", "ja_JP", "zh_CN", "en_US", "zh_TW", "es_ES", "pt_PT"],
    oSmartDesignDecoMultilingual: {
      list: {
        ko_KR: "KOREAN",
        en_US: "ENGLISH",
        ja_JP: "JAPANESE",
        zh_CN: "SIMPLIFIED.CHINESE",
        zh_TW: "TRADITIONAL.CHINESE",
        es_ES: "SPANISH",
        pt_PT: "PORTUGUESE",
        vi_VN: "VIETNAMESE",
      },
      group_id: "EDITOR.LAYER.EDITING.DECO",
    },
    aSmartDesignModuleShopList: ["ko_KR", "ja_JP", "zh_CN", "en_US", "zh_TW", "es_ES", "pt_PT"],
  },
  oStore: {
    oMultiShopCurrencyInfo: {
      en_US: { currency: "USD" },
      zh_CN: { currency: "USD", sub_currency: "CNY" },
      ja_JP: { currency: "JPY" },
      zh_TW: { currency: "TWD" },
      es_ES: { currency: "EUR" },
      pt_PT: { currency: "EUR" },
      ko_KR: { currency: "KRW" },
      vi_VN: { currency: "VND" },
      en_PH: { currency: "PHP" },
    },
    oBrowserRedirectLanguage: {
      ko: { primary: "ko_KR", secondary: "en_US" },
      en: {
        detail: {
          "en-ph": { primary: "en_PH", secondary: "en_US" },
          "en-us": { primary: "en_US", secondary: "es_ES" },
          default: { primary: "en_US", secondary: "es_ES" },
        },
      },
      ja: { primary: "ja_JP", secondary: "en_US" },
      zh: {
        detail: {
          "zh-cn": { primary: "zh_CN", secondary: "en_US" },
          "zh-tw": { primary: "zh_TW", secondary: "zh_CN" },
          default: { primary: "en_US", secondary: "ko_KR" },
        },
      },
      es: { primary: "es_ES", secondary: "en_US" },
      pt: { primary: "pt_PT", secondary: "en_US" },
      vi: { primary: "vi_VN", secondary: "en_US" },
      default: { primary: "en_US", secondary: "ko_KR" },
    },
    aChangeableLanguages: ["en_US", "vi_VN", "ja_JP", "ko_KR", "zh_TW", "th_TH"],
    aNoZipCodeLanguage: ["ko_KR", "ja_JP"],
  },
  oMobile: {
    sSmartWebAppFaqUrl: "https://support.cafe24.com/hc/ko/articles/8466586607641",
    sAmpFaqUrl:
      "https://ecsupport.cafe24.com/board/free/read.html?no=1864&board_no=5&category_no=13&cate_no=13&category_no=13&category_no=13",
  },
  oPromotion: {
    bQrCodeAvailable: true,
    bSnsMarketingAvailable: true,
  },
  oShippingReverseAddressLanguage: ["vi_VN", "en_PH"],
  oGlobalStandardSwitchHelpCodeLink: {
    "SH.DS": {
      link: "//serviceguide.cafe24shop.com/en_PH/SH.DS.html",
    },
    "PR.DS": {
      link: "//serviceguide.cafe24shop.com/en_PH/PR.DS.html",
    },
    "OR.SM.BO": {
      link: "//serviceguide.cafe24shop.com/en_PH/OR.SM.BO.html",
    },
    "DE.DS": {
      link: "//serviceguide.cafe24shop.com/en_PH/DE.DS.html",
    },
    "MB.DS": {
      link: "//serviceguide.cafe24shop.com/en_PH/MB.DS.html",
    },
    "PM.DS": {
      link: "//serviceguide.cafe24shop.com/en_PH/PM.DS.html",
    },
  },
  getAdminMainLocaleLanguage: function (sSkinLocaleCode) {
    var oLocaleData = [];
    var locale = "";
    var shopLangName = "";
    if (sSkinLocaleCode == "US") {
      locale = "en_US";
      shopLangName = "ENGLISH";
    } else if (sSkinLocaleCode == "JP") {
      locale = "ja_JP";
      shopLangName = "JAPANESE";
    } else if (sSkinLocaleCode == "CN") {
      locale = "zh_CN";
      shopLangName = "SIMPLIFIED.CHINESE";
    } else if (sSkinLocaleCode == "TW") {
      locale = "zh_TW";
      shopLangName = "TRADITIONAL.CHINESE";
    } else if (sSkinLocaleCode == "ES") {
      locale = "es_ES";
      shopLangName = "SPANISH";
    } else if (sSkinLocaleCode == "PT") {
      locale = "pt_PT";
      shopLangName = "PORTUGUESE";
    } else if (sSkinLocaleCode == "VN") {
      locale = "vi_VN";
      shopLangName = "VIETNAMESE";
    } else if (sSkinLocaleCode == "PH") {
      locale = "en_PH";
      shopLangName = "ENGLISH.PH";
    }
    oLocaleData["locale"] = locale;
    oLocaleData["shopLangName"] = shopLangName;
    return oLocaleData;
  },
};
var EC_GLOBAL_MALL_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_MALL_LANGUAGE_CODES");
CAFE24.GLOBAL_DATETIME_INFO = {
  oConstants: {
    STANDARD_DATE_REGEX: "/([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))/",
    IN_ZONE: "inZone",
    OUT_ZONE: "outZone",
    IN_FORMAT: "inFormat",
    OUT_FORMAT: "outFormat",
    IN_DATE_FORMAT: "inDateFormat",
    IN_TIME_FORMAT: "inTimeFormat",
    OUT_DATE_FORMAT: "outDateFormat",
    OUT_TIME_FORMAT: "outTimeFormat",
    IN_FORMAT_DATE_ONLY: 1,
    IN_FORMAT_TIME_ONLY: 2,
    IN_FORMAT_ALL: 3,
    OUT_FORMAT_DATE_ONLY: 1,
    OUT_FORMAT_TIME_ONLY: 2,
    OUT_FORMAT_ALL: 3,
    DATE_ONLY: "YYYY-MM-DD",
    TIME_ONLY: "HH:mm:ss",
    FULL_TIME: "YYYY-MM-DD HH:mm:ss",
    ISO_8601: "YYYY-MM-DD[T]HH:mm:ssZ",
    YEAR_ONLY: "YYYY",
    MONTH_ONLY: "MM",
    DAY_ONLY: "DD",
    WEEK_ONLY: "e",
    TIME_H_I_ONLY: "HH:mm",
    TIME_HOUR_ONLY: "HH",
    TIME_MINUTE_ONLY: "mm",
    POSTGRE_FULL_TIME: "YYYY-MM-DD HH24:MI:SS",
    POSTGRE_TIME_ONLY: " HH24:MI:SS",
    MICRO_SECOND_ONLY: "u",
    SEOUL: "Asia/Seoul",
    TOKYO: "Asia/Tokyo",
    SHANGHAI: "Asia/Shanghai",
    TAIPEI: "Asia/Taipei",
    HANOI: "Asia/Bangkok",
    LOS_ANGELES: "America/Los_Angeles",
    LISBON: "Europe/Lisbon",
    MADRID: "Europe/Madrid",
    SINGAPORE: "Asia/Singapore",
    UTC: "Etc/UTC",
    MAX_DATETIME: "9999-12-31 23:59:59",
  },
  oOptions: {
    inZone: "Asia/Seoul",
    inFormat: "YYYY-MM-DD HH:mm:ss",
    inDateFormat: "YYYY-MM-DD",
    inTimeFormat: "HH:mm:ss",
    outZone: "Asia/Seoul",
    outFormat: "YYYY-MM-DD HH:mm:ss",
    outDateFormat: "YYYY-MM-DD",
    outTimeFormat: "HH:mm:ss",
  },
  oPolicies: {
    shop: {
      outZone: "Asia/Seoul",
      outFormat: "YYYY-MM-DD HH:mm:ss",
      outDateFormat: "YYYY-MM-DD",
      outTimeFormat: "HH:mm:ss",
    },
  },
  sOverrideTimezone: "",
  sMomentNamespace: "EC_GLOBAL_MOMENT",
};
CAFE24.FRONT_JS_CONFIG_MANAGE = {
  sSmartBannerScriptUrl: "https://app4you.cafe24.com/SmartBanner/tunnel/scriptTags?vs=1563164396689206",
  sMallId: "qmrental",
  sDefaultAppDomain: "https://app4you.cafe24.com",
  sWebLogOffFlag: "F",
};
var EC_FRONT_JS_CONFIG_MANAGE = CAFE24.getDeprecatedNamespace("EC_FRONT_JS_CONFIG_MANAGE");
CAFE24.FRONT_JS_CONFIG_MEMBER = {
  sAuthUrl: "https://i-pin.cafe24.com/certify/1.0/?action=auth",
};
var EC_FRONT_JS_CONFIG_MEMBER = CAFE24.getDeprecatedNamespace("EC_FRONT_JS_CONFIG_MEMBER");
CAFE24.FRONT_JS_CONFIG_SHOP = {
  bDirectBuyOrderForm: false,
  bECUseItemSalePrice: false,
  sCouponDownloadPage: "/coupon/coupon_productdetail.html",
  aOptionColorchip: { "#000000": "" },
  aProductPurchaseInfo_269: {
    bIsSuccess: true,
    sMessage: "",
    bReplaceLoginPage: false,
    bIsDisplayPurchaseButton: true,
  },
};
var EC_FRONT_JS_CONFIG_SHOP = CAFE24.getDeprecatedNamespace("EC_FRONT_JS_CONFIG_SHOP");
typeof window.CAFE24 === "undefined" && (window.CAFE24 = {});
CAFE24.FRONTEND = {
  FW_MANIFEST_CACHE_REVISION: 2212211162,
  IS_WEB_VIEW: "F",
};
CAFE24.ROUTE = {
  is_mobile: false,
  is_need_route: false,
  language_code: "ZZ",
  path: {
    origin: "/product/rental.html",
    result: "/product/rental.html",
    prefix: "",
  },
  shop_no: 0,
  skin_code: "default",
  support_language_list: {
    ar: "ar_EG",
    "ar-EG": "ar_EG",
    de: "de_DE",
    "de-DE": "de_DE",
    en: "en_US",
    "en-IN": "en_IN",
    "en-PH": "en_PH",
    "en-US": "en_US",
    es: "es_ES",
    "es-ES": "es_ES",
    hi: "hi_IN",
    "hi-IN": "hi_IN",
    id: "id_ID",
    "id-ID": "id_ID",
    it: "it_IT",
    "it-IT": "it_IT",
    ja: "ja_JP",
    "ja-JP": "ja_JP",
    ko: "ko_KR",
    "ko-KR": "ko_KR",
    ms: "ms_MY",
    "ms-MY": "ms_MY",
    pt: "pt_PT",
    "pt-PT": "pt_PT",
    ru: "ru_RU",
    "ru-RU": "ru_RU",
    th: "th_TH",
    "th-TH": "th_TH",
    tr: "tr_TR",
    "tr-TR": "tr_TR",
    vi: "vi_VN",
    "vi-VN": "vi_VN",
    zh: "zh_CN",
    "zh-CN": "zh_CN",
    "zh-HK": "zh_HK",
    "zh-MO": "zh_MO",
    "zh-SG": "zh_SG",
    "zh-TW": "zh_TW",
  },
};

//없어도 돌아가는 듯한 js
window.jq_360 = $.noConflict(true);
//let workDays = [];
(function ($, window, document, undefined) {
  $(document).ready(function () {
    $('a[href="#"]').click(function (ignore) {
      ignore.preventDefault();
    });

    $('a[href="#none"]').click(function (ignore) {
      ignore.preventDefault();
    });

    let workDays = [];

    // 영업일 open
    // this.isWorkDay = "";

    /* DatePicker START*/
    $.datepicker.setDefaults({
      dateFormat: "yy-mm-dd",
      prevText: "이전 달",
      nextText: "다음 달",
      monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      dayNames: ["일", "월", "화", "수", "목", "금", "토"],
      dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      showMonthAfterYear: true,
      yearSuffix: "년",
      beforeShowDay: function (date) {
        var mm = date.getMonth(),
          dd = date.getDate(),
          yyyy = date.getFullYear();
        var workDays = sessionStorage.getItem("workDays").split(",");
        if ($.inArray(yyyy + "-" + (mm + 1) + "-" + dd, workDays) != -1) {
          return [true];
        } else {
          return [false];
        }
      },
      beforeShow: function () {
        // 파라메터 받기
        let param = new URLSearchParams(window.location.search);

        var params = {
          product_no: param.get("prdtCd"),
          address: $("#address_addr1").val(),
          zipcode: $("#address_zip1").val(),
        };
        //설치정보

        //if(isEmpty(params.product_no)) alert("제품정보가 없습니다."); return false;
        //if(isEmpty(params.address)) alert("설치정보 주소는 필수 입력사항입니다."); $("#address_zip1").focus(); return false;
        //alert(JSON.stringify(params));

        //달력 오픈전 영업일 조회
        $.ajax({
          crossOrigin: true,
          url: "https://if.hdquming.com/api/v1/hdq/retrieveRemoteDayCalendar",
          data: JSON.stringify(params), // 전송할 데이터
          type: "post",
          async: false,
          contentType: "application/json;charset=utf8",
          success: function (data) {
            //console.log(data);
            if (data.resultCd == "0000") {
              //성공
              //결합할인
              sessionStorage.setItem(
                "workDays",
                data.rtnVal
                  .replaceAll("[", "")
                  .replaceAll('"}]', "")
                  .replaceAll('{"DAY":"', "")
                  .replaceAll('"}', "")
                  .replaceAll("-0", "-")
              );
            }
          },

          error: function (data) {
            console.log(data);
          },
        }); //ajax 호출 끝
      },
    }); // document ready

    if ($("#hopedate").length == 1) {
      let hope = document.getElementById("hopedate");

      hope.addEventListener("click", function (event) {
        var addr_chk = $("#address_addr1").val();

        $(".addr_test").text(addr_chk);

        if ($("#address_addr1").val() == "") {
          $("#hopedate").datepicker("destroy");
          alert("영업점 영업일을 조회하기 위해 주소를 입력해주세요.");
        } else {
          $("#hopedate").datepicker({ minDate: 0 });
        }
      });
    }

    /* DatePicker END */

    // 검색 레이어
    let btnSearch = document.querySelector(".search_btn");
    let searchBox = document.querySelector(".search_box");
    let searchClose = document.querySelector(".search_close");

    // 검색 - 레이어 열기
    $(".search_btn").click(function () {
      $(".search_box").toggleClass("active");
    });

    // 검색 - 레이어 닫기
    searchClose.onclick = function () {
      searchBox.classList.remove("active");
    };

    const relationSwiper = new Swiper(".relation-swiper", {
      loop: false,
      loopAdditionalSlides: 1,
      slidesPerView: "auto",
      ally: true,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".relation-r",
        prevEl: ".relation-l",
      },
    });

    const listImgSwiper = new Swiper(".listImg-swiper", {
      direction: "vertical",
      loopAdditionalSlides: 1,
      slidesPerView: "auto",
      spaceBetween: 10,
      ally: true,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".list-right",
        prevEl: ".list-left",
      },
    });
  });

  var leftInit = $("header").offset().left;
  $(window).scroll(function (event) {
    var x = 0 - $(this).scrollLeft();
    $("header").offset({ left: x + leftInit });
  });

  var cardDateNum = document.getElementById("card_date");
  if ($("#card_date").length > 0) {
    cardDateNum.onkeyup = function () {
      this.value = validityFormat(this.value);
    };
  }
})(window.jq_360, window, document);

function validityFormat(str) {
  str = str.replace(/[^0-9]/g, "");
  var tmp = "";
  if (str.length < 3) {
    return str;
  } else {
    tmp += str.substr(0, 2);
    tmp += "/";
    tmp += str.substr(2);
    return tmp;
  }
  return str;
}
// HereStart

// gfa
document.addEventListener("DOMContentLoaded", function () {
  EC_PlusAppBridge.setBridgeFunction();
});
var gfa_cate = "";
var gfa_cate1 = "제품";
var gfa_cate2 = "정수기";
var gfa_cate3 = "직수정수기";
if (gfa_cate1 != "") gfa_cate = gfa_cate1;
if (gfa_cate2 != "") gfa_cate = gfa_cate2;
if (gfa_cate3 != "") gfa_cate = gfa_cate3;
document.addEventListener("DOMContentLoaded", function () {
  var oDataGfaDetail = {
    type: "view_item",
    raw_data: {
      currency: SHOP.getCurrency(),
      items: {
        item_name: "더슬림 베이직",
        item_category: gfa_cate,
      },
      value: 756000,
    },
  };
  EC_PlusAppBridge.sendBridgeData(oDataGfaDetail);
});

// 중요해보이넌 js
CAFE24.MOBILE_WEB = false;
var mobileWeb = CAFE24.MOBILE_WEB;
try {
  var isUseLoginKeepingSubmit = false;
  // isSeqNoKeyExpiretime
  function isSeqNoKeyExpiretime(iExpiretime) {
    var sDate = new Date();
    var iNow = Math.floor(sDate.getTime() / 1000);
    // 유효시간 확인
    if (iExpiretime > iNow) {
      return false;
    }
    return true;
  }
  function isUseLoginKeeping() {
    // 디바이스 확인
    if (EC_MOBILE_DEVICE === false) {
      return;
    }
    // 로그인 여부
    if (sessionStorage.getItem("member_" + CAFE24.SDE_SHOP_NUM) !== null) {
      return;
    }
    var sLoginKeepingInfo = localStorage.getItem("use_login_keeping_info");
    var iSeqnoExpiretime;
    var iSeqNoKey;
    if (sLoginKeepingInfo == null) {
      iSeqnoExpiretime = localStorage.getItem("seq_no_key_expiretime");
      iSeqNoKey = localStorage.getItem("seq_no_key");
      // 유효시간, key 값 확인
      if (iSeqnoExpiretime === null || iSeqNoKey === null) {
        return;
      }
    } else {
      var oLoginKeepingInfo = JSON.parse(sLoginKeepingInfo);
      iSeqNoKey = oLoginKeepingInfo.seq_no_key;
      iSeqnoExpiretime = oLoginKeepingInfo.seq_no_key_expiretime;
      if (isNaN(iSeqNoKey) === true || isNaN(iSeqnoExpiretime) === true) {
        return;
      }
    }
    if (isSeqNoKeyExpiretime(iSeqnoExpiretime) === false) {
      return;
    }
    useLoginKeepingSubmit();
  }
  function findGetParamValue(paramKey) {
    var result = null,
      tmp = [];
    location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === paramKey) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }
  function useLoginKeepingSubmit() {
    var iSeqnoExpiretime;
    var iSeqNoKey;
    var sUseLoginKeepingIp;
    var sLoginKeepingInfo = localStorage.getItem("use_login_keeping_info");
    if (sLoginKeepingInfo == null) {
      iSeqnoExpiretime = localStorage.getItem("seq_no_key_expiretime");
      iSeqNoKey = localStorage.getItem("seq_no_key");
    } else {
      var oLoginKeepingInfo = JSON.parse(sLoginKeepingInfo);
      iSeqNoKey = oLoginKeepingInfo.seq_no_key;
      iSeqnoExpiretime = oLoginKeepingInfo.seq_no_key_expiretime;
      sUseLoginKeepingIp = oLoginKeepingInfo.use_login_keeping_ip;
    }
    var oForm = document.createElement("form");
    oForm.method = "post";
    oForm.action = "/exec/front/member/LoginKeeping";
    document.body.appendChild(oForm);
    var oSeqNoObj = document.createElement("input");
    oSeqNoObj.name = "seq_no_key";
    oSeqNoObj.type = "hidden";
    oSeqNoObj.value = iSeqNoKey;
    oForm.appendChild(oSeqNoObj);
    oSeqNoObj = document.createElement("input");
    oSeqNoObj.name = "seq_no_key_expiretime";
    oSeqNoObj.type = "hidden";
    oSeqNoObj.value = iSeqnoExpiretime;
    oForm.appendChild(oSeqNoObj);
    var returnUrl = findGetParamValue("returnUrl");
    if (returnUrl == "" || returnUrl == null) {
      returnUrl = location.pathname + location.search;
    }
    oSeqNoObj = document.createElement("input");
    oSeqNoObj.name = "returnUrl";
    oSeqNoObj.type = "hidden";
    oSeqNoObj.value = returnUrl;
    oForm.appendChild(oSeqNoObj);
    if (sUseLoginKeepingIp != undefined) {
      oSeqNoObj = document.createElement("input");
      oSeqNoObj.name = "use_login_keeping_ip";
      oSeqNoObj.type = "hidden";
      oSeqNoObj.value = sUseLoginKeepingIp;
      oForm.appendChild(oSeqNoObj);
    }
    oForm.submit();
    isUseLoginKeepingSubmit = true;
  }
  isUseLoginKeeping();
} catch (e) {}
var bUseElastic = true;
var sSearchBannerUseFlag = "F";
if (typeof CAFE24.SHOP_FRONT_NEW_LIKE_COMMON !== "undefined") {
  CAFE24.SHOP_FRONT_NEW_LIKE_COMMON.init({
    bIsUseLikeProduct: false,
    bIsUseLikeCategory: false,
  });
}
if (typeof CAFE24.SHOP_FRONT_REVIEW_TALK_REVIEW_COUNT !== "undefined") {
  CAFE24.SHOP_FRONT_REVIEW_TALK_REVIEW_COUNT.bIsReviewTalk = "F";
}
var bIsDisplaySoldoutOption = true;
var aSoldoutDisplay = { 269: "\ud488\uc808" };
var aReserveStockMessage = {
  show_stock_message: "F",
  Q: "[\uc7ac\uace0 : [:PRODUCT_STOCK:]\uac1c][\ub2f9\uc77c\ubc1c\uc1a1]",
  R: "[\uc7ac\uace0 : [:PRODUCT_STOCK:]\uac1c][\uc608\uc57d\uc8fc\ubb38]",
  N: "",
  stock_message_replace_name: "[:\uc218\ub7c9:]",
};
var product_min = "1";
var order_limit_type = "O";
var delvtype = "A";
CAFE24.SHOP_CURRENCY_INFO = {
  1: {
    aShopCurrencyInfo: {
      currency_code: "KRW",
      currency_no: "410",
      currency_symbol: "\uffe6",
      currency_name: "South Korean won",
      currency_desc: "\uffe6 \uc6d0 (\ud55c\uad6d)",
      decimal_place: 0,
      round_method_type: "F",
    },
    aShopSubCurrencyInfo: null,
    aBaseCurrencyInfo: {
      currency_code: "KRW",
      currency_no: "410",
      currency_symbol: "\uffe6",
      currency_name: "South Korean won",
      currency_desc: "\uffe6 \uc6d0 (\ud55c\uad6d)",
      decimal_place: 0,
      round_method_type: "F",
    },
    fExchangeRate: 1,
    fExchangeSubRate: null,
    aFrontCurrencyFormat: { head: "", tail: "\uc6d0" },
    aFrontSubCurrencyFormat: { head: "", tail: "" },
  },
};
var SHOP_CURRENCY_INFO = CAFE24.SHOP_CURRENCY_INFO;
var mileage_val = "0";
var mileage_generate_calc = "0";
var basket_type = "A0000";
var product_name = "더슬림 베이직";
var product_max_type = "T";
var has_option = "T";
var mileage_icon = "//img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_point.gif";
var mileage_icon_alt = "적립금";
var price_unit_head = "";
var price_unit_tail = "원";
var option_push_button = "F";
var product_image_tiny = "202209/ee41e66dc70acc09b9381f11566189de.png";
var is_adult_product = "F";
var is_individual_buy = "F";
var is_soldout_icon = "F";
var link_product_detail = "/product/더슬림-베이직/269/";
var sIsNonmemberLimit = "F";
var product_max = "1";
var buy_unit_type = "O";
var buy_unit = "1";
var product_price = "756000";
var product_price_content = "";
var is_selling_price = "S";
var product_price_mobile = "756000";
var mobile_dc_price = "";
var isMobileDcStatus = "F";
var product_price_ref = "";
var currency_disp_type = "P";
$.data(document, "SameImage", "F");
var _iPrdtPriceOrg = 687273;
var _iPrdtPriceTax = 68727;
var qrcode_class = "EC_Qrcode63a96d48cb481";
var sSocialUrl = "/exec/front/Product/Social/";
var sIsMileageDisplay = "F";
if (typeof CAFE24.SHOP_FRONT_NEW_OPTION_COMMON !== "undefined") {
  CAFE24.SHOP_FRONT_NEW_OPTION_COMMON.initObject();
}
if (typeof CAFE24.SHOP_FRONT_NEW_OPTION_BIND !== "undefined") {
  CAFE24.SHOP_FRONT_NEW_OPTION_BIND.initChooseBox();
}
if (typeof CAFE24.SHOP_FRONT_NEW_OPTION_DATA !== "undefined") {
  CAFE24.SHOP_FRONT_NEW_OPTION_DATA.initData();
}
var sMileageUnit = "[:PRICE:]P";
var sIsDisplayNonmemberPrice = "F";
var sNonmemberPrice = "-";
if (typeof ImageAction !== "undefined") {
  ImageAction.sUseAddimageAction = "C";
}
var iProductNo = "269";
var iCategoryNo = "0";
var iDisplayGroup = "";
var option_msg = "필수 옵션을 선택해 주세요.";
var sLoginURL = "login.html";
var bPrdOptLayer = "";
var sOptionType = "T";
var option_type = "T";
var option_name_mapper = "색상#$%조리수 설치";
var option_stock_data =
  '{"P00000KJ000D":{"stock_price":"0.00","use_stock":false,"use_soldout":"F","is_display":"T","is_selling":"T","option_price":756000,"option_name":"\\uc0c9\\uc0c1#$%\\uc870\\ub9ac\\uc218 \\uc124\\uce58","option_value":"\\ube14\\ub799-\\uc870\\ub9ac\\uc218 \\ubbf8\\uc124\\uce58","stock_number":0,"option_value_orginal":["\\ube14\\ub799","\\uc870\\ub9ac\\uc218 \\ubbf8\\uc124\\uce58"],"use_stock_original":"F","use_soldout_original":"F","use_soldout_today_delivery":"F","is_auto_soldout":"F","is_mandatory":"T","option_id":"000D","is_reserve_stat":"N","item_image_file":null,"origin_option_added_price":"0.00"},"P00000KJ000E":{"stock_price":"25000.00","use_stock":false,"use_soldout":"F","is_display":"T","is_selling":"T","option_price":781000,"option_name":"\\uc0c9\\uc0c1#$%\\uc870\\ub9ac\\uc218 \\uc124\\uce58","option_value":"\\ube14\\ub799-\\uc870\\ub9ac\\uc218 \\uc124\\uce58","stock_number":0,"option_value_orginal":["\\ube14\\ub799","\\uc870\\ub9ac\\uc218 \\uc124\\uce58"],"use_stock_original":"F","use_soldout_original":"F","use_soldout_today_delivery":"F","is_auto_soldout":"F","is_mandatory":"T","option_id":"000E","is_reserve_stat":"N","item_image_file":null,"origin_option_added_price":"25000.00"}}';
var stock_manage = "";
var option_value_mapper =
  '{"\\ube14\\ub799#$%\\uc870\\ub9ac\\uc218 \\ubbf8\\uc124\\uce58":"P00000KJ000D","\\ube14\\ub799#$%\\uc870\\ub9ac\\uc218 \\uc124\\uce58":"P00000KJ000E"}';
var item_count = "2";
var item_listing_type = "S";
var product_option_price_display = "T";
var add_option_name = "";
$(function () {
  CAFE24.FRONT_NEW_PRODUCT_LAZYLOAD.resetDetailContent();
});
$(function () {
  CAFE24.FRONT_NEW_PRODUCT_LAZYLOAD.resetDetailContent();
});
var bIsDisplaySoldoutOption = true;
var aSoldoutDisplay = { 269: "\ud488\uc808", 204: "\ud488\uc808" };
var sOptionValueMapper204 =
  '{"\\ub274\\ud2b8\\ub7f4 \\ubca0\\uc774\\uc9c0#$%\\uc870\\ub9ac\\uc218 \\ubbf8\\uc124\\uce58":"P00000HW000F","\\ub274\\ud2b8\\ub7f4 \\ubca0\\uc774\\uc9c0#$%\\uc870\\ub9ac\\uc218 \\uc124\\uce58":"P00000HW000G"}';
var relation_product = '{"204":{"buy_unit":1,"product_min":1,"product_max":1}}';
var aLogData = {
  log_server1: "eclog2-225.cafe24.com",
  log_server2: "elg-db-svcm-277.cafe24.com",
  mid: "qmrental",
  stype: "e",
  domain: "",
  shop_no: "1",
  lang: "ko_KR",
  ver: 2,
  hash: "ae6441352fb53648a1a58aef84d5b01f",
  ca: "js/cfa-js.cafe24.com/cfa.js",
  etc: "",
};
var sMileageName = "포인트";
var sMileageUnit = "[:PRICE:]P";
var sDepositName = "예치금";
var sDepositUnit = "원";
var EC_ASYNC_LIVELINKON_ID = "";
if (EC$("[async_section=before]").length > 0) {
  EC$("[async_section=before]").addClass("displaynone");
}
CAFE24.APPSCRIPT_ASSIGN_DATA = CAFE24.APPSCRIPT_ASSIGN_DATA || [
  {
    src: "https://if.hdquming.com/resources/static/js/cafe24.js?vs=20221026095434.1&client_id=gyLzoDlsA5AvMjOUyCkDwC",
    integrity: "sha384-r38BFxSKF5bJyxA4Ma0IiQBjJhIpN5bACGl/vMsQ2l7hXgkDYQtgg8iJTjv6YGUS",
  },
  {
    src: "https://live24.app/cafe24/all_inc_pack/a34f0fb5456830f907f58e1075a6ccbd.js?vs=20221013155703.1&client_id=QFf0CgssYa4YTLAyyi7hJC",
  },
];
CAFE24.APPSCRIPT_SDK_DATA = CAFE24.APPSCRIPT_SDK_DATA || [
  "category",
  "product",
  "collection",
  "supply",
  "personal",
  "order",
  "customer",
  "promotion",
  "application",
  "privacy",
  "design",
  "notification",
  "store",
  "community",
  "shipping",
];
var EC_APPSCRIPT_ASSIGN_DATA = CAFE24.getDeprecatedNamespace("EC_APPSCRIPT_ASSIGN_DATA");
var EC_APPSCRIPT_SDK_DATA = CAFE24.getDeprecatedNamespace("EC_APPSCRIPT_SDK_DATA");
