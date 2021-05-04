// layouts
import HomeLayout from 'src/layouts/home';
// views
import LandingPage from 'src/views/LandingPage';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <HomeLayout>
      <LandingPage />
    </HomeLayout>
  );
}
