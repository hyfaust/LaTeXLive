const mergeConfig = (target, source) => {
  Object.keys(source).forEach((key) => {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (
      sourceValue &&
      typeof sourceValue === "object" &&
      !Array.isArray(sourceValue) &&
      targetValue &&
      typeof targetValue === "object" &&
      !Array.isArray(targetValue)
    ) {
      mergeConfig(targetValue, sourceValue);
      return;
    }

    target[key] = sourceValue;
  });

  return target;
};

const RuntimeConfig = window.__LATEXLIVE_RUNTIME_CONFIG__ || {};
const Environment = RuntimeConfig.Environment || "development";

const Config = mergeConfig({
  development: {
    Version: "development-" + new Date().getTime(),
    MainJS: {
      latex: "/publish/latex.bundle.min.js",
      readme: "/publish/readme.bundle.min.js",
      update: "/publish/update.bundle.min.js",
      messageboard: "/publish/messageboard.bundle.min.js",
      login: "/publish/login.bundle.min.js",
      personal: "/publish/personal.bundle.min.js",
    },
    Boot_OSS: "..",
    WebAPI: {
      Root: "https://www.latexlive.com:5002/api/",
      // Root: "http://192.168.1.105:5001/api/",
      // Root: "http://localhost:5000/api/",
      Controller: {
        GetLaTexFromMathPix: "Mathpix/GetLaTexFromMathPix",
        LoginByMyToken: "Client/LoginByMyToken",
        LoginByAccount: "Client/LoginByAccount",
        RegByAccount: "Client/RegByAccount",
        UpdateUser: "Client/UpdateUser",
        DeleteUser: "Client/DeleteUser",
        LoginByWX: "Client/LoginByWX",
        WXBind: "Client/WXBind",
        LoginByMessage: "Client/LoginByMessage",
        SendMessageCode_Identity: "Client/SendMessageCode_Identity",
        SendMessageCode_Login: "Client/SendMessageCode_Login",
        GetRemainTime: "Client/GetRemainTime",
      },
    },
    Hostname: "192.168.1.105",
    Analytics: {
      GoogleUA: "",
    },
    WXLogin: {
      AppID: "",
      RedirectURL: "https://www.latexlive.com",
    },
  },

  debug: {
    Version: "debug-" + new Date().getTime(),
    MainJS: {
      latex: "/publish/latex.bundle.min.js",
      readme: "/publish/readme.bundle.min.js",
      update: "/publish/update.bundle.min.js",
      messageboard: "/publish/messageboard.bundle.min.js",
      login: "/publish/login.bundle.min.js",
      personal: "/publish/personal.bundle.min.js",
    },
    Boot_OSS: ".",
    WebAPI: {
      Root: "https://www.latexlive.com:5002/api/",
      Controller: {
        GetLaTexFromMathPix: "Mathpix/GetLaTexFromMathPix",
        LoginByMyToken: "Client/LoginByMyToken",
        LoginByAccount: "Client/LoginByAccount",
        RegByAccount: "Client/RegByAccount",
        UpdateUser: "Client/UpdateUser",
        DeleteUser: "Client/DeleteUser",
        LoginByWX: "Client/LoginByWX",
        WXBind: "Client/WXBind",
        LoginByMessage: "Client/LoginByMessage",
        SendMessageCode_Identity: "Client/SendMessageCode_Identity",
        SendMessageCode_Login: "Client/SendMessageCode_Login",
        GetRemainTime: "Client/GetRemainTime",
      },
    },
    Hostname: "https://www.latexlive.com:444",
    Analytics: {
      GoogleUA: "",
    },
    WXLogin: {
      AppID: "",
      RedirectURL: "https://www.latexlive.com",
    },
  },

  release: {
    Version: "1.6.4",
    MainJS: {
      latex: "/publish/latex.bundle.min.js",
      readme: "/publish/readme.bundle.min.js",
      update: "/publish/update.bundle.min.js",
      messageboard: "/publish/messageboard.bundle.min.js",
      login: "/publish/login.bundle.min.js",
      personal: "/publish/personal.bundle.min.js",
    },
    Boot_OSS: "../",
    WebAPI: {
      Root: "https://www.latexlive.com:5002/api/",
      Controller: {
        GetLaTexFromMathPix: "Mathpix/GetLaTexFromMathPix",
        LoginByMyToken: "Client/LoginByMyToken",
        LoginByAccount: "Client/LoginByAccount",
        RegByAccount: "Client/RegByAccount",
        UpdateUser: "Client/UpdateUser",
        DeleteUser: "Client/DeleteUser",
        LoginByWX: "Client/LoginByWX",
        WXBind: "Client/WXBind",
        LoginByMessage: "Client/LoginByMessage",
        SendMessageCode_Identity: "Client/SendMessageCode_Identity",
        SendMessageCode_Login: "Client/SendMessageCode_Login",
        GetRemainTime: "Client/GetRemainTime",
      },
    },
    Hostname: "https://www.latexlive.com",
    Analytics: {
      GoogleUA: "",
    },
    WXLogin: {
      AppID: "",
      RedirectURL: "https://www.latexlive.com",
    },
  },
}, RuntimeConfig.Config || {});
