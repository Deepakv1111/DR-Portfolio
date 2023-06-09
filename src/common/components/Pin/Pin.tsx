"use client";

import React, {
  FC,
  MutableRefObject,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LogInUtility } from "../../utility/LogInUtility";
import PinDigit from "../PinDigit";
import UserStatus from "../../data/UserStatus";
import AppContext from "../../context/AppContext";
import IAppContext from "../../type/IAppContext";

const Pin = () => {
  const { userStatus, setUserStatusTo } = useContext<IAppContext>(AppContext);

  const [pin, setPinTo] = useState<string>("");

  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      (userStatus === UserStatus.LoggingIn ||
        userStatus === UserStatus.LogInError) &&
      ref.current
    ) {
      ref.current.focus();
    } else {
      setPinTo("");
    }
  }, [userStatus]);

  useEffect(() => {
    if (pin.length === 4) {
      const verify = async (): Promise<void> => {
        if (typeof setUserStatusTo !== "undefined") {
          try {
            setUserStatusTo(UserStatus.VerifyingLogIn);

            if (await LogInUtility.verify(pin)) {
              setUserStatusTo(UserStatus.LoggedIn);
            }
          } catch (err) {
            console.error(err);

            setUserStatusTo(UserStatus.LogInError);
          }
        }
      };

      verify();
    }

    if (userStatus === UserStatus.LogInError) {
      if (typeof setUserStatusTo !== "undefined") {
        setUserStatusTo(UserStatus.LoggingIn);
      }
    }
  }, [pin]);

  const handleOnClick = (): void => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const handleOnCancel = (): void => {
    if (typeof setUserStatusTo !== "undefined") {
      setUserStatusTo(UserStatus.LoggedOut);
    }
  };

  const handleOnChange = (e: any): void => {
    if (e.target.value.length <= 4) {
      setPinTo(e.target.value.toString());
    }
  };

  const getCancelText = (): JSX.Element => {
    return (
      <span id="app-pin-cancel-text" onClick={handleOnCancel}>
        Cancel
      </span>
    );
  };

  const getErrorText = () => {
    if (userStatus === UserStatus.LogInError) {
      return <span id="app-pin-error-text">Invalid</span>;
    }
  };

  return (
    <div id="app-pin-wrapper">
      <input
        disabled={
          userStatus !== UserStatus.LoggingIn &&
          userStatus !== UserStatus.LogInError
        }
        id="app-pin-hidden-input"
        maxLength={4}
        ref={ref}
        type="number"
        value={pin}
        onChange={handleOnChange}
      />
      <div id="app-pin" onClick={handleOnClick}>
        <PinDigit focused={pin.length === 0} value={pin[0]} />
        <PinDigit focused={pin.length === 1} value={pin[1]} />
        <PinDigit focused={pin.length === 2} value={pin[2]} />
        <PinDigit focused={pin.length === 3} value={pin[3]} />
      </div>
      <h3 id="app-pin-label">
        Enter PIN (1234) {getErrorText()} {getCancelText()}
      </h3>
    </div>
  );
};

export default Pin;
