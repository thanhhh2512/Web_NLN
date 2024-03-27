import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import  Paper   from "@mui/material/Paper";
import "./Table.css";
import { OrderData } from "../../../../common/json/OrderData";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = OrderData.map((item) => {

  const productNames = item.products.map((product) => {
    return <div key={product.ProductNo}>{product.ProductName}</div>;
  });

  // Tạo đối tượng dữ liệu mới bằng cách gọi hàm createData và trả về nó từ mỗi vòng lặp
  return createData(productNames[0], item.id, item.orderDate, getStatus(item.status));
});

// Hàm getStatusLabel để chuyển đổi trạng thái thành nhãn tương ứng
function getStatus(status) {
  switch (status) {
    case 1:
      return "Đã xác nhận";
    case 2:
      return "Đã giao hàng";
    case 3:
      return "Đã gửi hàng";
    default:
      return "Chưa được xác nhận";
  }
}



const makeStyle=(status)=>{
  if(status === 'Đã xác nhận')
  {
    return {
      background: ' rgb(252, 229, 233)',
      color: 'black',
    }
  }
  else if(status === 'Đã giao hàng')
  {
    return{
      background: ' rgb(252, 229, 233)',
      color: 'black',
    }
  }
  else if(status === 'Đã gửi hàng')
  {
    return{
      background: ' rgb(252, 229, 233)',
      color: 'black',
    }
  }
  else if(status === 'Chưa được xác nhận')
  {
    return {
      background: " rgb(252, 229, 233)",
      color: "black",
    };
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Đơn hàng gần đây</h3>
        <TableContainer
          // component={Paper}
          // style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tên sản phẩm</TableCell>
                <TableCell align="left">Mã đơn</TableCell>
                <TableCell align="left">Ngày lập đơn</TableCell>
                <TableCell align="left">Trạng thái</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
