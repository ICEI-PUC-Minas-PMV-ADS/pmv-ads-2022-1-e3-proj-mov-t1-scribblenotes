import * as SQLite from 'expo-sqlite';

export const Database = {

    getConnection: () => {
        
        const db = SQLite.openDatabase('scribblenotes_teste.db');
        
        db.transaction( (tx) => {
            tx.executeSql('CREATE table if not exists task (id integer primary key not null, description text, titulo text, data text, status integer)'); 
        });
        
        const ExecuteQuery = (sql, params = []) => {
            
            return new Promise((resolve, reject) => {
                console.log(sql)
                console.log(params)
                db.transaction((transaction) => {

                    transaction.executeSql(
                        sql, 
                        params,
                        (transaction, resultSet) => {
                            resolve(resultSet);
                        },
                        (error) => {
                            console.log(error)
                            reject(error);
                        }
                    );
                })
            })
        }
        return ExecuteQuery;
    }
}