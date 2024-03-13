import CompanyLogo from '/stampliLogo.svg';
import './Header.css';

export default function Header() {

  return (
    <header>
      <img src={CompanyLogo} alt="Stylized atom" />
      <h1>ביחד בשבילך</h1>
      <p>
        חג פורים שמח, מקווה שתאהבו את המחווה
      </p>
    </header>
  );
}