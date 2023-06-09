type ClassActionsProps = {
  focused: boolean;
  hidden: boolean;
};

const classNames = (
  nameOfClass: string,
  classActionsProps?: ClassActionsProps | string | undefined
) => {
  let overAllClass = `${nameOfClass}`;
  if (
    typeof classActionsProps !== "string" &&
    typeof classActionsProps !== "undefined"
  ) {
    overAllClass += classActionsProps.focused ? ` focused` : ``;
    overAllClass += classActionsProps.hidden ? ` hidden` : ``;
  } else {
    overAllClass += ` ${classActionsProps}`;
  }
  return overAllClass;
};

export default classNames;
