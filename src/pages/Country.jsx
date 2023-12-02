import {
  Section,
  Container,
  CountryInfo,
  Loader,
  Heading,
  GoBackBtn,
} from 'components';
import { useFetchCountry } from 'hooks';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { isLoading, error, country } = useFetchCountry();
  const location = useLocation();
  const goBackLink = useRef(location?.state?.from ?? routes.HOME);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink.current}>Go back countries</GoBackBtn>
        {isLoading && <Loader />}
        {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
