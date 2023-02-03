import React from "react";

export default function DateTimePretty(Component) {
  return function (props, ...args) {
    const ONEHOUR = 3600*1000;
    const ONEDAY = 3600*24*1000;
    const ONEMINUTE = 60*1000
    const ONEMONTH = 60*60*24*30;
    let now = new Date('2018-03-03 12:20:00').getTime(); //тест время
    let dateFromList = new Date(props.date).getTime();

    if ((dateFromList + ONEHOUR) > now) {
      return <p className="date">{`published ${(now - dateFromList)/ONEMINUTE} minutes ago`}</p>;
    } else if ((dateFromList + ONEHOUR) < now) {
      if ((now - dateFromList)/ONEHOUR > 24) {
        return <p className="date">{`published ${((now - dateFromList)/ONEDAY).toFixed(0)} days ago`}</p>;
      } else {
        return <p className="date">{`published ${((now - dateFromList)/ONEHOUR).toFixed(0)} hours ago`}</p>;
      }
    }    
    
    
    return Component.apply(this, [props, ...args])
  };
}
