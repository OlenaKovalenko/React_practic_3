import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByQuery } from 'hooks';

export const CountrySearch = () => {
  const { isLoading, error, countries, onHandleSubmit } = useFetchByQuery();
  return (
    <Section>
      <Container>
        <SearchForm onHandleSubmit={onHandleSubmit} />
        {isLoading && <Loader />}
        {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
