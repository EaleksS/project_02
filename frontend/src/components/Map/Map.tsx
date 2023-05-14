import { FC, useState } from "react";
import styles from "./Map.module.scss";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
  MarkerF,
} from "@react-google-maps/api";
import { Loader } from "../UI/Loader/Loader";

interface Location {
  lat: number;
  lng: number;
}

export const Map: FC = (): JSX.Element => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA",
    libraries: ["places"],
  });

  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
  const [center, setCenter] = useState<Location>({
    lat: 62.02781,
    lng: 129.73242,
  });
  const [value, setValue] = useState<string>("");
  const [isBox, setIsBox] = useState<boolean>(false);

  const onSearchBoxLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces()!;
      if (places.length === 0) {
        console.log("No places found");
        return;
      }

      console.log(places[0]);

      if (places[0].formatted_address) {
        setValue(places[0]?.formatted_address);
        setIsBox(true);
      }

      setCenter({
        lat: places[0]?.geometry?.location?.lat() ?? 62.02781,
        lng: places[0]?.geometry?.location?.lng() ?? 129.73242,
      });
    }
  };

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <Loader />;

  return (
    <div className={styles.map}>
      <GoogleMap
        center={center}
        zoom={isBox ? 15 : 11}
        mapContainerStyle={{ height: "100%" }}
        options={{ disableDefaultUI: true }}
      >
        {isBox && <MarkerF position={center} />}
        <StandaloneSearchBox
          onLoad={onSearchBoxLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Введите адрес"
            value={value ? `Якутск ${value}` : ""}
            onChange={(e) => setValue(e.target.value.replaceAll("Якутск ", ""))}
          />
        </StandaloneSearchBox>
      </GoogleMap>
    </div>
  );
};
