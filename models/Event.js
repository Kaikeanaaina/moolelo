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
    },
    hashTag: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function (models) {
        Event.belongsTo(models.Source)
      }
    }
  })

  return Event
}

