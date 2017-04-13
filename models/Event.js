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
    startingDate: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    endingDate: {
      type: DataTypes.DATE(),
      allowNull: true
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

