/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export const HeroCard = ({ ...hero }) => {

    const heroeImageUrl = `../heroes/${ hero.id }.jpg`;

  return (
    <div className="animate__animated animate__fadeIn">
        <div className="card">
            <div className="row">
                <div className="col-4">
                    <img src={ heroeImageUrl } alt={ hero.superheroe } className="card-img"/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ hero.superhero }</h5>
                        <p className="card-text">{ hero.alter_ego}</p>
                        {
                            (hero.alter_ego !== hero.characters) && <p>{ hero.characters }</p>
                        }

                        <p className="card-text">
                            <small className="text_muted">{ hero.first_appearance }</small>
                        </p>

                        <Link to={`/hero/${hero.id}`}>
                            More info...
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
