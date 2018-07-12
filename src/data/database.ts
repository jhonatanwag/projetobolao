import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Bolao } from '../model/bolao';
import { Imc } from '../model/imc';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Database {

  theConsole: string = "Console Messages";

  options: any = {
    name: 'projetobolao.db',
    location: 'default',
    createFromLocation: 1
  }

  private db: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.connectDb();
  }

  private connectDb(): void {
    this.sqlite.create(this.options)
      .then((db: SQLiteObject) => {
        this.db = db;
        var sql = 'create table IF NOT EXISTS bolao (id_bolao integer primary key autoincrement , nome VARCHAR(255), time1 real, time2 real)';
        this.db.executeSql(sql, {})
          .then(() => console.log("SQL " + sql))
          .catch(e => console.log("Erro " + e));
      }).catch(e => alert("Erro " + e));

  }

  adicionarbolao(bolao: Bolao): void {

    var sql = "INSERT INTO bolao (nome,time1, time2) VALUES ('" + bolao.nome + "'," + bolao.time1 + "," + bolao.time2 + ")";

    this.db.executeSql(sql, {})
      .then(() => console.log("SQL " + sql))
      .catch(e => console.log("Erro " + e));
  }
  buscarBolao() {
    var sql = "SELECT * FROM bolao";
    return Observable.create((observer) => {
      this.db.executeSql(sql, {})
        .then((result) => {
          let items: Bolao[] = [];
          if (result.rows.length > 0) {
            for (var x = 0; x < result.rows.length; x++) {
              let bolao: Bolao = new Bolao();
              bolao.idBolao = result.rows.item(x).id_bolao;
              bolao.nome = result.rows.item(x).nome;
              bolao.time1 = result.rows.item(x).time1;
              bolao.time2 = result.rows.item(x).time2;
              items.push(bolao);
            }
          }
          observer.next(items);
          observer.complete();
        })
        .catch(e => {
          alert("Erro " + e);
          alert("Errorr " + e);
        });
    }, error => {
      alert("Errorr " + error);
    });

  }








}
