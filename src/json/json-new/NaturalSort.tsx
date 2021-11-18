/*
 * From: 'The better way to do natural sort in JavaScript'
 * https://fuzzytolerance.info/blog/2019/07/19/The-better-way-to-do-natural-sort-in-JavaScript/
 * Author: Tobin Bradley 2019-07-19
 *
 * The localeCompare() string method has arguments for the locale which sets the sort algorithm
 * (example: the browser provides locale) and additional options, which turn on numeric
 * collation and ignore punctuation.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
 */

// const items = ['3rd', 'Apple', '24th', '99 in the shade', 'Dec', '10000', '101', '$1.23']

export function RevisedNaturalSort(items: any[]) {
  const result = items.sort((a, b) =>
    a.localeCompare(b, navigator.languages[0] || navigator.language, {
      numeric: true,
      ignorePunctuation: true,
    })
  )
  console.log(result)
}

// [ "$1.23", "3rd", "24th", "99 in the shade", "101", "10000", "Apple", "Dec" ]

/*
 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
 */
// export function naturalSort(a: string, b: string) {
//   const re = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
//     sre = /(^[ ]*|[ ]*$)/g, // trim pre-post whitespace
//     snre = /\s+/g, // normalize all whitespace to single ' ' character
//     dre =
//       /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
//     hre = /^0x[0-9a-f]+$/i,
//     ore = /^0/,
//     i = function (s) {
//       return ((naturalSort && ('' + s).toLowerCase()) || '' + s).replace(sre, '')
//     },
//     // convert all to strings strip whitespace
//     x = i(a),
//     y = i(b),
//     // chunk/tokenize
//     xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
//     yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
//     // numeric, hex or date detection
//     xD = parseInt(x.match(hre), 16) || (xN.length !== 1 && Date.parse(x)),
//     yD = parseInt(y.match(hre), 16) || (xD && y.match(dre) && Date.parse(y)) || null,
//     normChunk = function (s: string, l: number) {
//       // normalize spaces; find floats not starting with '0', string or 0 if not defined (Clint Priest)
//       return (
//         ((!s.match(ore) || l == 1) && parseFloat(s)) || s.replace(snre, ' ').replace(sre, '') || 0
//       )
//     },
//     oFxNcL,
//     oFyNcL

//   // first try and sort Hex codes or Dates
//   if (yD) {
//     if (xD < yD) {
//       return -1
//     } else if (xD > yD) {
//       return 1
//     }
//   }

//   // natural sorting through split numeric strings and default strings
//   for (
//     let cLoc = 0, xNl = xN.length, yNl = yN.length, numS = Math.max(xNl, yNl);
//     cLoc < numS;
//     cLoc++
//   ) {
//     oFxNcL = normChunk(xN[cLoc] || '', xNl)
//     oFyNcL = normChunk(yN[cLoc] || '', yNl)
//     // handle numeric vs string comparison - number < string - (Kyle Adams)
//     if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
//       return isNaN(oFxNcL) ? 1 : -1
//     }
//     // if unicode use locale comparison
//     if (/[^\x00-\x80]/.test(oFxNcL + oFyNcL) && oFxNcL.localeCompare) {
//       const comp = oFxNcL.localeCompare(oFyNcL)
//       return comp / Math.abs(comp)
//     }
//     if (oFxNcL < oFyNcL) {
//       return -1
//     } else if (oFxNcL > oFyNcL) {
//       return 1
//     }
//   }
//   return 0
// }
