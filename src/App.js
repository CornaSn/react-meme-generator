import FetchData from './Components/FetchData';
import Header from './Components/Header';
import TopBottomText from './Components/TopBottomText';
import styles from './styles.modules.scss';

export default function App() {
  return (
    <div className="body">
      <br />
      <br />
      <Header />
      <br />
      <br />
      <div className="container">
        <TopBottomText />
      </div>

      <br />
      <br />
      <br />
      <br />
      <FetchData />
      <br />
      <br />
    </div>
  );
}
