module.exports = (sequelize, Sequelize) => {
    const SignUp = sequelize.define("QRRegister", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        secondPhone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        carNumber:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        }
    }, {
        freezeTableName: true
    })
    return SignUp;
};