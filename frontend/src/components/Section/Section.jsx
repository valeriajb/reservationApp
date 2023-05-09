import CardCountry from "../CardCountry/CardCountry";
import CardBrowse from "../CardBrowse/CardBrowse";
import CardHome from "../CardHome/CardHome";
import "./Section.css";
const listCountries = [
  {
    id: 1,
    image:
      "https://a.cdn-hotels.com/gdcs/production196/d818/be3d3175-42bb-48ae-8465-c9a103e18003.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    county: "Dublin",
    description: "123 properties",
  },
  {
    id: 2,
    image:
      "https://www.greenpeace.org/static/planet4-colombia-stateless/2023/04/b948b60f-bogota.jpeg",
    county: "Colombia",
    description: "553 properties",
  },
  {
    id: 3,
    image:
      "https://internationalcruises.mx/wp-content/uploads/2021/06/islandia.jpg",
    county: "Islandia",
    description: "552 properties",
  },
];

const listTypeBrowse = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsK806Rb80YcpvAjJaoBQ9iZ3hYOwgVIS9w&usqp=CAU",
    title: "Hotels",
    description: "233 Hotels",
  },
  {
    id: 2,
    image:
      "https://www.apartamentsvoralmar.cat/wp-content/uploads/2021/06/apartaments-voralmar-caldes-d-estrac-home-slider-mobile.jpg",
    title: "Apartaments",
    description: "2331 Hotels",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7icS5TFK-8awjDvlBzm8SvaZJ0o_ojDwJw&usqp=CAU",
    title: "Resort",
    description: "2331 Hotels",
  },
  {
    id: 4,
    image:
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/f8/37/f3.jpg",
    title: "Villas",
    description: "233 Hotels",
  },
];

const listHomes = [
  {
    id: 1,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/villas-in-south-of-france-la-tourelle-2-641707ba7bb71.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
    title: "Apartahotel Stare Miastro",
    country: "Madrid",
    price: 120,
    rating: 8.9,
    opinion: "Excelente",
  },
  {
    id: 2,
    image:
      "data:image/jpeg;base64,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",
    title: "Comfort Suites Airport",
    country: "Austin",
    price: 140,
    rating: 9.3,
    opinion: "Exceptional",
  },
  {
    id: 3,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/85/2a/20/five-senses-luxury-villas.jpg?w=700&h=-1&s=1",
    title: "Comfort Suites Airport",
    country: "Lisbon",
    price: 99,
    rating: 8.8,
    opinion: "Excellent",
  },
  {
    id: 4,
    image:
      "data:image/jpeg;base64,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",
    title: "Hilton Garden Inn",
    country: "Berlin",
    price: 105,
    rating: 8.9,
    opinion: "Excellent",
  },
];
function Section() {
  return (
    <main>
      <section className="sectionCountries">
        {listCountries.map((county) => (
          <CardCountry
            key={county.id}
            image={county.image}
            country={county.county}
            description={county.description}
          />
        ))}
      </section>
      <section className="sectionTypeBrowse">
        <h1 className="titleType">Browse by property type</h1>
        <div className="listCardsBrowse">
          {listTypeBrowse.map((item) => (
            <CardBrowse
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section className="sectionHomeOptions">
        <h1 className="titleType">Home guest Love</h1>
        <div className="listCardsBrowse">
          {" "}
          {listHomes.map((item) => (
            <CardHome
              key={item.id}
              image={item.image}
              title={item.title}
              country={item.country}
              price={item.price}
              description={item.description}
              opinion={item.opinion}
              rating={item.rating}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Section;
