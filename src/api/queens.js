export async function getQueens() {
  const response = await fetch(
    `http://www.nokeynoshade.party/api/queens/winners`
  );

  const data = await response.json();
  return data;
}
