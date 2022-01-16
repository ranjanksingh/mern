import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function EditMovie() {
  const [form, setForm] = useState({
    name: "",
    year: "",
    rating: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/movies/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/movies");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedMovie = {
      name: form.name,
      year: form.year,
      rating: form.rating,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/movies/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(editedMovie),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/movie");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Movie</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year: </label>
          <input
            type="text"
            className="form-control"
            id="year"
            value={form.year}
            onChange={(e) => updateForm({ year: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating: </label>
          <input
            type="text"
            className="form-control"
            id="rating"
            value={form.rating}
            onChange={(e) => updateForm({ rating: e.target.value })}
          />
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Movie"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
