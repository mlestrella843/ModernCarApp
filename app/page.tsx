import { CarCard, CustomFilter, Hero, SearchBar } from '@/components';
import { fetchCars } from '@/utils';


export default async function Home() {

  const allCars = await fetchCars();
  //console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-widht" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like </p>
        </div>
      </div>

        <div className="home__filters">
          <SearchBar />
        </div>
            <div className="home__filter-container mt-3">
              <CustomFilter title="fuel"/>
              <CustomFilter title="year"/>
            </div>

            { !isDataEmpty ?  (
              <section>
                <div className="home__cars-wrapper">
                  { allCars?.map( (car) => ( 
                  <CarCard car={car} />    
                  ))}
                </div>
              </section>
         
            ) : (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">Ooops, No results</h2>
                <p>{allCars?.message}</p>
              </div>
            )}
         
    </main>
  )
}
