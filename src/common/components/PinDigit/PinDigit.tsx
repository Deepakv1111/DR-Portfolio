import React, { FC, useEffect, useState } from "react";
import { IPinDigitProps } from "../../type/IPinDigitProps";
import classNames from "../../utility/classNames";

const PinDigit: FC<IPinDigitProps> = (props: IPinDigitProps) => {
  const [hidden, setHiddenTo] = useState<boolean>(false);

  useEffect(() => {
    if (props.value) {
      // const timeout: NodeJS.Interval = setTimeout(() => {
      //   setHiddenTo(true);
      // }, 500);

      const timeout = setTimeout(() => {
        setHiddenTo(true);
      }, 500);

      return () => {
        setHiddenTo(false);

        clearTimeout(timeout);
      };
    }
  }, [props.value]);

  return (
    <div
      className={classNames("app-pin-digit", {
        focused: props.focused,
        hidden,
      })}
    >
      <span className="app-pin-digit-value">{props.value || ""}</span>
    </div>
  );
};

export default PinDigit;
