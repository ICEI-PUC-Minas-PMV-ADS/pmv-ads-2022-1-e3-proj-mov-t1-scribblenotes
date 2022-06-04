import { Database } from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getTask = async () => {
    let results = await DB_EXEC('SELECT * FROM task');
    return results.rows._array;
}

export const insertTask = async (param) => {
    let results = await DB_EXEC('INSERT into task (description, titulo, data, status) values (?,?,?,?)',
        [param.description, param.titulo, param.data, param.status]);
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
