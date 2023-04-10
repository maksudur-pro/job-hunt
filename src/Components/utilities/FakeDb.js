// Add Data to Local Storage
const addToDb = (id) => {
  let appliedJobs = {};
  const storeAppliedJobs = localStorage.getItem("Applied-Jobs");
  if (storeAppliedJobs) {
    appliedJobs = JSON.parse(storeAppliedJobs);
  }
  const quantity = appliedJobs[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    appliedJobs[id] = newQuantity;
  } else {
    appliedJobs[id] = 1;
  }
  localStorage.setItem("Applied-Jobs", JSON.stringify(appliedJobs));
};

const getStoredCart = () => {
  let appliedJobs = {};

  // get previous data from local storage
  const storeAppliedJobs = localStorage.getItem("Applied-Jobs");
  if (storeAppliedJobs) {
    appliedJobs = JSON.parse(storeAppliedJobs);
  }
  return appliedJobs;
};

export { addToDb, getStoredCart };
