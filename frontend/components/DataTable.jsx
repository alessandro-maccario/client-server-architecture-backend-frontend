export default function DataTable({ data }) {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  // get the column names
  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column}>{String(row[column])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
