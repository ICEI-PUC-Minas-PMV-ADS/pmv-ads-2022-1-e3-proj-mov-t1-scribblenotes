import * as SQLite from 'expo-sqlite';

export const Database = {

    getConnection: () => {
        
        const db = SQLite.openDatabase('scribblenotes_teste.db');
        
        db.transaction( (tx) => {
            tx.executeSql('drop table if exists users');
            tx.executeSql('drop table if exists task');
            tx.executeSql('CREATE table if not exists users ( id INTEGER PRIMARY KEY AUTOINCREMENT, email varchar(100), senha varchar(100) )'); 
            tx.executeSql('CREATE table if not exists task (id INTEGER PRIMARY KEY AUTOINCREMENT, id_user integer,description text, titulo varchar(100), data timestamp,status integer, clima varchar(100),FOREIGN KEY(id_user) REFERENCES users(id))'); 
            tx.executeSql('insert into users(email,senha) values("Teste", "teste")'); 
            tx.executeSql('insert into task(id_user, description, titulo, data, status,clima) values(1,"Teste descricao", "tarefa 1", CURRENT_TIMESTAMP , 1, "sol")'); 
            tx.executeSql('insert into task(id_user, description, titulo, data, status,clima) values(1,"Teste descricao", "tarefa 2", CURRENT_TIMESTAMP , 1, "sol")'); 

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