import { useMemo } from 'react';
import {getHeroesByPublisher} from '../helpers'
import { HeroCard } from './HeroCard';

// eslint-disable-next-line react/prop-types
export const HeroList = ( { publisher } ) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher]);
    
  return (
    <div className='row row-cols-1 rows-cols-md-3 g-3'>
        {
            heroes.map( hero => (
                <HeroCard 
                    key={ hero.id }
                    { ...hero }
                />
            ))
        }
    </div>
  )
}
