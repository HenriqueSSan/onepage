import byImg from '../../assets/by-logo.svg';

export function Footer() {
  return (
    <footer className="l-footer bg-black">
      <div className="l-footer__container container">
        <p className="l-footer__copyright font-family-100 text-center clr-white">
          Todos os direitos reservados.
        </p>
        <p className="l-footer__developer font-family-100 text-center clr-white">
          Developer by
          <img src={byImg} alt="Henrique Santos Santana" />
        </p>
      </div>
    </footer>
  );
}
