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
  Question.sync()
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
  return Question;
};
