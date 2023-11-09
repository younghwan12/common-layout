import { Column as PColumn } from "primereact/column";

class Column extends PColumn {
  static defaultProps = {
    ...PColumn,
    alignHeader: "center",
    whiteSpace: "pre-line",
  };
}

export default Column;
