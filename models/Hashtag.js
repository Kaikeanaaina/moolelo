module.exports = function (sequelize, DataTypes) {
  var Hashtag = sequelize.define('Hashtag', {
    hashTag: {
      type: DataTypes.STRING(5000),
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Hashtag.belongsTo(models.Source)
      }
    }
  })

  return Hashtag
}

