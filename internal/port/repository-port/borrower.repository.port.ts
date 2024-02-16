import { Borrower } from "../../core/domain/model/borrower.model";


export interface IBorrowerRepositoryPort {
  getAllBorrowers(page: number, pageSize: number): Promise<{ borrowers: Borrower[]; total: number }>;
  getBorrowerByReference(borrowerReference: string): Promise<Borrower>;
  createBorrower(borrower: Borrower): Promise<Borrower>;
  updateBorrower(borrowerReference: string, updatedBorrower: Borrower): Promise<Borrower>;
  deleteBorrower(borrowerReference: string): Promise<boolean>;
  getBorrowByName(name: string): Promise<Borrower>
}