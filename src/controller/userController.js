import Users from '../model/user.js'

// const getAllUser = async () => {
//     try {
//         return await Users.findAll({
//             raw: true,
//             returning: true
//         });
//     } catch (err) {
//         console.log(err.message)
//         return err.message
//     }
// }

// const userJoin = async (id, username, room) => {
//     try {
//         return await Users.create({
//             id,
//             username,
//             room,
//             raw: true,
//             returning: true
//         });

//     } catch (err) {
//         console.log(err.message)
//         return err.message
//     }
// }

// const findUser = async (id) => {
//     try{
//         return await Users.findAll({
//             where: {
//               id: id
//             },
//             raw: true,
//             returning: true
//         });
//     } catch (err) {
//         console.log(err.message)
//         return err.message
//     }
// }

// const getRoomUser = async (room) => {
//     try{
//         return await Users.findAll({
//             where: {
//               room: room
//             },
//             raw: true,
//             returning: true
//         });
//     } catch (err) {
//         console.log(err.message)
//         return err.message
//     }
// }

// const removeUser = async (id) => {
//     try{
//         return await Users.destroy({
//             where: {
//               id : id
//             },
//             raw: true,
//             returning: true
//         });
//     } catch (err) {
//         console.log(err.message)
//         return err.message
//     }
// }

// const editUser = async (id, room) => {
//     try{
//         return await Users.update({ room: room }, {
//             where: {
//               id: id
//             },
//             raw: true,
//             returning: true
//           });
//     } catch (err) {
//         console.log(err.message)
//         return err.message
//     }
// }

function getAllUser() {
    return Users
}

function getRoomUser(room) {
    return Users.filter(element => element.room === room)
}

function userJoin(id, username, room) {
    Users.push({
        id,
        username,
        room
    })

    return { id, username, room }
}

function findUser(id) {
    return Users.find(element => element.id == id)
}

function removeUser(id) {
    const index = Users.findIndex(element => element.id == id)

    if (index > -1) {
        return Users.splice(index, 1)
    }
}

function editUser(id, room) {
    const index = Users.findIndex(element => element.id == id)

    if (index > -1) {
        Users[index].room = room
        return Users[index]
    }
}

export {
    getAllUser,
    getRoomUser,
    userJoin,
    findUser,
    editUser,
    removeUser
}