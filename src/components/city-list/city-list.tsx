import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { updateCity } from '../../store/action';
import { TCity } from '../../types/types';
import classNames from 'classnames';
import { getCurrentCity } from '../../store/selectors';

interface ICityList {
  cities: TCity[];
}

function CityList({ cities }: ICityList) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCurrentCity);

  const handleCityCLick: (
    evt: React.MouseEvent<HTMLAnchorElement>,
    city: TCity
  ) => void = (evt, city) => {
    evt.preventDefault();
    dispatch(updateCity({ city }));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.name} className="locations__item">
          <Link
            className={classNames('locations__item-link', 'tabs__item', {
              'tabs__item--active': currentCity.name === city.name,
            })}
            to={AppRoute.MAIN}
            onClick={(evt) => handleCityCLick(evt, city)}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
