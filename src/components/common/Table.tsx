import type { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => {
  return (
    <table className='table table-striped table-bordered'>{children}</table>
  );
};

export default Table;
