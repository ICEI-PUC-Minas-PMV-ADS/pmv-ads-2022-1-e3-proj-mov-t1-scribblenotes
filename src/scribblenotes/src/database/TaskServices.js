import { Database } from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getUsersTasks = async (userId) => {
    let results = await DB_EXEC('SELECT t.* FROM task t JOIN users u ON t.id_user=u.id where t.id_user=?', [userId]);
    return results.rows._array;
}

export const getTaskById = async (taskId) => {
    let results = await DB_EXEC('SELECT * FROM task where id=?', [taskId]);
    return results.rows._array[0];
}

export const insertTask = async (userId, param) => {
    console.log(param)
    const sql = 'INSERT into task (id_user, description, titulo, data, status, clima) values ('+userId+',"'+param.description+'","'+param.titulo+'","'+param.data+'",'+param.status+',"'+param.clima+'")';
    const results = await DB_EXEC(sql);
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