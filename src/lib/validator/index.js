import toInt from './functions/toInt'
import toBoolean from './functions/toBoolean'
import equals from './functions/equals'
import contains from './functions/contains'
import matches from './functions/matches'
import isEmail from './functions/isEmail'
import isURL from './functions/isURL'
import isMACAddress from './functions/isMACAddress'
import isIP from './functions/isIP'
import isIPRange from './functions/isIPRange'
import isFQDN from './functions/isFQDN'
import isDate from './functions/isDate'
import isBoolean from './functions/isBoolean'
import isLocale from './functions/isLocale'
import toFloat from './functions/toFloat'
import toDate from './functions/toDate'
import isAlpha, { locales as isAlphaLocales } from './functions/isAlpha'
import isAlphanumeric, { locales as isAlphanumericLocales } from './functions/isAlphanumeric'
import isNumeric from './functions/isNumeric'
import isPassportNumber from './functions/isPassportNumber'
import isPort from './functions/isPort'
import isLowercase from './functions/isLowercase'
import isUppercase from './functions/isUppercase'
import isIMEI from './functions/isIMEI'
import isAscii from './functions/isAscii'
import isFullWidth from './functions/isFullWidth'
import isHalfWidth from './functions/isHalfWidth'
import isVariableWidth from './functions/isVariableWidth'
import isMultibyte from './functions/isMultibyte'
import isSemVer from './functions/isSemVer'
import isSurrogatePair from './functions/isSurrogatePair'
import isInt from './functions/isInt'
import isFloat, { locales as isFloatLocales } from './functions/isFloat'
import isDecimal from './functions/isDecimal'
import isHexadecimal from './functions/isHexadecimal'
import isOctal from './functions/isOctal'
import isDivisibleBy from './functions/isDivisibleBy'
import isHexColor from './functions/isHexColor'
import isRgbColor from './functions/isRgbColor'
import isHSL from './functions/isHSL'
import isISRC from './functions/isISRC'
import isIBAN, { locales as ibanLocales } from './functions/isIBAN'
import isBIC from './functions/isBIC'
import isMD5 from './functions/isMD5'
import isHash from './functions/isHash'
import isJWT from './functions/isJWT'
import isJSON from './functions/isJSON'
import isEmpty from './functions/isEmpty'
import isLength from './functions/isLength'
import isByteLength from './functions/isByteLength'
import isUUID from './functions/isUUID'
import isMongoId from './functions/isMongoId'
import isAfter from './functions/isAfter'
import isBefore from './functions/isBefore'
import isIn from './functions/isIn'
import isCreditCard from './functions/isCreditCard'
import isIdentityCard from './functions/isIdentityCard'
import isEAN from './functions/isEAN'
import isISIN from './functions/isISIN'
import isISBN from './functions/isISBN'
import isISSN from './functions/isISSN'
import isTaxID from './functions/isTaxID'
import isMobilePhone, { locales as isMobilePhoneLocales } from './functions/isMobilePhone'
import isEthereumAddress from './functions/isEthereumAddress'
import isCurrency from './functions/isCurrency'
import isBtcAddress from './functions/isBtcAddress'
import isISO8601 from './functions/isISO8601'
import isRFC3339 from './functions/isRFC3339'
import isISO31661Alpha2 from './functions/isISO31661Alpha2'
import isISO31661Alpha3 from './functions/isISO31661Alpha3'
import isISO4217 from './functions/isISO4217'
import isBase32 from './functions/isBase32'
import isBase58 from './functions/isBase58'
import isBase64 from './functions/isBase64'
import isDataURI from './functions/isDataURI'
import isMagnetURI from './functions/isMagnetURI'
import isMimeType from './functions/isMimeType'
import isLatLong from './functions/isLatLong'
import isPostalCode, { locales as isPostalCodeLocales } from './functions/isPostalCode'
import ltrim from './functions/ltrim'
import rtrim from './functions/rtrim'
import trim from './functions/trim'
import escape from './functions/escape'
import unescape from './functions/unescape'
import stripLow from './functions/stripLow'
import whitelist from './functions/whitelist'
import blacklist from './functions/blacklist'
import isWhitelisted from './functions/isWhitelisted'
import normalizeEmail from './functions/normalizeEmail'
import isSlug from './functions/isSlug'
import isLicensePlate from './functions/isLicensePlate'
import isStrongPassword from './functions/isStrongPassword'
import isVAT from './functions/isVAT'

const validator = {
  toDate,
  toFloat,
  toInt,
  toBoolean,
  equals,
  contains,
  matches,
  isEmail,
  isURL,
  isMACAddress,
  isIP,
  isIPRange,
  isFQDN,
  isBoolean,
  isIBAN,
  isBIC,
  isAlpha,
  isAlphaLocales,
  isAlphanumeric,
  isAlphanumericLocales,
  isNumeric,
  isPassportNumber,
  isPort,
  isLowercase,
  isUppercase,
  isAscii,
  isFullWidth,
  isHalfWidth,
  isVariableWidth,
  isMultibyte,
  isSemVer,
  isSurrogatePair,
  isInt,
  isIMEI,
  isFloat,
  isFloatLocales,
  isDecimal,
  isHexadecimal,
  isOctal,
  isDivisibleBy,
  isHexColor,
  isRgbColor,
  isHSL,
  isISRC,
  isMD5,
  isHash,
  isJWT,
  isJSON,
  isEmpty,
  isLength,
  isLocale,
  isByteLength,
  isUUID,
  isMongoId,
  isAfter,
  isBefore,
  isIn,
  isCreditCard,
  isIdentityCard,
  isEAN,
  isISIN,
  isISBN,
  isISSN,
  isMobilePhone,
  isMobilePhoneLocales,
  isPostalCode,
  isPostalCodeLocales,
  isEthereumAddress,
  isCurrency,
  isBtcAddress,
  isISO8601,
  isRFC3339,
  isISO31661Alpha2,
  isISO31661Alpha3,
  isISO4217,
  isBase32,
  isBase58,
  isBase64,
  isDataURI,
  isMagnetURI,
  isMimeType,
  isLatLong,
  ltrim,
  rtrim,
  trim,
  escape,
  unescape,
  stripLow,
  whitelist,
  blacklist,
  isWhitelisted,
  normalizeEmail,
  toString,
  isSlug,
  isStrongPassword,
  isTaxID,
  isDate,
  isLicensePlate,
  isVAT,
  ibanLocales,
}

export default validator
