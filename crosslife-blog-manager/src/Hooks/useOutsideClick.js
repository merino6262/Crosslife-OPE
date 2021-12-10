import React from 'react'

const useOutsideClick = (wrapperRef, setActive, buttonVisibilityControlRef) => {
  React.useEffect(() => {
    const handleClickOutside = (event) =>{
      const clickOutsideButton = buttonVisibilityControlRef ? !buttonVisibilityControlRef.current.contains(event.target) : true;
      
      if(clickOutsideButton && !wrapperRef.current.contains(event.target)){
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [wrapperRef, setActive, buttonVisibilityControlRef])
}

export default useOutsideClick
