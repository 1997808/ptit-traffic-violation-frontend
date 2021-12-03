import React from "react";
import { Td } from "../../assets/util/Td";
import {
  vndFormatter,
  documentPayFormatter,
  statusDisableFormatter,
} from "../../assets/util/util";
import { ButtonDelete } from "../Button/ButtonDelete";
import { Button } from "../Button/Button";
import { MyAxios } from "../../assets/util/api";

export const AdminDocumentItem = ({
  id,
  name,
  licensePlate,
  amount,
  status,
  change,
  setChange,
}) => {
  const deleteDocument = async (id) => {
    await MyAxios.delete(`document/deleteDocument.php?id=${id}`)
      .then((res) => {
        change++;
        setChange(change);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const payDocument = async (id) => {
    await MyAxios.post(`document/payDocument.php?id=${id}`)
      .then((res) => {
        change++;
        setChange(change);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <tr
      key={id}
      className={`border-b border-solid border-gray-200 hover:bg-white transition duration-300 ${
        status === "paid" ? "bg-green-100" : "bg-white"
      } hover:bg-white`}
    >
      <Td to={`/admin/item/${id}`}>{name}</Td>
      <Td to={`/admin/item/${id}`}>{licensePlate}</Td>
      <Td to={`/admin/item/${id}`}>{vndFormatter.format(amount)}</Td>
      {/* <Td to={`/admin/item/${id}`}>{statusFormatter(status)}</Td> */}
      <Td>
        <div onClick={() => payDocument(id)}>
          <Button
            text={`${documentPayFormatter(status)}`}
            type="button"
            disabled={statusDisableFormatter(status)}
          />
        </div>
      </Td>
      <Td>
        <div onClick={() => deleteDocument(id)}>
          <ButtonDelete text="Xóa" type="button" />
        </div>
      </Td>
    </tr>
  );
};
