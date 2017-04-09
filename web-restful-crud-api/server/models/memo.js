'use strict';
module.exports = function(sequelize, DataTypes) {
  var Memo = sequelize.define('Memo', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Memo;
};