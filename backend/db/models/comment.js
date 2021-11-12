'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    checkinId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {foreignKey: 'userId'})
    Comment.belongsTo(models.Checkin, {foreignKey: 'checkinId'})
  };


  Comment.checkinComments = async function (User, checkinId) {
    const comments = await Comment.findAll({
      where: {checkinId},
      include: User,
      order: [['createdAt', 'DESC']]
    })
    return comments
  };

  Comment.newComment = async function (content, User) {
    const newComment = Comment.create(content)
    const res = await Comment.findOne({
      where: {id: newComment.id},
      include: User
    })
    return res
  };

  Comment.update = async function (content, id) {
    let comment = await Comment.findByPk(id);
    await comment.update({ content });
    return comment;
  };

  Comment.delete = async function (id) {
    let comment = await Comment.findByPk(id);
    await comment.destroy();
    return comment;
  };

  return Comment;
};
