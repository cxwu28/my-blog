import { getRelativeLocaleUrl } from "astro:i18n";
import config from "../../config/config.json";
import languagesJSON from "../../config/language.json";
const { default_language } = config.settings;

const locales: { [key: string]: any } = {};
const content: string = "menu"; // Change this to "skills" for skills configuration

// Load skills and dictionary dynamically
languagesJSON.forEach((language) => {
  const { languageCode } = language;
  import(`../../config/${content}.${languageCode}.json`).then((file) => {
    import(`../../i18n/${languageCode}.json`).then((dictionary) => {
      locales[languageCode] = { ...file, ...dictionary };
    });
  });
});

// Extract all languages from the locales object
const languages = Object.keys(locales);

// Export the locales and languages
export { languages, locales };

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  if (locales.hasOwnProperty(lang)) {
    return lang;
  }
  return default_language;
}

export const getTranslations = async (lang: string, content: string = "menu") => {
  const {
    default_language,
    disable_languages,
  }: { default_language: string; disable_languages: string[] } =
    config.settings;

  if (disable_languages.includes(lang)) {
    lang = default_language;
  }

  let language = languagesJSON.find((l) => l.languageCode === lang);

  if (!language) {
    lang = default_language;
    language = languagesJSON.find((l) => l.languageCode === default_language);
  }

  if (!language) {
    throw new Error("Default language not found");
  }

 let file;
  try {
    file = await import(`../../config/${content}.${lang}.json`);
  } catch (error) {
    file = await import(`../../config/${content}.${default_language}.json`);
  }
  return file.default;
};

const supportedLang = ["", ...languagesJSON.map((lang) => lang.languageCode)];
const disabledLanguages = config.settings.disable_languages as string[];

// Filter out disabled languages from supportedLang
const filteredSupportedLang = supportedLang.filter(
  (lang) => !disabledLanguages.includes(lang),
);

export { filteredSupportedLang as supportedLang };

export const slugSelector = (url: string, lang: string) => {
  const { default_language, default_language_in_subdir } = config.settings;
  const { trailing_slash } = config.site;

  let constructedUrl;

  // Determine the initial URL structure based on language
  if (url === "/") {
    constructedUrl = lang === default_language ? "/" : `/${lang}`;
  } else {
    constructedUrl = getRelativeLocaleUrl(lang, url, {
      normalizeLocale: false,
    });
  }

  // Add language path if necessary
  if (lang === default_language && default_language_in_subdir) {
    constructedUrl = `/${lang}${constructedUrl}`;
  }

  // Adjust for trailing slash
  if (trailing_slash) {
    if (!constructedUrl.endsWith("/")) {
      constructedUrl += "/";
    }
  } else {
    if (constructedUrl.endsWith("/") && constructedUrl !== "/") {
      constructedUrl = constructedUrl.slice(0, -1);
    }
  }

  return constructedUrl;
};
