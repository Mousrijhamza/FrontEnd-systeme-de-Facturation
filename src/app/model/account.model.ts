export interface AccountDetails {
  accountId:            string;
  balance:              number;
  address:              string;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
  accountOperationDTOS: AccountOperation[];
}
export interface EstAccount {
  id:                   string;
  montant:              number;
  createdAt:            Date;
  address:              string;
  AccountStatus:        string;

}

export interface AccountOperation {
  id:            string;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
}
