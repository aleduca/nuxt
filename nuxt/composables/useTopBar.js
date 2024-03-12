export const useTopBar = (topBar, showTopBar) => {
  if(topBar.value === false){
    showTopBar.value = false;
    topBar.value = false;
    return;
  }

  if(topBar.value === undefined || topBar.value === true){
    showTopBar.value = true;
    topBar.value = true;
  }
}