type Props = {
  museos: any[];
};

export default function MuseumInfo({ museos }: Props) {
  if (museos.length === 0) return null;

  const museo = museos[0];

  return (
    <div className="museum-info">
      <ul>
        <li>
          <strong>Nombre museo:</strong> {museo.museum_name}
        </li>
        <li>
          <strong>País museo:</strong> {museo.museum_country}
        </li>
        <li>
          <strong>Ciudad museo:</strong> {museo.museum_city}
        </li>
        <li>
          <strong>Municipalidad museo:</strong> {museo.museum_municipality}
        </li>
        <li>
          <strong>Tipo de museo:</strong> {museo.museum_ownership_type}
        </li>
        <li>
          <strong>Horario museo:</strong> {museo.museum_opening_hours}
        </li>
      </ul>
    </div>
  );
}
