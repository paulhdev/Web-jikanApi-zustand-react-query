import MoonLoader from 'react-spinners/MoonLoader'

export default function Loader() {

  return (

    <MoonLoader
      color='#D53053'
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

  );

};
