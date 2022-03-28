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
      content: {
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
  Answer.associate = (models) => {
    Answer.belongsTo(models.Question, {
      foreignKey: "question_id",
      as: "question",
      onDelete: "cascade",
    });
  };
  Answer.sync({ force: false });
  return Answer;
};
