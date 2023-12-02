import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks';



export const Home = () => {

  const { isLoading, error, countries } = useFetchCountries();
  
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}
        {countries.length > 0 && <CountryList countries={countries}/>}
      </Container>
    </Section>
  );
};
