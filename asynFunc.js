async function setClub() {
  const club = document.getElementById("club").value;
  const setClubPromise = FCContract.setClub(club);
  await setClubPromise;
}

async function getClub() {
  const getClubPromise = FCContract.getClub();
  const Club = await getClubPromise;
  console.log(Club);
  let list = (document.getElementById("clublist").textContent += Club + " ");
}
