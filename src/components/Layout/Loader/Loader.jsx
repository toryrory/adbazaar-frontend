import { ThreeCircles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'linear-gradient(180deg,rgba(19, 27, 44, 0.67) 0%,rgba(29, 33, 37, 0.9) 100%)',
        zIndex: 999,
      }}
    >
      <ThreeCircles
        height="100"
        width="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#f38ff5"
        innerCircleColor="#a3e9ff"
        middleCircleColor="#23314f"
      />
    </div>
  );
}
