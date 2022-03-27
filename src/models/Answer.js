"use strict";
module.exports = (connection, DataTypes) => {
  const Answer = connection.define(
    "Answer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "answer",
      timestamps: true,
    }
  );
  Answer.sync({ force: false });
  return Answer;
};
