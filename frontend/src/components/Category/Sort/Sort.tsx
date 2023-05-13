import { FC, useEffect, useState } from "react";
import styles from "./Sort.module.scss";
import Select from "react-select";
import { useStore } from "../store";

interface IOptions {
  value: string;
  label: string;
}

const options: IOptions[] = [
  {
    value: "По умолчанию",
    label: "По умолчанию",
  },
  {
    value: "По убыванию",
    label: "По убыванию",
  },
  {
    value: "По возрастание",
    label: "По возрастание",
  },
];

export const Sort: FC = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<IOptions | null>();
  const {
    setSelectedOption: setSelectedOptionStore,
    selectedOption: selectedOptionStore,
  } = useStore();

  useEffect(() => {
    if (!selectedOption) return setSelectedOptionStore("По умолчанию");

    setSelectedOptionStore(selectedOption.value);
  }, [selectedOption]);

  return (
    <div className={styles.sort}>
      <Select
        placeholder="По умолчанию"
        noOptionsMessage={() => "Такого нету"}
        className={styles.select}
        value={{ value: selectedOptionStore, label: selectedOptionStore }}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          colors: {
            ...theme.colors,
            primary25: "#e2e1e1",
            primary: "#E07153",
          },
        })}
      />
    </div>
  );
};
