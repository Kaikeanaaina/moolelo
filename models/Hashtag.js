module.exports = function (sequelize, DataTypes) {
  var Hashtag = sequelize.define('Hashtag', {
    hashtag: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Hashtag.hasMany(models.Event)
      }
    }
  })

  return Hashtag
}
