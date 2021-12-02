import React from "react";
import { Td } from "../../assets/util/Td";
import { vndFormatter } from "../../assets/util/util";
import { ButtonDelete } from "../Button/ButtonDelete";
import { MyAxios } from "../../assets/util/api";

export const AdminViolationItem = ({
  id,
  name,
  amount,
  vehicle,
  change,
  setChange,
}) => {
  const deleteViolation = async (id) => {
    await MyAxios.delete(`violation/deleteViolation.php?id=${id}`)
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
      <Td to={`/admin/violation/${id}`}>{id}</Td>
      <Td to={`/admin/violation/${id}`}>{name}</Td>
      <Td to={`/admin/violation/${id}`}>{vndFormatter.format(amount)}</Td>
      <Td to={`/admin/violation/${id}`}>{vehicle}</Td>
      <Td>
        <div onClick={() => deleteViolation(id)}>
          <ButtonDelete text="Xóa" type="button" />
        </div>
      </Td>
    </tr>
  );
};

// await MyAxios.delete(`violation/deleteViolation.php?id=${id}`, {
//   data: { id: id },
// });
