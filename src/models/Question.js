"use strict";
module.exports = (connection, DataTypes) => {
  const Question = connection.define(
    "Question",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "question",
      timestamps: true,
    }
  );
  Question.associate = (models) => {
    Question.hasMany(models.Answer, {
      foreignKey: "question_id",
      as: "answers",
      onDelete: "cascade",
    });
  };
  Question.sync();

  return Question;
};
