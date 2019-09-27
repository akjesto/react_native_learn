import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en.js'
import esp from './esp.js'

i18n.fallbacks = true;
i18n.translations = { en,esp };
i18n.locale = Localization.locale;

export {i18n};