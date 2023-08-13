import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      hotelid: 1143155,
      roomid:446,
      customer: "john1",
      date: "1 March",
      amount: 785,
      method: "Cash",
      status: "Approved",
    },
    {
      hotelid: 2235235,
      roomid:567,
      customer: "cap",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Approved",
    },
    {
      hotelid: 2342353,
      roomid:101,
      customer: "john",
      date: "1 March",
      amount: 35,
      method: "Cash ",
      status: "Approved",
    },
    {
      hotelid: 2357741,
      roomid:45,
      customer: "jerry",
      date: "1 March",
      amount: 920,
      method: "Online Payment",
      status: "Approved",
    },
    {
      hotelid: 2342355,
      roomid:78,
      customer: "tom",
      date: "1 March",
      amount: 2000,
      method: "Online Payment",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">HOTEL ID</TableCell>
            <TableCell className="tableCell">ROOM ID</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.hotelid}</TableCell>
              <TableCell className="tableCell">{row.roomid}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
