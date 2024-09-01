import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AccountDetails, EstAccount} from "../model/account.model";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http : HttpClient) { }

  public getAccount(accountId : string, page : number, size : number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(environment.backendHost+"/Estaccounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }
  public searchAccount(keyword : string):Observable<Array<EstAccount>>{
    return this.http.get<Array<EstAccount>>(environment.backendHost+"/Estaccounts/search?keyword="+keyword)
  }
  public debit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/Estaccounts/debit",data);
  }
  public credit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/Estaccounts/credit",data);
  }
  public transfer(accountSource: string,accountDestination: string, amount : number, description:string){
    let data={accountSource, accountDestination, amount, description }
    return this.http.post(environment.backendHost+"/Estaccounts/transfer",data);
  }

  public delete(id: string){
    return this.http.delete(environment.backendHost+"/Estaccounts/"+id)
  }
}
