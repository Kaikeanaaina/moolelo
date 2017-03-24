module.exports = function (sequelize, DataTypes) {
  var Source = sequelize.define('Source', {
    source: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Source.hasMany(models.Event)
      }
    }
  })

  return Source
}
