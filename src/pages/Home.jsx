import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks/useFetchCountries';

export const Home = () => {

  const { isLoading, error, countries } = useFetchCountries();

  console.log('countries', countries);
  return (
    <Section>
      <Container>
        <h2>Home</h2>
      </Container>
    </Section>
  );
};
