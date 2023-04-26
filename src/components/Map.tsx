import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface IMap {
  setActiveCountryCode: (e: string | undefined) => void;
}

const Map: React.FC<IMap> = ({ setActiveCountryCode }) => {
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const geocoder = new google.maps.Geocoder();
    const latLng = event.latLng;

    geocoder.geocode({ location: latLng }, (data, status) => {
      if (status === 'OK' && data) {
        //TODO maybe there is a better way to do it ? - as it doesnt look to clean - need to look more into API
        const lastDataIndex = data.length - 1;
        const addressComponents = data[lastDataIndex].address_components;
        const countryCode = addressComponents.find(component => component.types.includes('country'))?.short_name;
        setActiveCountryCode(countryCode);
      } else {
        // TODO what should we do when the user will not click anything - 
        // for not lets just do nothing and ask for requirements - that we don't have   
        console.error(`Geocode failed: ${status}`);
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <GoogleMap
        mapContainerStyle={{ minHeight: '400px', minWidth: '100%' }}
        center={{ lat: 46.8132, lng: 8.2242 }}
        zoom={5}
        onClick={handleMapClick}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
