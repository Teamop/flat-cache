var fs = require( 'graceful-fs' );
var write = require( 'write' );
var flatted = require( 'flatted' );

module.exports = {

  tryParse: function ( filePath, defaultValue) {
    var result;
    try {
      result = this.readJSON( filePath );
    } catch (ex) {
      result = defaultValue;
    }
    return result;
  },

  /**
   * Read json file synchronously using flatted
   *
   * @method readJSON
   * @param  {String} filePath Json filepath
   * @returns {*} parse result
   */
  readJSON: function ( filePath ) {
    return flatted.parse( fs.readFileSync( filePath ).toString() );
  },

  /**
   * Write json file synchronously using flatted
   *
   * @method writeJSON
   * @param  {String} filePath Json filepath
   * @param  {*} data Object to serialize
   */
  writeJSON: function (filePath, data ) {
    write.sync( filePath, flatted.stringify( data ) );
  }

};
