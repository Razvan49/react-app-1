import Sidebar from './Sidebar/Sidebar';
import Card from './Card/Card';
import Button from './Button/Button';

export const App = () => {
  return (
    <main>
      <Sidebar />
      <Card />
      <Button label="Add Tutor" />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Schimb acest text
      </div>
    </main>
  );
};
