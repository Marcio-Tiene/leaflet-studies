import postesRepository from '../../utils/postes.json';

export function confirmInstalation(userCoords: number[]) {
  const postes = postesRepository.unidades;
  const viablePoste = postes.find(
    (poste) =>
      calcCrow(
        userCoords[0],
        userCoords[1],
        Number(poste.latitude),
        Number(poste.longitude)
      ) < 150
  );

  if (!!viablePoste) {
    return true;
  } else {
    return false;
  }
}

function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const plat1 = toRad(lat1);
  const plat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(plat1) * Math.cos(plat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = (R * c * 180 * 10) / Math.PI;

  return d;
}
function toRad(Value: number) {
  return (Value * Math.PI) / 180;
}