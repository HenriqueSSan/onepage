import './styles/index.scss';

import Containers from './containers';
import { Footer } from './layout/Footer';

export function App() {
  return (
    <>
      <main className="l-main">
        <Containers.Hero />
        <Containers.Features />
        <Containers.Contact />
      </main>
      <Footer />
    </>
  );
}
