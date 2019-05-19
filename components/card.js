function card(props) {
  const match = props.result;
  return (
    <div className="card card-body mb-4">
      <h4>
        {match.name} ({match.abbr}) <span className="text-primary">{match.capital}</span>
      </h4>
      <small>
        Lat: {match.lat} / Long: {match.long}
      </small>
    </div>
  );
}

export default card;
