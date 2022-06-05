import * as SQLite from 'expo-sqlite';

export const Database = {

    getConnection: () => {
        
        const db = SQLite.openDatabase('scribblenotes_teste.db');
        
        db.transaction( (tx) => {
            tx.executeSql('drop table if exists users');
            tx.executeSql('drop table if exists task');
            tx.executeSql('CREATE table if not exists users ( id integer primary key not null, email varchar(100), senha varchar(100) )'); 
            tx.executeSql('CREATE table if not exists task (id integer primary key not null, id_user integer,description text, titulo varchar(100), data timestamp,status integer,FOREIGN KEY(id_user) REFERENCES users(id))'); 
            tx.executeSql('insert into users(email,senha) values("Teste", "teste")'); 
            tx.executeSql('insert into task(id_user, description, titulo, data, status) values(1,"Teste descricao", "tarefa1", CURRENT_TIMESTAMP , 1)'); 

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