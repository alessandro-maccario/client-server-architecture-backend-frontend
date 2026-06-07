"use client";

import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ data }) {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const columns = Object.keys(data[0]).map((key) => ({
    field: key,
    headerName: key.toUpperCase(),
    flex: 1,
  }));

  return (
    <div className="table-container">
      <DataGrid
        rows={data}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        disableRowSelectionOnClick
      />
    </div>
  );
}
