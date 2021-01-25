const sortEmployees = (sortedBy, value, currentRes, callback) => {
  if (sortedBy === `${value}_a-z`) {
    const sortedEmployees = currentRes.sort((a, b) => {
      switch (value) {
        case "name":
          return a.name.first.toLowerCase() < b.name.first.toLowerCase()
            ? 1
            : -1;
        case "email":
          return a.email < b.email ? 1 : -1;
        case "phone":
          return parseInt(a.cell) < parseInt(b.cell) ? 1 : -1;
      }
    });
    callback(sortedEmployees, "_z-a");
  } else {
    const sortedEmployees = currentRes.sort((a, b) => {
      switch (value) {
        case "name":
          return a.name.first.toLowerCase() > b.name.first.toLowerCase()
            ? 1
            : -1;
        case "email":
          return a.email > b.email ? 1 : -1;
        case "phone":
          return parseInt(a.cell) > parseInt(b.cell) ? 1 : -1;
      }
    });
    callback(sortedEmployees, "_a-z");
  }
};

export default sortEmployees;
