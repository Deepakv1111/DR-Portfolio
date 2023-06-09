"use client";

import { FC, RefObject, useRef, useState } from "react";
import defaultPosition from "../../data/defaultPosition";
import { IScrollableComponentProps } from "../../type/IScrollableComponentProps";
import { IScrollableComponentState } from "../../type/IScrollableComponentState";
import classNames from "../../utility/classNames";

const ScrollableComponent = (props: IScrollableComponentProps) => {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const [state, setStateTo] = useState<IScrollableComponentState>({
    grabbing: false,
    position: defaultPosition(),
  });

  const handleOnMouseDown = (e: any): void => {
    setStateTo({
      ...state,
      grabbing: true,
      position: {
        x: e.clientX,
        left: ref.current?.scrollLeft || 0,
      },
    });
  };

  const handleOnMouseMove = (e: any): void => {
    if (state.grabbing && ref.current) {
      const left: number = Math.max(
        0,
        state.position.left + (state.position.x - e.clientX)
      );

      ref.current.scrollLeft = left;
    }
  };

  const handleOnMouseUp = (): void => {
    if (state.grabbing) {
      setStateTo({ ...state, grabbing: false });
    }
  };

  return (
    <div
      ref={ref}
      className={classNames("scrollable-component", props.className)}
      id={props.id}
      onMouseDown={handleOnMouseDown}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseUp}
    >
      {props.children}
    </div>
  );
};

export default ScrollableComponent;
