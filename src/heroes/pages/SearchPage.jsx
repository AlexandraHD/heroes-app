import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import { HeroCard } from "../components"
import { useNavigate, useLocation } from "react-router-dom"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: ''
  });

  const onSearchSubmit = ( event => {
    event.preventDefault();
    // if(searchText.trim().length <= 1) return;
    
    navigate(`?q=${ searchText }`)
    onResetForm();
  })

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form action="" onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder="Search hero"
              name="searchText" 
              id=""
              className="form-control"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            ( q === '')
            ? <div className="alert alert-primary">Search hero</div>
            : ( heroes.length === 0 ) 
              && <div className="alert alert-danger">No hero found with <b>{ q }</b></div>
          } */}

          <div 
            className="alert alert-primary animate__animated animate__fadeIn" 
            style={{ display: showSearch ? '' : 'none' }}
          >
              Search hero
          </div>
          <div 
            className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: showError ? '' : 'none' }}
          >
            No hero found with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero }/>
            ))
          }

        </div>
      </div>
    </>
  )
}
