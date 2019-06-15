module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return User;
}