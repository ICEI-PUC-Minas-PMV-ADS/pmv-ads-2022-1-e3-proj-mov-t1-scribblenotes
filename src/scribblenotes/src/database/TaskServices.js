import { Database } from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getUsersTasks = async (userId) => {
    let results = await DB_EXEC('SELECT * FROM task t JOIN users u ON t.id_user=u.id where t.id_user=?', [userId]);
    return results.rows._array;
}

export const getTaskById = async (taskId) => {
    let results = await DB_EXEC('SELECT * FROM task where id=?', [taskId]);
    return results.rows._array[0];
}

export const insertTask = async (userId, param) => {
    let results = await DB_EXEC('INSERT into task (user_id, description, titulo, data, status) values (?,?,?,?,?)',
        [param.description, userId, param.titulo, param.data, param.status]);
    return results.rowsAffected;
}

export const updateTask = async (param) => {
    let results = await DB_EXEC(`UPDATE task SET description=?, titulo=?, data=?, status=? WHERE id=?`, 
        [param.description, param.titulo, param.data, param.status, param.id]);
    return results.rowsAffected;
}

export const deleteTask = async (id) => {
    let results = await DB_EXEC(`DELETE from task where id=?`, [id]);
    return results.rowsAffected;
}