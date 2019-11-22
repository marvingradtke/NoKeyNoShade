import React from "react";
import styled from "@emotion/styled";
import { getQueens } from "../api/queens";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Poster = styled.img`
  width: 200px;
  padding: 10px;
`;

export default function QueenList() {
  const [queens, setQueens] = React.useState([]);

  async function refreshQueens() {
    const discoveredQueens = await getQueens();
    setQueens(discoveredQueens);
  }

  React.useEffect(() => {
    refreshQueens();
  }, []);

  return (
    <List>
      {queens.map(queen => (
        <Poster key={queen.id} src={queen.image_url} alt={queen.name} />
      ))}
    </List>
  );
}
