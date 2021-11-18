/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-empty-function */
export function isArray(obj: any) {
  if (obj !== null) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  } else {
    return false
  }
}

export function isObject(obj: any) {
  if (obj !== null) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  } else {
    return false
  }
}

export function strictDeepEqual(first: any, second: any) {
  // Check the scalar case first.
  if (first === second) {
    return true
  }

  // Check if they are the same type.
  const firstType = Object.prototype.toString.call(first)
  if (firstType !== Object.prototype.toString.call(second)) {
    return false
  }
  // We know that first and second have the same type so we can just check the
  // first type from now on.
  if (isArray(first) === true) {
    // Short circuit if they're not the same length;
    if (first.length !== second.length) {
      return false
    }
    for (let i = 0; i < first.length; i++) {
      if (strictDeepEqual(first[i], second[i]) === false) {
        return false
      }
    }
    return true
  }
  if (isObject(first) === true) {
    // An object is equal if it has the same key/value pairs.
    const keysSeen = {}
    for (const key in first) {
      if (key.hasOwnProperty.call(first, key)) {
        if (strictDeepEqual(first[key], second[key]) === false) {
          return false
        }
        keysSeen[key] = true
      }
    }
    // Now check that there aren't any keys in second that weren't
    // in first.
    for (const key2 in second) {
      if (key2.hasOwnProperty.call(second, key2)) {
        if (keysSeen[key2] !== true) {
          return false
        }
      }
    }
    return true
  }
  return false
}

export function isFalse(obj: any) {
  // From the spec:
  // A false value corresponds to the following values:
  // Empty list
  // Empty object
  // Empty string
  // False boolean
  // null value

  // First check the scalar values.
  if (obj === '' || obj === false || obj === null) {
    return true
  } else if (isArray(obj) && obj.length === 0) {
    // Check for an empty array.
    return true
  } else if (isObject(obj)) {
    // Check for an empty object.
    for (const key in obj) {
      // If there are any keys, then
      // the object is not empty so the object
      // is not false.
      if (obj.hasOwnProperty(key)) {
        return false
      }
    }
    return true
  } else {
    return false
  }
}

export function objValues(obj) {
  const keys = Object.keys(obj)
  const values = []
  for (let i = 0; i < keys.length; i++) {
    values.push(obj[keys[i]])
  }
  return values
}

export function merge(a, b) {
  const merged = {}
  for (const key in a) {
    merged[key] = a[key]
  }
  for (const key2 in b) {
    merged[key2] = b[key2]
  }
  return merged
}

let trimLeft: { (arg0: any): any; (str: any): any; (str: any): any }
if (typeof String.prototype.trimLeft === 'function') {
  trimLeft = function (str: string) {
    return str.trimLeft()
  }
} else {
  trimLeft = function (str: string) {
    return str.match(/^\s*(.*)/)[1]
  }
}

// Type constants used to define functions.
const TYPE_NUMBER = 0
const TYPE_ANY = 1
const TYPE_STRING = 2
const TYPE_ARRAY = 3
const TYPE_OBJECT = 4
const TYPE_BOOLEAN = 5
const TYPE_EXPREF = 6
const TYPE_NULL = 7
const TYPE_ARRAY_NUMBER = 8
const TYPE_ARRAY_STRING = 9
const TYPE_NAME_TABLE = {
  0: 'number',
  1: 'any',
  2: 'string',
  3: 'array',
  4: 'object',
  5: 'boolean',
  6: 'expression',
  7: 'null',
  8: 'Array<number>',
  9: 'Array<string>',
}

const TOK_EOF = 'EOF'
const TOK_UNQUOTEDIDENTIFIER = 'UnquotedIdentifier'
const TOK_QUOTEDIDENTIFIER = 'QuotedIdentifier'
const TOK_RBRACKET = 'Rbracket'
const TOK_RPAREN = 'Rparen'
const TOK_COMMA = 'Comma'
const TOK_COLON = 'Colon'
const TOK_RBRACE = 'Rbrace'
const TOK_NUMBER = 'Number'
const TOK_CURRENT = 'Current'
const TOK_ROOT = 'Root'
const TOK_EXPREF = 'Expref'
const TOK_PIPE = 'Pipe'
const TOK_OR = 'Or'
const TOK_AND = 'And'
const TOK_EQ = 'EQ'
const TOK_GT = 'GT'
const TOK_LT = 'LT'
const TOK_GTE = 'GTE'
const TOK_LTE = 'LTE'
const TOK_NE = 'NE'
const TOK_FLATTEN = 'Flatten'
const TOK_STAR = 'Star'
const TOK_FILTER = 'Filter'
const TOK_DOT = 'Dot'
const TOK_NOT = 'Not'
const TOK_LBRACE = 'Lbrace'
const TOK_LBRACKET = 'Lbracket'
const TOK_LPAREN = 'Lparen'
const TOK_LITERAL = 'Literal'

// The "&", "[", "<", ">" tokens
// are not in basicToken because
// there are two token variants
// ("&&", "[?", "<=", ">=").  This is specially handled
// below.

const basicTokens = {
  '.': TOK_DOT,
  '*': TOK_STAR,
  ',': TOK_COMMA,
  ':': TOK_COLON,
  '{': TOK_LBRACE,
  '}': TOK_RBRACE,
  ']': TOK_RBRACKET,
  '(': TOK_LPAREN,
  ')': TOK_RPAREN,
  '@': TOK_CURRENT,
  $: TOK_ROOT,
}

const operatorStartToken = {
  '<': true,
  '>': true,
  '=': true,
  '!': true,
}

const skipChars = {
  ' ': true,
  '\t': true,
  '\r': true,
  '\n': true,
}

export function isAlpha(ch: string | number) {
  return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch === '_'
}

export function isNum(ch: string | number) {
  return (ch >= '0' && ch <= '9') || ch === '-'
}
export function isAlphaNum(ch: string | number) {
  return (
    (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9') || ch === '_'
  )
}

export function Lexer() {}
Lexer.prototype = {
  tokenize: function (stream: string | any[]) {
    const tokens = []
    this._current = 0
    let start: any
    let identifier: any
    let token: any
    while (this._current < stream.length) {
      if (isAlpha(stream[this._current])) {
        start = this._current
        identifier = this._consumeUnquotedIdentifier(stream)
        tokens.push({ type: TOK_UNQUOTEDIDENTIFIER, value: identifier, start: start })
      } else if (basicTokens[stream[this._current]] !== undefined) {
        tokens.push({
          type: basicTokens[stream[this._current]],
          value: stream[this._current],
          start: this._current,
        })
        this._current++
      } else if (isNum(stream[this._current])) {
        token = this._consumeNumber(stream)
        tokens.push(token)
      } else if (stream[this._current] === '[') {
        // No need to increment this._current.  This happens
        // in _consumeLBracket
        token = this._consumeLBracket(stream)
        tokens.push(token)
      } else if (stream[this._current] === '"') {
        start = this._current
        identifier = this._consumeQuotedIdentifier(stream)
        tokens.push({ type: TOK_QUOTEDIDENTIFIER, value: identifier, start: start })
      } else if (stream[this._current] === "'") {
        start = this._current
        identifier = this._consumeRawStringLiteral(stream)
        tokens.push({ type: TOK_LITERAL, value: identifier, start: start })
      } else if (stream[this._current] === '`') {
        start = this._current
        const literal = this._consumeLiteral(stream)
        tokens.push({ type: TOK_LITERAL, value: literal, start: start })
      } else if (operatorStartToken[stream[this._current]] !== undefined) {
        tokens.push(this._consumeOperator(stream))
      } else if (skipChars[stream[this._current]] !== undefined) {
        // Ignore whitespace.
        this._current++
      } else if (stream[this._current] === '&') {
        start = this._current
        this._current++
        if (stream[this._current] === '&') {
          this._current++
          tokens.push({ type: TOK_AND, value: '&&', start: start })
        } else {
          tokens.push({ type: TOK_EXPREF, value: '&', start: start })
        }
      } else if (stream[this._current] === '|') {
        start = this._current
        this._current++
        if (stream[this._current] === '|') {
          this._current++
          tokens.push({ type: TOK_OR, value: '||', start: start })
        } else {
          tokens.push({ type: TOK_PIPE, value: '|', start: start })
        }
      } else {
        const error = new Error('Unknown character:' + stream[this._current])
        error.name = 'LexerError'
        throw error
      }
    }
    return tokens
  },

  _consumeUnquotedIdentifier: function (stream: string | any[]) {
    const start = this._current
    this._current++
    while (this._current < stream.length && isAlphaNum(stream[this._current])) {
      this._current++
    }
    return stream.slice(start, this._current)
  },

  _consumeQuotedIdentifier: function (stream: string) {
    const start = this._current
    this._current++
    const maxLength = stream.length
    while (stream[this._current] !== '"' && this._current < maxLength) {
      // You can escape a double quote and you can escape an escape.
      let current = this._current
      if (
        stream[current] === '\\' &&
        (stream[current + 1] === '\\' || stream[current + 1] === '"')
      ) {
        current += 2
      } else {
        current++
      }
      this._current = current
    }
    this._current++
    return JSON.parse(stream.slice(start, this._current))
  },

  _consumeRawStringLiteral: function (stream: any) {
    const start = this._current
    this._current++
    const maxLength = stream.length
    while (stream[this._current] !== "'" && this._current < maxLength) {
      // You can escape a single quote and you can escape an escape.
      let current = this._current
      if (
        stream[current] === '\\' &&
        (stream[current + 1] === '\\' || stream[current + 1] === "'")
      ) {
        current += 2
      } else {
        current++
      }
      this._current = current
    }
    this._current++
    const literal = stream.slice(start + 1, this._current - 1)
    return literal.replace("\\'", "'")
  },

  _consumeNumber: function (stream: string) {
    const start = this._current
    this._current++
    const maxLength = stream.length
    while (isNum(stream[this._current]) && this._current < maxLength) {
      this._current++
    }
    const value = parseInt(stream.slice(start, this._current))
    return { type: TOK_NUMBER, value: value, start: start }
  },

  _consumeLBracket: function (stream: { [x: string]: string }) {
    const start = this._current
    this._current++
    if (stream[this._current] === '?') {
      this._current++
      return { type: TOK_FILTER, value: '[?', start: start }
    } else if (stream[this._current] === ']') {
      this._current++
      return { type: TOK_FLATTEN, value: '[]', start: start }
    } else {
      return { type: TOK_LBRACKET, value: '[', start: start }
    }
  },

  _consumeOperator: function (stream: { [x: string]: string }) {
    const start = this._current
    const startingChar = stream[start]
    this._current++
    if (startingChar === '!') {
      if (stream[this._current] === '=') {
        this._current++
        return { type: TOK_NE, value: '!=', start: start }
      } else {
        return { type: TOK_NOT, value: '!', start: start }
      }
    } else if (startingChar === '<') {
      if (stream[this._current] === '=') {
        this._current++
        return { type: TOK_LTE, value: '<=', start: start }
      } else {
        return { type: TOK_LT, value: '<', start: start }
      }
    } else if (startingChar === '>') {
      if (stream[this._current] === '=') {
        this._current++
        return { type: TOK_GTE, value: '>=', start: start }
      } else {
        return { type: TOK_GT, value: '>', start: start }
      }
    } else if (startingChar === '=') {
      if (stream[this._current] === '=') {
        this._current++
        return { type: TOK_EQ, value: '==', start: start }
      }
    }
  },

  _consumeLiteral: function (stream: string | any[]) {
    this._current++
    const start = this._current
    const maxLength = stream.length
    let literal: any
    while (stream[this._current] !== '`' && this._current < maxLength) {
      // You can escape a literal char or you can escape the escape.
      let current = this._current
      if (
        stream[current] === '\\' &&
        (stream[current + 1] === '\\' || stream[current + 1] === '`')
      ) {
        current += 2
      } else {
        current++
      }
      this._current = current
    }
    let literalString = trimLeft(stream.slice(start, this._current))
    literalString = literalString.replace('\\`', '`')
    if (this._looksLikeJSON(literalString)) {
      literal = JSON.parse(literalString)
    } else {
      // Try to JSON parse it as "<literal>"
      literal = JSON.parse('"' + literalString + '"')
    }
    // +1 gets us to the ending "`", +1 to move on to the next char.
    this._current++
    return literal
  },

  _looksLikeJSON: function (literalString: any) {
    const startingChars = '[{"'
    const jsonLiterals = ['true', 'false', 'null']
    const numberLooking = '-0123456789'

    if (literalString === '') {
      return false
    } else if (startingChars.indexOf(literalString[0]) >= 0) {
      return true
    } else if (jsonLiterals.indexOf(literalString) >= 0) {
      return true
    } else if (numberLooking.indexOf(literalString[0]) >= 0) {
      try {
        JSON.parse(literalString)
        return true
      } catch (ex) {
        return false
      }
    } else {
      return false
    }
  },
}

const bindingPower = {}
bindingPower[TOK_EOF] = 0
bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0
bindingPower[TOK_QUOTEDIDENTIFIER] = 0
bindingPower[TOK_RBRACKET] = 0
bindingPower[TOK_RPAREN] = 0
bindingPower[TOK_COMMA] = 0
bindingPower[TOK_RBRACE] = 0
bindingPower[TOK_NUMBER] = 0
bindingPower[TOK_CURRENT] = 0
bindingPower[TOK_ROOT] = 0
bindingPower[TOK_EXPREF] = 0
bindingPower[TOK_PIPE] = 1
bindingPower[TOK_OR] = 2
bindingPower[TOK_AND] = 3
bindingPower[TOK_EQ] = 5
bindingPower[TOK_GT] = 5
bindingPower[TOK_LT] = 5
bindingPower[TOK_GTE] = 5
bindingPower[TOK_LTE] = 5
bindingPower[TOK_NE] = 5
bindingPower[TOK_FLATTEN] = 9
bindingPower[TOK_STAR] = 20
bindingPower[TOK_FILTER] = 21
bindingPower[TOK_DOT] = 40
bindingPower[TOK_NOT] = 45
bindingPower[TOK_LBRACE] = 50
bindingPower[TOK_LBRACKET] = 55
bindingPower[TOK_LPAREN] = 60

export function Parser() {}

// Parser.prototype = {
//   parse: function (expression: any) {
//     this._loadTokens(expression)
//     this.index = 0
//     const ast = this.expression(0)
//     if (this._lookahead(0) !== TOK_EOF) {
//       const t = this._lookaheadToken(0)
//       const error = new Error('Unexpected token type: ' + t.type + ', value: ' + t.value)
//       error.name = 'ParserError'
//       throw error
//     }
//     return ast
//   },

//   _loadTokens: function (expression: string | any[]) {
//     const lexer = new Lexer()
//     const tokens = lexer.tokenize(expression)
//     tokens.push({ type: TOK_EOF, value: '', start: expression.length })
//     this.tokens = tokens
//   },

//   expression: function (rbp: number) {
//     const leftToken = this._lookaheadToken(0)
//     this._advance()
//     let left = this.nud(leftToken)
//     let currentToken = this._lookahead(0)
//     while (rbp < bindingPower[currentToken]) {
//       this._advance()
//       left = this.led(currentToken, left)
//       currentToken = this._lookahead(0)
//     }
//     return left
//   },

//   _lookahead: function (number: any) {
//     return this.tokens[this.index + number].type
//   },

//   _lookaheadToken: function (number: any) {
//     return this.tokens[this.index + number]
//   },

//   _advance: function () {
//     this.index++
//   },

//   nud: function (token: { type: any; value: any }) {
//     let left: { type: string; children?: { type: string }[] }
//     let right: { type: string }
//     let expression: { type: string }
//     switch (token.type) {
//       case TOK_LITERAL:
//         return { type: 'Literal', value: token.value }
//       case TOK_UNQUOTEDIDENTIFIER:
//         return { type: 'Field', name: token.value }
//       case TOK_QUOTEDIDENTIFIER:
//         const node = { type: 'Field', name: token.value }
//         if (this._lookahead(0) === TOK_LPAREN) {
//           throw new Error('Quoted identifier not allowed for function names.')
//         }
//         return node
//       case TOK_NOT:
//         right = this.expression(bindingPower.Not)
//         return { type: 'NotExpression', children: [right] }
//       case TOK_STAR:
//         left = { type: 'Identity' }
//         right = null
//         if (this._lookahead(0) === TOK_RBRACKET) {
//           // This can happen in a multiselect,
//           // [a, b, *]
//           right = { type: 'Identity' }
//         } else {
//           right = this._parseProjectionRHS(bindingPower.Star)
//         }
//         return { type: 'ValueProjection', children: [left, right] }
//       case TOK_FILTER:
//         return this.led(token.type, { type: 'Identity' })
//       case TOK_LBRACE:
//         return this._parseMultiselectHash()
//       case TOK_FLATTEN:
//         left = { type: TOK_FLATTEN, children: [{ type: 'Identity' }] }
//         right = this._parseProjectionRHS(bindingPower.Flatten)
//         return { type: 'Projection', children: [left, right] }
//       case TOK_LBRACKET:
//         if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
//           right = this._parseIndexExpression()
//           return this._projectIfSlice({ type: 'Identity' }, right)
//         } else if (this._lookahead(0) === TOK_STAR && this._lookahead(1) === TOK_RBRACKET) {
//           this._advance()
//           this._advance()
//           right = this._parseProjectionRHS(bindingPower.Star)
//           return { type: 'Projection', children: [{ type: 'Identity' }, right] }
//         }
//         return this._parseMultiselectList()
//       case TOK_CURRENT:
//         return { type: TOK_CURRENT }
//       case TOK_ROOT:
//         return { type: TOK_ROOT }
//       case TOK_EXPREF:
//         expression = this.expression(bindingPower.Expref)
//         return { type: 'ExpressionReference', children: [expression] }
//       case TOK_LPAREN:
//         var args = []
//         while (this._lookahead(0) !== TOK_RPAREN) {
//           if (this._lookahead(0) === TOK_CURRENT) {
//             expression = { type: TOK_CURRENT }
//             this._advance()
//           } else {
//             expression = this.expression(0)
//           }
//           args.push(expression)
//         }
//         this._match(TOK_RPAREN)
//         return args[0]
//       default:
//         this._errorToken(token)
//     }
//   },

//   led: function (tokenName: any, left: { name: any }) {
//     let right: { type: string }
//     switch (tokenName) {
//       case TOK_DOT:
//         var rbp = bindingPower.Dot
//         if (this._lookahead(0) !== TOK_STAR) {
//           right = this._parseDotRHS(rbp)
//           return { type: 'Subexpression', children: [left, right] }
//         }
//         // Creating a projection.
//         this._advance()
//         right = this._parseProjectionRHS(rbp)
//         return { type: 'ValueProjection', children: [left, right] }
//       case TOK_PIPE:
//         right = this.expression(bindingPower.Pipe)
//         return { type: TOK_PIPE, children: [left, right] }
//       case TOK_OR:
//         right = this.expression(bindingPower.Or)
//         return { type: 'OrExpression', children: [left, right] }
//       case TOK_AND:
//         right = this.expression(bindingPower.And)
//         return { type: 'AndExpression', children: [left, right] }
//       case TOK_LPAREN:
//         var name = left.name
//         var args = []
//         var expression: { type: string }, node: { type: string; name: any; children }
//         while (this._lookahead(0) !== TOK_RPAREN) {
//           if (this._lookahead(0) === TOK_CURRENT) {
//             expression = { type: TOK_CURRENT }
//             this._advance()
//           } else {
//             expression = this.expression(0)
//           }
//           if (this._lookahead(0) === TOK_COMMA) {
//             this._match(TOK_COMMA)
//           }
//           args.push(expression)
//         }
//         this._match(TOK_RPAREN)
//         node = { type: 'Function', name: name, children: args }
//         return node
//       case TOK_FILTER:
//         var condition = this.expression(0)
//         this._match(TOK_RBRACKET)
//         if (this._lookahead(0) === TOK_FLATTEN) {
//           right = { type: 'Identity' }
//         } else {
//           right = this._parseProjectionRHS(bindingPower.Filter)
//         }
//         return { type: 'FilterProjection', children: [left, right, condition] }
//       case TOK_FLATTEN:
//         var leftNode = { type: TOK_FLATTEN, children: [left] }
//         var rightNode = this._parseProjectionRHS(bindingPower.Flatten)
//         return { type: 'Projection', children: [leftNode, rightNode] }
//       case TOK_EQ:
//       case TOK_NE:
//       case TOK_GT:
//       case TOK_GTE:
//       case TOK_LT:
//       case TOK_LTE:
//         return this._parseComparator(left, tokenName)
//       case TOK_LBRACKET:
//         var token = this._lookaheadToken(0)
//         if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
//           right = this._parseIndexExpression()
//           return this._projectIfSlice(left, right)
//         }
//         this._match(TOK_STAR)
//         this._match(TOK_RBRACKET)
//         right = this._parseProjectionRHS(bindingPower.Star)
//         return { type: 'Projection', children: [left, right] }
//       default:
//         this._errorToken(this._lookaheadToken(0))
//     }
//   },

//   _match: function (tokenType: string) {
//     if (this._lookahead(0) === tokenType) {
//       this._advance()
//     } else {
//       const t = this._lookaheadToken(0)
//       const error = new Error('Expected ' + tokenType + ', got: ' + t.type)
//       error.name = 'ParserError'
//       throw error
//     }
//   },

//   _errorToken: function (token: { type: string; value: string }) {
//     const error = new Error('Invalid token (' + token.type + '): "' + token.value + '"')
//     error.name = 'ParserError'
//     throw error
//   },

//   _parseIndexExpression: function () {
//     if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
//       return this._parseSliceExpression()
//     } else {
//       const node = {
//         type: 'Index',
//         value: this._lookaheadToken(0).value,
//       }
//       this._advance()
//       this._match(TOK_RBRACKET)
//       return node
//     }
//   },

//   _projectIfSlice: function (left: any, right: { type: string }) {
//     const indexExpr = { type: 'IndexExpression', children: [left, right] }
//     if (right.type === 'Slice') {
//       return {
//         type: 'Projection',
//         children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)],
//       }
//     } else {
//       return indexExpr
//     }
//   },

//   _parseSliceExpression: function () {
//     // [start:end:step] where each part is optional, as well as the last
//     // colon.
//     const parts = [null, null, null]
//     let index = 0
//     let currentToken = this._lookahead(0)
//     while (currentToken !== TOK_RBRACKET && index < 3) {
//       if (currentToken === TOK_COLON) {
//         index++
//         this._advance()
//       } else if (currentToken === TOK_NUMBER) {
//         parts[index] = this._lookaheadToken(0).value
//         this._advance()
//       } else {
//         const t = this._lookahead(0)
//         const error = new Error('Syntax error, unexpected token: ' + t.value + '(' + t.type + ')')
//         error.name = 'Parsererror'
//         throw error
//       }
//       currentToken = this._lookahead(0)
//     }
//     this._match(TOK_RBRACKET)
//     return {
//       type: 'Slice',
//       children: parts,
//     }
//   },

//   _parseComparator: function (left: any, comparator: string | number) {
//     const right = this.expression(bindingPower[comparator])
//     return { type: 'Comparator', name: comparator, children: [left, right] }
//   },

//   _parseDotRHS: function (rbp: any) {
//     const lookahead = this._lookahead(0)
//     const exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR]
//     if (exprTokens.indexOf(lookahead) >= 0) {
//       return this.expression(rbp)
//     } else if (lookahead === TOK_LBRACKET) {
//       this._match(TOK_LBRACKET)
//       return this._parseMultiselectList()
//     } else if (lookahead === TOK_LBRACE) {
//       this._match(TOK_LBRACE)
//       return this._parseMultiselectHash()
//     }
//   },

//   _parseProjectionRHS: function (rbp: any) {
//     let right: { type: string }
//     if (bindingPower[this._lookahead(0)] < 10) {
//       right = { type: 'Identity' }
//     } else if (this._lookahead(0) === TOK_LBRACKET) {
//       right = this.expression(rbp)
//     } else if (this._lookahead(0) === TOK_FILTER) {
//       right = this.expression(rbp)
//     } else if (this._lookahead(0) === TOK_DOT) {
//       this._match(TOK_DOT)
//       right = this._parseDotRHS(rbp)
//     } else {
//       const t = this._lookaheadToken(0)
//       const error = new Error('Syntax error, unexpected token: ' + t.value + '(' + t.type + ')')
//       error.name = 'ParserError'
//       throw error
//     }
//     return right
//   },

//   _parseMultiselectList: function () {
//     const expressions = []
//     while (this._lookahead(0) !== TOK_RBRACKET) {
//       const expression = this.expression(0)
//       expressions.push(expression)
//       if (this._lookahead(0) === TOK_COMMA) {
//         this._match(TOK_COMMA)
//         if (this._lookahead(0) === TOK_RBRACKET) {
//           throw new Error('Unexpected token Rbracket')
//         }
//       }
//     }
//     this._match(TOK_RBRACKET)
//     return { type: 'MultiSelectList', children: expressions }
//   },

//   _parseMultiselectHash: function () {
//     const pairs = []
//     const identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER]
//     let keyToken: { type: string; value: any },
//       keyName: any,
//       value: any,
//       node: { type: string; name: any; value: any }
//     for (;;) {
//       keyToken = this._lookaheadToken(0)
//       if (identifierTypes.indexOf(keyToken.type) < 0) {
//         throw new Error('Expecting an identifier token, got: ' + keyToken.type)
//       }
//       keyName = keyToken.value
//       this._advance()
//       if (this._lookahead(0) === TOK_COMMA || this._lookahead(0) === TOK_RBRACE) {
//         node = { type: 'KeyValuePair', name: keyName, value: { type: 'Field', name: keyName } }
//         pairs.push(node)
//       } else {
//         this._match(TOK_COLON)
//         value = this.expression(0)
//         node = { type: 'KeyValuePair', name: keyName, value: value }
//         pairs.push(node)
//       }
//       if (this._lookahead(0) === TOK_COMMA) {
//         this._match(TOK_COMMA)
//       } else if (this._lookahead(0) === TOK_RBRACE) {
//         this._match(TOK_RBRACE)
//         break
//       }
//     }
//     return { type: 'MultiSelectHash', children: pairs }
//   },
// }

export function TreeInterpreter(runtime: any) {
  this.runtime = runtime
}

// TreeInterpreter.prototype = {
//   search: function (node: any, value: any) {
//     this._rootValue = value
//     return this.visit(node, value)
//   },

//   visit: function (
//     node: { type: string; name: string; children: string | any[]; value: any },
//     value: string | any[]
//   ) {
//     let matched: any,
//       current: any,
//       result: boolean | any[],
//       first: number,
//       second: number,
//       field: any,
//       left: any,
//       right: any,
//       //   collected: [],
//       i: number
//     switch (node.type) {
//       case 'Field':
//         if (value !== null && isObject(value)) {
//           field = value[node.name]
//           if (field === undefined) {
//             return null
//           } else {
//             return field
//           }
//         }
//         return null
//       case 'Subexpression':
//         result = this.visit(node.children[0], value)
//         for (i = 1; i < node.children.length; i++) {
//           result = this.visit(node.children[1], result)
//           if (result === null) {
//             return null
//           }
//         }
//         return result
//       case 'IndexExpression':
//         left = this.visit(node.children[0], value)
//         right = this.visit(node.children[1], left)
//         return right
//       case 'Index':
//         if (!isArray(value)) {
//           return null
//         }
//         let index = node.value
//         if (index < 0) {
//           index = value.length + index
//         }
//         result = value[index]
//         if (result === undefined) {
//           result = null
//         }
//         return result
//       case 'Slice':
//         if (!isArray(value)) {
//           return null
//         }
//         const sliceParams = node.children.slice(0)
//         const computed = this.computeSliceParams(value.length, sliceParams)
//         const start = computed[0]
//         const stop = computed[1]
//         const step = computed[2]
//         result = []
//         if (step > 0) {
//           for (i = start; i < stop; i += step) {
//             result.push(value[i])
//           }
//         } else {
//           for (i = start; i > stop; i += step) {
//             result.push(value[i])
//           }
//         }
//         return result
//       case 'Projection':
//         let base = this.visit(node.children[0], value)
//         if (!isArray(base)) {
//           return null
//         }
//         collected = []
//         for (i = 0; i < base.length; i++) {
//           current = this.visit(node.children[1], base[i])
//           if (current !== null) {
//             collected.push(current)
//           }
//         }
//         return collected
//       case 'ValueProjection':
//         // Evaluate left child.
//         base = this.visit(node.children[0], value)
//         if (!isObject(base)) {
//           return null
//         }
//         collected = []
//         const values = objValues(base)
//         for (i = 0; i < values.length; i++) {
//           current = this.visit(node.children[1], values[i])
//           if (current !== null) {
//             collected.push(current)
//           }
//         }
//         return collected
//       case 'FilterProjection':
//         base = this.visit(node.children[0], value)
//         if (!isArray(base)) {
//           return null
//         }
//         const filtered = []
//         const finalResults = []
//         for (i = 0; i < base.length; i++) {
//           matched = this.visit(node.children[2], base[i])
//           if (!isFalse(matched)) {
//             filtered.push(base[i])
//           }
//         }
//         for (let j = 0; j < filtered.length; j++) {
//           current = this.visit(node.children[1], filtered[j])
//           if (current !== null) {
//             finalResults.push(current)
//           }
//         }
//         return finalResults
//       case 'Comparator':
//         first = this.visit(node.children[0], value)
//         second = this.visit(node.children[1], value)
//         switch (node.name) {
//           case TOK_EQ:
//             result = strictDeepEqual(first, second)
//             break
//           case TOK_NE:
//             result = !strictDeepEqual(first, second)
//             break
//           case TOK_GT:
//             result = first > second
//             break
//           case TOK_GTE:
//             result = first >= second
//             break
//           case TOK_LT:
//             result = first < second
//             break
//           case TOK_LTE:
//             result = first <= second
//             break
//           default:
//             throw new Error('Unknown comparator: ' + node.name)
//         }
//         return result
//       case TOK_FLATTEN:
//         const original = this.visit(node.children[0], value)
//         if (!isArray(original)) {
//           return null
//         }
//         const merged = []
//         for (i = 0; i < original.length; i++) {
//           current = original[i]
//           if (isArray(current)) {
//             // eslint-disable-next-line prefer-spread
//             merged.push.apply(merged, current)
//           } else {
//             merged.push(current)
//           }
//         }
//         return merged
//       case 'Identity':
//         return value
//       case 'MultiSelectList':
//         if (value === null) {
//           return null
//         }
//         let collected = []
//         for (i = 0; i < node.children.length; i++) {
//           collected.push(this.visit(node.children[i], value))
//         }
//         return collected
//       case 'MultiSelectHash':
//         if (value === null) {
//           return null
//         }
//         let child: { name: string | number; value: any }
//         for (i = 0; i < node.children.length; i++) {
//           child = node.children[i]
//           collected[child.name] = this.visit(child.value, value)
//         }
//         return collected
//       case 'OrExpression':
//         matched = this.visit(node.children[0], value)
//         if (isFalse(matched)) {
//           matched = this.visit(node.children[1], value)
//         }
//         return matched
//       case 'AndExpression':
//         first = this.visit(node.children[0], value)

//         if (isFalse(first) === true) {
//           return first
//         }
//         return this.visit(node.children[1], value)
//       case 'NotExpression':
//         first = this.visit(node.children[0], value)
//         return isFalse(first)
//       case 'Literal':
//         return node.value
//       case TOK_PIPE:
//         left = this.visit(node.children[0], value)
//         return this.visit(node.children[1], left)
//       case TOK_CURRENT:
//         return value
//       case TOK_ROOT:
//         return this._rootValue
//       case 'Function':
//         const resolvedArgs = []
//         for (i = 0; i < node.children.length; i++) {
//           resolvedArgs.push(this.visit(node.children[i], value))
//         }
//         return this.runtime.callFunction(node.name, resolvedArgs)
//       case 'ExpressionReference':
//         const refNode = node.children[0]
//         // Tag the node with a specific attribute so the type
//         // checker verify the type.
//         refNode.jmespathType = TOK_EXPREF
//         return refNode
//       default:
//         throw new Error('Unknown node type: ' + node.type)
//     }
//   },

//   computeSliceParams: function (arrayLength: number, sliceParams) {
//     let start = sliceParams[0]
//     let stop = sliceParams[1]
//     let step = sliceParams[2]
//     const computed = [null, null, null]
//     if (step === null) {
//       step = 1
//     } else if (step === 0) {
//       const error = new Error('Invalid slice, step cannot be 0')
//       error.name = 'RuntimeError'
//       throw error
//     }
//     const stepValueNegative = step < 0 ? true : false

//     if (start === null) {
//       start = stepValueNegative ? arrayLength - 1 : 0
//     } else {
//       start = this.capSliceRange(arrayLength, start, step)
//     }

//     if (stop === null) {
//       stop = stepValueNegative ? -1 : arrayLength
//     } else {
//       stop = this.capSliceRange(arrayLength, stop, step)
//     }
//     computed[0] = start
//     computed[1] = stop
//     computed[2] = step
//     return computed
//   },

//   capSliceRange: function (arrayLength: number, actualValue: number, step: number) {
//     if (actualValue < 0) {
//       actualValue += arrayLength
//       if (actualValue < 0) {
//         actualValue = step < 0 ? -1 : 0
//       }
//     } else if (actualValue >= arrayLength) {
//       actualValue = step < 0 ? arrayLength - 1 : arrayLength
//     }
//     return actualValue
//   },
// }

export function Runtime(interpreter: undefined) {
  this._interpreter = interpreter
  this.functionTable = {
    // name: [function, <signature>]
    // The <signature> can be:
    //
    // {
    //   args: [[type1, type2], [type1, type2]],
    //   variadic: true|false
    // }
    //
    // Each arg in the arg list is a list of valid types
    // (if the function is overloaded and supports multiple
    // types.  If the type is "any" then no type checking
    // occurs on the argument.  Variadic is optional
    // and if not provided is assumed to be false.
    abs: { _func: this._functionAbs, _signature: [{ types: [TYPE_NUMBER] }] },
    avg: { _func: this._functionAvg, _signature: [{ types: [TYPE_ARRAY_NUMBER] }] },
    ceil: { _func: this._functionCeil, _signature: [{ types: [TYPE_NUMBER] }] },
    contains: {
      _func: this._functionContains,
      _signature: [{ types: [TYPE_STRING, TYPE_ARRAY] }, { types: [TYPE_ANY] }],
    },
    ends_with: {
      _func: this._functionEndsWith,
      _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_STRING] }],
    },
    floor: { _func: this._functionFloor, _signature: [{ types: [TYPE_NUMBER] }] },
    length: {
      _func: this._functionLength,
      _signature: [{ types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT] }],
    },
    map: {
      _func: this._functionMap,
      _signature: [{ types: [TYPE_EXPREF] }, { types: [TYPE_ARRAY] }],
    },
    max: {
      _func: this._functionMax,
      _signature: [{ types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING] }],
    },
    merge: {
      _func: this._functionMerge,
      _signature: [{ types: [TYPE_OBJECT], variadic: true }],
    },
    max_by: {
      _func: this._functionMaxBy,
      _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }],
    },
    sum: { _func: this._functionSum, _signature: [{ types: [TYPE_ARRAY_NUMBER] }] },
    starts_with: {
      _func: this._functionStartsWith,
      _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_STRING] }],
    },
    min: {
      _func: this._functionMin,
      _signature: [{ types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING] }],
    },
    min_by: {
      _func: this._functionMinBy,
      _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }],
    },
    type: { _func: this._functionType, _signature: [{ types: [TYPE_ANY] }] },
    keys: { _func: this._functionKeys, _signature: [{ types: [TYPE_OBJECT] }] },
    values: { _func: this._functionValues, _signature: [{ types: [TYPE_OBJECT] }] },
    sort: {
      _func: this._functionSort,
      _signature: [{ types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER] }],
    },
    sort_by: {
      _func: this._functionSortBy,
      _signature: [{ types: [TYPE_ARRAY] }, { types: [TYPE_EXPREF] }],
    },
    join: {
      _func: this._functionJoin,
      _signature: [{ types: [TYPE_STRING] }, { types: [TYPE_ARRAY_STRING] }],
    },
    reverse: {
      _func: this._functionReverse,
      _signature: [{ types: [TYPE_STRING, TYPE_ARRAY] }],
    },
    to_array: { _func: this._functionToArray, _signature: [{ types: [TYPE_ANY] }] },
    to_string: { _func: this._functionToString, _signature: [{ types: [TYPE_ANY] }] },
    to_number: { _func: this._functionToNumber, _signature: [{ types: [TYPE_ANY] }] },
    not_null: {
      _func: this._functionNotNull,
      _signature: [{ types: [TYPE_ANY], variadic: true }],
    },
  }
}

Runtime.prototype = {
  callFunction: function (name: string, resolvedArgs: any) {
    const functionEntry = this.functionTable[name]
    if (functionEntry === undefined) {
      throw new Error('Unknown function: ' + name + '()')
    }
    this._validateArgs(name, resolvedArgs, functionEntry._signature)
    return functionEntry._func.call(this, resolvedArgs)
  },

  _validateArgs: function (name: string, args, signature) {
    // Validating the args requires validating
    // the correct arity and the correct type of each arg.
    // If the last argument is declared as variadic, then we need
    // a minimum number of args to be required.  Otherwise it has to
    // be an exact amount.
    let pluralized: string
    // discount any optional arguments
    const numberOfRequiredArgs = signature.filter(function (s) {
      return !(s.optional || false)
    }).length
    if (signature[signature.length - 1] && signature[signature.length - 1].variadic) {
      if (args.length < signature.length) {
        pluralized = signature.length === 1 ? ' argument' : ' arguments'
        throw new Error(
          'ArgumentError: ' +
            name +
            '() ' +
            'takes at least' +
            signature.length +
            pluralized +
            ' but received ' +
            args.length
        )
      }
    } else {
      if (args.length < numberOfRequiredArgs) {
        pluralized = signature.length === 1 ? ' argument' : ' arguments'
        throw new Error(
          'ArgumentError: ' +
            name +
            '() ' +
            'takes ' +
            signature.length +
            pluralized +
            ' but received ' +
            args.length
        )
      }
      if (args.length > signature.length) {
        pluralized = signature.length === 1 ? ' argument' : ' arguments'
        throw new Error(
          'ArgumentError: ' +
            name +
            '() ' +
            'takes ' +
            signature.length +
            pluralized +
            ' but received ' +
            args.length
        )
      }
    }
    let currentSpec
    let actualType: string | number
    let typeMatched: boolean
    for (let i = 0; i < signature.length; i++) {
      typeMatched = false
      currentSpec = signature[i].types
      actualType = this._getTypeName(args[i])
      for (let j = 0; j < currentSpec.length; j++) {
        if (this._typeMatches(actualType, currentSpec[j], args[i])) {
          typeMatched = true
          break
        }
      }
      if (!typeMatched && !signature[i].optional) {
        const expected = currentSpec
          .map(function (typeIdentifier: string | number) {
            return TYPE_NAME_TABLE[typeIdentifier]
          })
          .join(',')
        throw new Error(
          'TypeError: ' +
            name +
            '() ' +
            'expected argument ' +
            (i + 1) +
            ' to be type ' +
            expected +
            ' but received type ' +
            TYPE_NAME_TABLE[actualType] +
            ' instead.'
        )
      }
    }
  },

  _typeMatches: function (actual: number, expected: number, argValue) {
    if (expected === TYPE_ANY) {
      return true
    }
    if (
      expected === TYPE_ARRAY_STRING ||
      expected === TYPE_ARRAY_NUMBER ||
      expected === TYPE_ARRAY
    ) {
      // The expected type can either just be array,
      // or it can require a specific subtype (array of numbers).
      //
      // The simplest case is if "array" with no subtype is specified.
      if (expected === TYPE_ARRAY) {
        return actual === TYPE_ARRAY
      } else if (actual === TYPE_ARRAY) {
        // Otherwise we need to check subtypes.
        // I think this has potential to be improved.
        let subtype: number
        if (expected === TYPE_ARRAY_NUMBER) {
          subtype = TYPE_NUMBER
        } else if (expected === TYPE_ARRAY_STRING) {
          subtype = TYPE_STRING
        }
        for (let i = 0; i < argValue.length; i++) {
          if (!this._typeMatches(this._getTypeName(argValue[i]), subtype, argValue[i])) {
            return false
          }
        }
        return true
      }
    } else {
      return actual === expected
    }
  },
  _getTypeName: function (obj) {
    switch (Object.prototype.toString.call(obj)) {
      case '[object String]':
        return TYPE_STRING
      case '[object Number]':
        return TYPE_NUMBER
      case '[object Array]':
        return TYPE_ARRAY
      case '[object Boolean]':
        return TYPE_BOOLEAN
      case '[object Null]':
        return TYPE_NULL
      case '[object Object]':
        // Check if it's an expref.  If it has, it's been
        // tagged with a jmespathType attr of 'Expref';
        if (obj.jmespathType === TOK_EXPREF) {
          return TYPE_EXPREF
        } else {
          return TYPE_OBJECT
        }
    }
  },

  _functionStartsWith: function (resolvedArgs) {
    return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0
  },

  _functionEndsWith: function (resolvedArgs) {
    const searchStr = resolvedArgs[0]
    const suffix = resolvedArgs[1]
    return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1
  },

  _functionReverse: function (resolvedArgs) {
    const typeName = this._getTypeName(resolvedArgs[0])
    if (typeName === TYPE_STRING) {
      const originalStr = resolvedArgs[0]
      let reversedStr = ''
      for (let i = originalStr.length - 1; i >= 0; i--) {
        reversedStr += originalStr[i]
      }
      return reversedStr
    } else {
      const reversedArray = resolvedArgs[0].slice(0)
      reversedArray.reverse()
      return reversedArray
    }
  },

  _functionAbs: function (resolvedArgs: number[]) {
    return Math.abs(resolvedArgs[0])
  },

  _functionCeil: function (resolvedArgs: number[]) {
    return Math.ceil(resolvedArgs[0])
  },

  _functionAvg: function (resolvedArgs) {
    let sum = 0
    const inputArray = resolvedArgs[0]
    for (let i = 0; i < inputArray.length; i++) {
      sum += inputArray[i]
    }
    return sum / inputArray.length
  },

  _functionContains: function (resolvedArgs) {
    return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0
  },

  _functionFloor: function (resolvedArgs: number[]) {
    return Math.floor(resolvedArgs[0])
  },

  _functionLength: function (resolvedArgs) {
    if (!isObject(resolvedArgs[0])) {
      return resolvedArgs[0].length
    } else {
      // As far as I can tell, there's no way to get the length
      // of an object without O(n) iteration through the object.
      return Object.keys(resolvedArgs[0]).length
    }
  },

  _functionMap: function (resolvedArgs) {
    const mapped = []
    const interpreter = this._interpreter
    const exprefNode = resolvedArgs[0]
    const elements = resolvedArgs[1]
    for (let i = 0; i < elements.length; i++) {
      mapped.push(interpreter.visit(exprefNode, elements[i]))
    }
    return mapped
  },

  _functionMerge: function (resolvedArgs: string | any[]) {
    const merged = {}
    for (let i = 0; i < resolvedArgs.length; i++) {
      const current = resolvedArgs[i]
      for (const key in current) {
        merged[key] = current[key]
      }
    }
    return merged
  },

  _functionMax: function (resolvedArgs) {
    if (resolvedArgs[0].length > 0) {
      const typeName = this._getTypeName(resolvedArgs[0][0])
      if (typeName === TYPE_NUMBER) {
        return Math.max(...resolvedArgs[0])
      } else {
        const elements = resolvedArgs[0]
        let maxElement = elements[0]
        for (let i = 1; i < elements.length; i++) {
          if (maxElement.localeCompare(elements[i]) < 0) {
            maxElement = elements[i]
          }
        }
        return maxElement
      }
    } else {
      return null
    }
  },

  _functionMin: function (resolvedArgs) {
    if (resolvedArgs[0].length > 0) {
      const typeName = this._getTypeName(resolvedArgs[0][0])
      if (typeName === TYPE_NUMBER) {
        return Math.min(...resolvedArgs[0])
      } else {
        const elements = resolvedArgs[0]
        let minElement = elements[0]
        for (let i = 1; i < elements.length; i++) {
          if (elements[i].localeCompare(minElement) < 0) {
            minElement = elements[i]
          }
        }
        return minElement
      }
    } else {
      return null
    }
  },

  _functionSum: function (resolvedArgs) {
    let sum = 0
    const listToSum = resolvedArgs[0]
    for (let i = 0; i < listToSum.length; i++) {
      sum += listToSum[i]
    }
    return sum
  },

  _functionType: function (resolvedArgs) {
    switch (this._getTypeName(resolvedArgs[0])) {
      case TYPE_NUMBER:
        return 'number'
      case TYPE_STRING:
        return 'string'
      case TYPE_ARRAY:
        return 'array'
      case TYPE_OBJECT:
        return 'object'
      case TYPE_BOOLEAN:
        return 'boolean'
      case TYPE_EXPREF:
        return 'expref'
      case TYPE_NULL:
        return 'null'
    }
  },

  _functionKeys: function (resolvedArgs) {
    return Object.keys(resolvedArgs[0])
  },

  _functionValues: function (resolvedArgs) {
    const obj = resolvedArgs[0]
    const keys = Object.keys(obj)
    const values = []
    for (let i = 0; i < keys.length; i++) {
      values.push(obj[keys[i]])
    }
    return values
  },

  _functionJoin: function (resolvedArgs) {
    const joinChar = resolvedArgs[0]
    const listJoin = resolvedArgs[1]
    return listJoin.join(joinChar)
  },

  _functionToArray: function (resolvedArgs) {
    if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
      return resolvedArgs[0]
    } else {
      return [resolvedArgs[0]]
    }
  },

  _functionToString: function (resolvedArgs) {
    if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
      return resolvedArgs[0]
    } else {
      return JSON.stringify(resolvedArgs[0])
    }
  },

  _functionToNumber: function (resolvedArgs) {
    const typeName = this._getTypeName(resolvedArgs[0])
    let convertedValue: number
    if (typeName === TYPE_NUMBER) {
      return resolvedArgs[0]
    } else if (typeName === TYPE_STRING) {
      convertedValue = +resolvedArgs[0]
      if (!isNaN(convertedValue)) {
        return convertedValue
      }
    }
    return null
  },

  _functionNotNull: function (resolvedArgs) {
    for (let i = 0; i < resolvedArgs.length; i++) {
      if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
        return resolvedArgs[i]
      }
    }
    return null
  },

  _functionSort: function (resolvedArgs) {
    const sortedArray = resolvedArgs[0].slice(0)
    sortedArray.sort()
    return sortedArray
  },

  _functionSortBy: function (resolvedArgs) {
    const sortedArray = resolvedArgs[0].slice(0)
    if (sortedArray.length === 0) {
      return sortedArray
    }
    const interpreter = this._interpreter
    const exprefNode = resolvedArgs[1]
    const requiredType = this._getTypeName(interpreter.visit(exprefNode, sortedArray[0]))
    if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
      throw new Error('TypeError')
    }
    const that = this
    // In order to get a stable sort out of an unstable
    // sort algorithm, we decorate/sort/undecorate (DSU)
    // by creating a new list of [index, element] pairs.
    // In the cmp function, if the evaluated elements are
    // equal, then the index will be used as the tiebreaker.
    // After the decorated list has been sorted, it will be
    // undecorated to extract the original elements.
    const decorated = []
    for (let i = 0; i < sortedArray.length; i++) {
      decorated.push([i, sortedArray[i]])
    }
    decorated.sort(function (a, b) {
      const exprA = interpreter.visit(exprefNode, a[1])
      const exprB = interpreter.visit(exprefNode, b[1])
      if (that._getTypeName(exprA) !== requiredType) {
        throw new Error(
          'TypeError: expected ' + requiredType + ', received ' + that._getTypeName(exprA)
        )
      } else if (that._getTypeName(exprB) !== requiredType) {
        throw new Error(
          'TypeError: expected ' + requiredType + ', received ' + that._getTypeName(exprB)
        )
      }
      if (exprA > exprB) {
        return 1
      } else if (exprA < exprB) {
        return -1
      } else {
        // If they're equal compare the items by their
        // order to maintain relative order of equal keys
        // (i.e. to get a stable sort).
        return a[0] - b[0]
      }
    })
    // Undecorate: extract out the original list elements.
    for (let j = 0; j < decorated.length; j++) {
      sortedArray[j] = decorated[j][1]
    }
    return sortedArray
  },

  _functionMaxBy: function (resolvedArgs) {
    const exprefNode = resolvedArgs[1]
    const resolvedArray = resolvedArgs[0]
    const keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING])
    let maxNumber = -Infinity
    let maxRecord: any
    let current: number
    for (let i = 0; i < resolvedArray.length; i++) {
      current = keyFunction(resolvedArray[i])
      if (current > maxNumber) {
        maxNumber = current
        maxRecord = resolvedArray[i]
      }
    }
    return maxRecord
  },

  _functionMinBy: function (resolvedArgs) {
    const exprefNode = resolvedArgs[1]
    const resolvedArray = resolvedArgs[0]
    const keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING])
    let minNumber = Infinity
    let minRecord: any
    let current: number
    for (let i = 0; i < resolvedArray.length; i++) {
      current = keyFunction(resolvedArray[i])
      if (current < minNumber) {
        minNumber = current
        minRecord = resolvedArray[i]
      }
    }
    return minRecord
  },

  createKeyFunction: function (exprefNode, allowedTypes) {
    const that = this
    const interpreter = this._interpreter
    const keyFunc = function (x: any) {
      const current = interpreter.visit(exprefNode, x)
      if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
        const msg =
          'TypeError: expected one of ' + allowedTypes + ', received ' + that._getTypeName(current)
        throw new Error(msg)
      }
      return current
    }
    return keyFunc
  },
}

export function compile(stream: any) {
  const parser = new Parser()
  const ast = parser.parse(stream)
  return ast
}

export function tokenize(stream: any) {
  const lexer = new Lexer()
  return lexer.tokenize(stream)
}

// export function search(data: any, expression: any) {
//   return decorate({})(expression)(data)
// }

// export function decorate(fns ) {
//   const parser = new Parser()
//   // This needs to be improved.  Both the interpreter and runtime depend on
//   // each other.  The runtime needs the interpreter to support exprefs.
//   // There's likely a clean way to avoid the cyclic dependency.
//   const runtime = new Runtime()
//   Object.assign(runtime.functionTable, fns)
//   const interpreter = new TreeInterpreter(runtime)
//   runtime._interpreter = interpreter
//   return function (expression: any) {
//     const node = parser.parse(expression)
//     return function (data: any) {
//       return interpreter.search(node, data)
//     }
//   }
// }

exports.tokenize = tokenize
exports.compile = compile
// exports.search = search
// exports.decorate = decorate
exports.strictDeepEqual = strictDeepEqual
exports.types = {
  TYPE_NUMBER: 0,
  TYPE_ANY: 1,
  TYPE_STRING: 2,
  TYPE_ARRAY: 3,
  TYPE_OBJECT: 4,
  TYPE_BOOLEAN: 5,
  TYPE_EXPREF: 6,
  TYPE_NULL: 7,
  TYPE_ARRAY_NUMBER: 8,
  TYPE_ARRAY_STRING: 9,
}
