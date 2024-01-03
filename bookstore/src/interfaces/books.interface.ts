
//estructura general
export interface Book {
  id: number;
  author: string;
  isbn: string;
  release_date: Date;
  title: string;
  user_id: number;
}

//estructura para crear libro
export interface NewBook {
  author: string;
  isbn: string;
  release_date: Date;
  title: string;
  user_id: number;
}
