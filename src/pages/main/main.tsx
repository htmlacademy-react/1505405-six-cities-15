import OfferList from '../../components/offer-list';
import { CITIES } from '../../mocks/cities';
import CityList from '../../components/city-list';
import { useAppSelector } from '../../hooks/store';
import { getCurrentOffers } from '../../store/selectors';

function Main(): JSX.Element {
  const cityOffers = useAppSelector(getCurrentOffers);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList cities={CITIES} />
        </section>
      </div>
      <OfferList offers={cityOffers} />
    </main>
  );
}

export default Main;
