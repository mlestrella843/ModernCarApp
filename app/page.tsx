import { CarCard, CustomFilter, Hero, SearchBar } from '@/components';
import ShowMore from '@/components/ShowMore';
import { fuels, yearsOfProduction } from '@/constansts';
import { fetchCars } from '@/utils';


export default async function Home( {searchParams } ) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
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
          <div className="home__filters">
          <SearchBar />

          </div>
            <div className="home__filter-container mt-3">
              <CustomFilter title="fuel" options={fuels}/>
              <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
       
            { !isDataEmpty ? (
              <section>
                <div className="home__cars-wrapper">
                  { allCars?.map( (car) => ( 
                  <CarCard car={car} />    
                  ))}
                </div>

                <ShowMore
                  pageNumber = { ((searchParams.limit) || 10 ) / 10 }
                  isNext = { (searchParams.limit || 10 ) > allCars.length }
                />
              </section>
        
            ) : (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">Ooops, No results</h2>
                <p>{allCars?.message}</p>
              </div>
            )}
          </div>
    </main>
  )
}
