const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/*str, options*/) {
  // let res = '';
  // for(let i = 0; i < options.repeatTimes; i++){
  //   res += str;

  //   if(options.addition !== undefined) {
  //     for(let j = 0; j < options.additionRepeatTimes; j++){
  //       res += options.addition;
  //       j ==  options.additionRepeatTimes - 1 ? 1 : res += options.additionSeparator;
  //     }
  //   }
  //   if(!options.separator){
  //     let separator = '+'
  //     i == options.repeatTimes - 1 ? 1 : res += separator;
  //   } else i == options.repeatTimes - 1 ? 1 : res += options.separator;
    
  // }
  // return res;
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
