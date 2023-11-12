const userTracking = () => {
  // UUI for each device
  const generateID = () => {
    const navigator = window.navigator;
    const screen = window.screen;
    let uid: string = String(navigator.mimeTypes.length);
    uid += String(navigator.userAgent.replace(/\D+/g, ""));
    uid += String(navigator.plugins.length);
    uid += String(screen.height);
    uid += String(screen.width);
    uid += String(screen.pixelDepth);

    return uid;
  };

  const getID = () => generateID();
  const matchID = (uid: string): boolean => uid === generateID();
  return { getID, matchID };
};

export { userTracking };
