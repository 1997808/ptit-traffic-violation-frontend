import React from "react";
import { Td } from "../../assets/util/Td";
import { vndFormatter } from "../../assets/util/util";
import { ButtonDelete } from "../Button/ButtonDelete";
import { MyAxios } from "../../assets/util/api";

export const AdminDocumentItem = ({
  id,
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
  return (
    <tr
      key={id}
      className="border-b border-solid border-gray-200 hover:bg-white"
    >
      <Td to={`/admin/item/${id}`}>{id}</Td>
      <Td to={`/admin/item/${id}`}>{licensePlate}</Td>
      <Td to={`/admin/item/${id}`}>{vndFormatter.format(amount)}</Td>
      <Td to={`/admin/item/${id}`}>{status}</Td>
      <Td>
        <div onClick={() => deleteDocument(id)}>
          <ButtonDelete text="Xóa" type="button" />
        </div>
      </Td>
    </tr>
  );
};
