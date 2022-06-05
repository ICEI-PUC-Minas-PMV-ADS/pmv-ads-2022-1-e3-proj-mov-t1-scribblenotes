import { Database } from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getUser = async (email, senha) => {
    let results = await DB_EXEC('SELECT * FROM users where email=? AND senha=? ', [email,senha]);
    return results.rows._array[0];
}

export const insertUser = async (param) => {
    let results = await DB_EXEC('INSERT into users (email, senha) values (?,?)',
        [param.email, param.senha]);
    return results.rowsAffected;
}

export const updateUser = async (param) => {
    let results = await DB_EXEC(`UPDATE users SET email=?, senha=?, WHERE id=?`, 
        [param.email, param.senha, param.id]);
    return results.rowsAffected;
}

export const deleteUser = async (id) => {
    let results = await DB_EXEC(`DELETE from users where id=?`, [id]);
    return results.rowsAffected;
}