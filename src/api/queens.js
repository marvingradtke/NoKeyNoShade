export async function getQueens() {
  const response = await fetch(
    `https://www.nokeynoshade.party/api/queens/winners`
  );

  const data = await response.json();
  return data;
}
