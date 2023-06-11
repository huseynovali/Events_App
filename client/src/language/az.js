//! moment.js locale configuration
//! locale : Azerbaijani [az]
//! author : topchiyev : https://github.com/topchiyev
// ...
import moment from "moment"
var suffixes = {
  0: '-ıncı',
  1: '-inci',
  2: '-nci',
  3: '-üncü',
  4: '-üncü',
  5: '-inci',
  6: '-ncı',
  7: '-nci',
  8: '-inci',
  9: '-uncu',
  10: '-uncu',
  20: '-inci',
  30: '-uncu',
  40: '-ıncı',
  50: '-inci',
  60: '-ıncı',
  70: '-inci',
  80: '-inci',
  90: '-ıncı',
  100: '-üncü'
};

// ...

(function (factory) {
    factory(moment);
  }(function (moment) {
    return moment.defineLocale('az', {
      months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avqust_Sentyabr_Oktyabr_Noyabr_Dekabr".split("_"),
      monthsShort: "Yan_Fev_Mar_Apr_May_Iyn_Iyl_Avq_Sen_Okt_Noy_Dek".split("_"),
      weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
      weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
      weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[sabah saat] LT',
        nextWeek: '[gələn həftə] dddd [saat] LT',
        lastDay: '[dünən saat] LT',
        lastWeek: '[keçən həftə] dddd [saat] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s əvvəl",
        s: "birneçə saniyyə",
        m: "bir dəqiqə",
        mm: "%d dəqiqə",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gün",
        dd: "%d gün",
        M: "bir ay",
        MM: "%d ay",
        y: "bir il",
        yy: "%d il"
      },
      ordinal: function (number) {
        if (number === 0) {  // special case for zero
          return number + "-ıncı";
        }
  
        var a = number % 10,
          b = number % 100 - a,
          c = number >= 100 ? 100 : null;
  
        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  }));
  