import { Database } from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getUsersTasks = async (userId, status) => {
    let results = await DB_EXEC('SELECT t.* FROM task t JOIN users u ON t.id_user=u.id where t.id_user=? AND t.status=?', [userId,status]);
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
    console.log(param)
    const sql = 'UPDATE task SET description="'+param.description+'", titulo="'+param.titulo+'"  WHERE id='+param.id
    console.log(sql)
    let results = await DB_EXEC(sql);
    return results.rowsAffected;
}

export const deleteTask = async (param) => {
    console.log(param)
    const sql = 'UPDATE task SET status=0  WHERE id='+param.id
    let results = await DB_EXEC(sql);
    return results.rowsAffected;
}