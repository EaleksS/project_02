import { FC, useState } from "react";
import styles from "./Map.module.scss";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SingleValue } from "react-select";
import { Option } from "react-google-places-autocomplete/build/types";

export const Map: FC = (): JSX.Element => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA",
    libraries: ["places"],
  });

  const [value, setValue] = useState<SingleValue<Option>>(null);

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <div>Loading...</div>;

  console.log(value);

  return (
    <div className={styles.map}>
      <GoogleMap
        center={!value ? { lat: 62.0313273, lng: 129.6605012 } : value.value}
        zoom={11}
        mapContainerStyle={{ height: "100%" }}
        options={{ disableDefaultUI: true }}
      >
        <div className={styles.GooglePlacesAutocomplete}>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA"
            apiOptions={{ language: "sa", region: "sa" }}
            autocompletionRequest={{
              //   bounds: [
              //     { lat: 62.17, lng: 129.57 },
              //     { lat: 61.93, lng: 129.9 },
              //   ],
              location: { lat: 62.028, lng: 129.732 },
              radius: 2000000, // set the radius (in meters) to limit the search results within Sakha Republic
              types: ["geocode", "establishment"],
              componentRestrictions: { country: "ru" },
            }}
            selectProps={{
              required: true,
              value,
              onChange: setValue,

              theme: (theme) => ({
                ...theme,
                borderRadius: 8,
                colors: {
                  ...theme.colors,
                  primary25: "#e2e1e1",
                  primary: "#E07153",
                },
              }),
              placeholder: "Введите полный адрес",
              noOptionsMessage: () => "Введите адрес",
              loadingMessage: () => "загрузка",
            }}
          />
        </div>
      </GoogleMap>
    </div>
  );
};
