import {
  HomePageContainer,
  Section,
  Step,
  Subtitle,
  Title,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>
        Explore with Ease at City Wheels <span> Car Rentals</span>
      </Title>

      <Subtitle>Where Every Journey Begins with a Smile</Subtitle>

      <Section>
        <h3>About Us</h3>
        <p>
          Welcome to City Wheels, your trusted companion in urban and
          cross-country travel. With a fleet that ranges from compact city cars
          to luxurious SUVs, we cater to all your travel needs, ensuring
          comfort, safety, and style on every trip.
        </p>
      </Section>

      <Section>
        <h3>Our Fleet</h3>
        <p>
          Discover our diverse range of vehicles, each meticulously maintained
          and equipped for your journey. Whether you're looking for an
          eco-friendly hatchback, a spacious family van, or a premium sedan, we
          have the perfect match for your adventure.
        </p>
      </Section>

      <Section>
        <h3>How It Works</h3>
        <Step>
          1. Choose Your Ride: Browse our collection and select the vehicle that
          suits your needs.
        </Step>
        <Step>
          2. Book Online: Use our easy booking system to reserve your car and
          schedule pick-up.
        </Step>
        <Step>
          3. Hit the Road: Pick up your car and enjoy a seamless driving
          experience.
        </Step>
      </Section>

      <Section>
        <h3>Special Offers</h3>
        <p>
          Sign up now and get access to exclusive deals and discounts. Enjoy
          special weekend rates, loyalty rewards, and seasonal offers designed
          to make your travels more enjoyable and affordable.
        </p>
      </Section>

      <Section>
        <h3>Testimonials</h3>
        <p>
          "City Wheels made our family trip a breeze. The kids loved the
          spacious SUV, and we appreciated the impeccable service." - The
          Johnson Family
        </p>
        <p>
          "As a frequent traveler, I always rely on City Wheels for their
          reliability and excellent customer care." - Sarah K.
        </p>
      </Section>

      <Section>
        <h3>FAQ</h3>
        <p>
          Got questions? We've got answers! Check out our FAQ section for
          information on rental policies, insurance options, and more.
        </p>
      </Section>
    </HomePageContainer>
  );
};

export default HomePage;
