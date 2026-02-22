import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  return <h2>Szczegóły filmu ID: {id}</h2>;
}

export default MovieDetails;