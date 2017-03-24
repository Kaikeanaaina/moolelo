module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE(),
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Event.hasMany(models.Source)
        Event.hasMany(models.Hashtag)
      }
    }
  })

  return Event
}
